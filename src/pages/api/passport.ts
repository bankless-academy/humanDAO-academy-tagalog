/* eslint-disable no-console */
import { NextApiRequest, NextApiResponse } from 'next'
import { Passport } from '@gitcoinco/passport-sdk-types'
import { PassportReader } from '@gitcoinco/passport-sdk-reader'

import { db, TABLE, TABLES, getUserId } from 'utils/db'
import { GENERIC_ERROR_MESSAGE } from 'constants/index'
import { CERAMIC_PASSPORT, NUMBER_OF_STAMP_REQUIRED } from 'constants/passport'
import { filterValidStamps } from 'utils/passport'

const reader = new PassportReader(CERAMIC_PASSPORT, '1')

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const { address } = req.query

  if (!address || typeof address === 'object')
    return res.json({ error: 'Wrong params' })

  console.log('address', address)

  const userId = await getUserId(address)
  console.log(userId)
  if (!(userId && Number.isInteger(userId)))
    return res.json({ error: 'userId not found' })

  const [user] = await db(TABLES.users)
    .select('sybil_user_id')
    .where('address', 'ilike', `%${address}%`)
  const isBot =
    req.headers['user-agent'].includes('python') ||
    req.headers['user-agent'].includes('curl') ||
    user?.sybil_user_id ||
    false
  console.log('isBot', isBot)

  // TODO: make this dynamic
  type SybilCheckTypes = 'GITCOIN_PASSPORT' | '35kBANK'
  const SYBIL_CHECK: SybilCheckTypes = 'GITCOIN_PASSPORT'

  const requirement = `At least ${NUMBER_OF_STAMP_REQUIRED} Gitcoin Passport stamps`

  // TEMP: bypass passport check (accounts having issues with Ceramic API)
  const TEMP_PASSPORT_WHITELIST = [
    // '0xda1d8a345Fc6934Da60E81b392F485cbfd350eaE'.toLowerCase(),
    '0x1EC1CcEF3e1735bdA3F4BA698e8a524AA7c93274'.toLowerCase(),
    '0x5B1899D88b4Ff0Cf5A34651e7CE7164398211C66'.toLowerCase(),
  ]
  if (TEMP_PASSPORT_WHITELIST.includes(address.toLowerCase())) {
    return res.json({
      verified: true,
      requirement,
      validStampsCount: 99,
    })
  }

  if (SYBIL_CHECK === 'GITCOIN_PASSPORT') {
    try {
      // read passport
      const passport: Passport = await reader.getPassport(address)
      // console.log('** passport **', passport)
      const validStamps = filterValidStamps(passport.stamps)
      // console.log('validStamps', validStamps)
      const stampHashes = {}
      const stampProviders = {}
      const stampHashesSearch = []
      let whereCondition = 'gitcoin_stamps @> ?'
      let sybil = []
      if (passport?.stamps?.length) {
        for (const stamp of passport?.stamps) {
          stampHashes[stamp.provider] = stamp.credential.credentialSubject.hash
        }
        for (const stamp of passport?.stamps) {
          stampProviders[stamp.provider] = stamp
        }
        console.log('stampHashes', stampHashes)
        // merge previous data without deleting other keys
        const updated = await db.raw(
          `update "users" set "gitcoin_stamps" = gitcoin_stamps || ? where "users"."id" = ?`,
          [stampHashes, userId]
        )
        // console.log('updated', updated)
        if (updated) console.log('stamps updated:', updated?.rowCount)
        Object.keys(stampHashes).map((key, index) => {
          const stampHash = {}
          stampHash[key] = stampHashes[key]
          stampHashesSearch.push(stampHash)
          if (index > 0) whereCondition += ' OR gitcoin_stamps @> ?'
        })
        sybil = await db(TABLES.users)
          .select('id', 'address')
          .whereNot(TABLE.users.id, userId)
          .whereNull(TABLE.users.sybil_user_id)
          // query for json instead of jsonb: .where(db.raw('gitcoin_stamps::TEXT LIKE ANY(?)', [stampHashesSearch]))
          .where(db.raw(`(${whereCondition})`, stampHashesSearch))
        console.log('sybil', sybil)
      }
      if (isBot) {
        // HACK: bot
        sybil[0] = {
          id: 12,
          address: '0x0000000000000000000000000000000000000000',
        }
      }
      if (sybil?.length) {
        // mark this user as a sybil attacker
        console.log('fraud detected', sybil)
        await db(TABLES.users)
          .where(TABLE.users.id, userId)
          .update({ sybil_user_id: sybil[0]?.id })
        return res.json({
          verified: false,
          requirement,
          fraud: sybil[0]?.address,
          validStampsCount: validStamps?.length,
          stamps: stampProviders,
        })
      }
      if (validStamps?.length >= NUMBER_OF_STAMP_REQUIRED) {
        console.log('verified:', validStamps?.length)
      } else {
        console.log('not verified')
      }
      return res.json({
        verified: validStamps?.length >= NUMBER_OF_STAMP_REQUIRED,
        requirement,
        validStampsCount: validStamps?.length,
        stamps: stampProviders,
      })
    } catch (error) {
      console.error(error)
      res.json({
        verified: false,
        requirement,
        validStampsCount: 0,
        error: `error ${error?.code}: ${GENERIC_ERROR_MESSAGE}`,
      })
    }
  } else if (SYBIL_CHECK === '35kBANK') {
    // not implemented yet
    const NUMBER_OF_BANK_REQUIRED = 35000
    const requirement = `Hold a minimum of ${NUMBER_OF_BANK_REQUIRED} BANK tokens for at least 1 month˝`
    return res.json({ verified: 'TODO', requirement })
  }
}
