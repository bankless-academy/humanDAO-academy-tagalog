import React, { useEffect } from 'react'
import WalletConnect from 'components/Quest/WalletConnect'
import WalletBasics from 'components/Quest/WalletBasics'
import IntroToDeFi from 'components/Quest/IntroToDeFi'
import BlockchainBasics from 'components/Quest/BlockchainBasics'
import AcademyCommunity from 'components/Quest/AcademyCommunity'
import Web3Security from 'components/Quest/Web3Security'
import Layer1Blockchains from 'components/Quest/Layer1Blockchains'
import DEXAggregators from 'components/Quest/DEXAggregators'
import Layer2Blockchains from 'components/Quest/Layer2Blockchains'
import { ConnectFirst } from 'components/Quest/WalletConnect'
import { useAccount } from 'wagmi'

import { useSmallScreen } from 'hooks/index'
import { QUESTS } from 'constants/index'
import { api } from 'utils'

export type QuestComponentType = typeof QUESTS[number]

export type QuestType = {
  isQuestCompleted: boolean
  questComponent: React.ReactElement
}

export const ONCHAIN_QUESTS = ['DEXAggregators', 'Layer2Blockchains']

const QuestComponent = (
  component: QuestComponentType | null,
  kudosId?: number
): QuestType => {
  const QUEST_COMPONENTS = {
    WalletConnect: WalletConnect,
    WalletBasics: WalletBasics,
    IntroToDeFi: IntroToDeFi,
    BlockchainBasics: BlockchainBasics,
    AcademyCommunity: AcademyCommunity,
    Web3Security: Web3Security,
    Layer1Blockchains: Layer1Blockchains,
    DEXAggregators: DEXAggregators,
    Layer2Blockchains: Layer2Blockchains,
  }
  if (!component || !QUESTS.includes(component)) return null

  const { address } = useAccount()
  const [isSmallScreen] = useSmallScreen()

  const Component =
    component in QUEST_COMPONENTS
      ? QUEST_COMPONENTS[component](address)
      : WalletConnect(address)

  useEffect(() => {
    const validateQuest = async () => {
      const data: any = { address, quest: component }
      if (kudosId) data.kudosId = kudosId
      const result = await api('/api/validate-quest', data)
      if (result && result.status === 200) {
        // do nothing
      } else {
        // TODO: handle errors
      }
    }
    if (
      address &&
      Component.isQuestCompleted &&
      // don't do the validation here for onchain quests but inside the quest component instead
      !ONCHAIN_QUESTS.includes(component)
    ) {
      validateQuest().catch(console.error)
    }
  }, [address, Component.isQuestCompleted])

  if (!address && component !== 'WalletBasics') {
    return {
      isQuestCompleted: false,
      questComponent: ConnectFirst(isSmallScreen, address),
    }
  }

  return {
    isQuestCompleted: Component.isQuestCompleted,
    questComponent: Component.questComponent,
  }
}

export default QuestComponent
