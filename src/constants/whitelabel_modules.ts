import { ModuleType } from 'entities/module'

const MODULES: ModuleType[] = [
  {
    name: 'Crypto Wallet',
    moduleImageLink: '/humanDAO/module/crypto-wallet-d576733e.png',
    socialImageLink: '/humanDAO/module/crypto-wallet-social-c43a0d0d.jpg',
    description: 'Aralin natin ang web3 at alamin kung paano mag set up ng isang digital wallet!',
    slug: 'crypto-wallet',
    moduleId: '8507bffcd2314a96be8c5abb6d061cb3',
    parentModule: null,
    subModules: []
  },
  {
    name: 'Crypto 101',
    moduleImageLink: '/humanDAO/module/crypto-101-bd829855.png',
    socialImageLink: '/humanDAO/module/crypto-101-social-77926ea0.jpg',
    description: 'Blockchain, Web3 & Smart contracts - ano ang mga teknolohiyang ito? ',
    slug: 'crypto-101',
    moduleId: 'df2d0ff169394c5baff0e96d1304fee7',
    parentModule: null,
    subModules: [
      '57608cf30b5547ac8f97bc9b9443b90c',
      '5679e9abfc4142efaad04964d2307667'
    ]
  },
  {
    name: 'Ano ang blockchains?',
    moduleImageLink: '/humanDAO/module/ano-ang-blockchains-8c137c31.png',
    socialImageLink: '/humanDAO/module/ano-ang-blockchains-social-69de2660.png',
    description: 'Tukuyin natin ang mga pangunahing konsepto sa blockchain at ang makabagong teknolohiya nito',
    slug: 'ano-ang-blockchains',
    moduleId: '57608cf30b5547ac8f97bc9b9443b90c',
    parentModule: 'df2d0ff169394c5baff0e96d1304fee7',
    subModules: []
  },
  {
    name: 'Ano ang Web3?',
    moduleImageLink: '/humanDAO/module/ano-ang-web3-f5ecf3be.png',
    socialImageLink: '/humanDAO/module/ano-ang-web3-social-42b78fbc.png',
    description: 'Kilalanin natin ang web3 at alamin ang pagkakaiba nito',
    slug: 'ano-ang-web3',
    moduleId: '5679e9abfc4142efaad04964d2307667',
    parentModule: 'df2d0ff169394c5baff0e96d1304fee7',
    subModules: []
  },
  {
    name: 'humanDAO',
    moduleImageLink: '/humanDAO/module/humandao-7b671f0f.png',
    socialImageLink: '/humanDAO/module/humandao-social-0659ea82.jpg',
    description: 'Kilalanin natin ang mga layunin at oportunidad sa humanDAO',
    slug: 'humandao',
    moduleId: '7f16572f0ce84cda82ae6c15e4f1e7bf',
    parentModule: null,
    subModules: []
  },
  {
    name: 'Financial Literacy',
    moduleImageLink: '/humanDAO/module/financial-literacy-a92130de.png',
    socialImageLink: '/humanDAO/module/financial-literacy-social-209b5d89.jpg',
    description: 'Aralin natin ang wastong pangangasiwa ng salapi',
    slug: 'financial-literacy',
    moduleId: '7b4ecd08259c4708aadcd4d76dd4707f',
    parentModule: null,
    subModules: []
  },
  {
    name: 'Oportunidad sa web3',
    moduleImageLink: '/humanDAO/module/oportunidad-sa-web3-4a2c7972.png',
    socialImageLink: '/humanDAO/module/oportunidad-sa-web3-social-e6ab959d.png',
    description: 'Hanapin natin ang mga bagong oportunidad sa web3',
    slug: 'oportunidad-sa-web3',
    moduleId: '90ce720ed7b14a9186a98a414d6eaf50',
    parentModule: null,
    subModules: [
      '36835560ea344efea39d206b16821f53'
    ]
  },
  {
    name: 'Community Support',
    moduleImageLink: '/humanDAO/module/community-support-98af065b.png',
    socialImageLink: '/humanDAO/module/community-support-social-b246f4f8.jpg',
    description: 'Tuklasin natin ang mga tungkulin ng Community Support role at mag ensayo base sa kaalaman',
    slug: 'community-support',
    moduleId: '36835560ea344efea39d206b16821f53',
    parentModule: '90ce720ed7b14a9186a98a414d6eaf50',
    subModules: []
  }
]

export default MODULES
