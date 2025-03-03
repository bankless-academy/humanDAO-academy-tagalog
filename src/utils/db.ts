/* eslint-disable no-console */
import knex from 'knex'

const config = require('../../knexfile.js')
import { trackBE } from 'utils/mixpanel'

export const db = knex(config)

export const TABLES = {
  users: 'users',
  quests: 'quests',
  poaps: 'poaps',
  credentials: 'credentials',
  completions: 'completions',
}

export const TABLE = {
  users: {
    created_at: 'users.created_at',
    id: 'users.id',
    address: 'users.address',
    gitcoin_stamps: 'users.gitcoin_stamps',
    sybil_user_id: 'users.sybil_user_id',
    ens_name: 'users.ens_name',
    ens_avatar: 'users.ens_avatar',
    donations: 'users.donations',
    referrer: 'users.referrer'
  },
  quests: {
    id: 'quests.id',
    quest: 'quests.quest',
    user_id: 'quests.user_id'
  },
  poaps: {
    id: 'poaps.id',
    event_id: 'poaps.event_id',
    code: 'poaps.code',
    is_claimed: 'poaps.is_claimed',
    user_id: 'poaps.user_id',
    ip_address: 'poaps.ip_address',
    country_code: 'poaps.country_code'
  },
  credentials: {
    id: 'credentials.id',
    notion_id: 'credentials.notion_id',
    signature: 'credentials.signature'

  },
  completions: {
    created_at: 'completions.created_at',
    id: 'completions.id',
    credential_id: 'completions.credential_id',
    user_id: 'completions.user_id',
    // deprecated
    // credential_claimed_at: 'completions.credential_claimed_at',
    transaction_at: 'completions.transaction_at',
    transaction_hash: 'completions.transaction_hash'
  },
}

export async function getUserId(address: string, embed: string, isBot?: boolean): Promise<number> {
  try {
    // ilike = case insensitive search
    const [user] = await db(TABLES.users)
      .select('id')
      .where('address', 'ilike', `%${address}%`)
    console.log('user', user)
    let createUser = null
    if (!user) {
      [createUser] = await db(TABLES.users).insert({ address: address }, [
        'id',
      ])
      console.log('createUser', createUser)
      const data: any = { user_id: createUser?.id }
      console.log(isBot)
      if (isBot && isBot === true) {
        data.is_bot = true
      }
      trackBE(address, 'first_wallet_connection', { ...data, embed })
    }
    return user?.id || createUser?.id
  } catch (error) {
    // known issue: error 53300, remaining connection slots are reserved for non-replication superuser connections
    console.error(`can't get user id | ${error?.code}: ${error}`)
  }
}
