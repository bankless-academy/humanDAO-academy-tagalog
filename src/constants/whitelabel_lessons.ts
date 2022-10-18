import { LessonType } from 'entities/lesson'

const LESSONS: LessonType[] = [
  {
    kudosImageLink: '/humanDAO/lesson/ano-ang-blockchains/kudos-751cf023.png',
    lessonImageLink: '/humanDAO/lesson/ano-ang-blockchains/lesson-aa737f34.png',
    socialImageLink: '/humanDAO/lesson/ano-ang-blockchains/social-adf6d3d5.jpg',
    learningActions: '',
    marketingDescription: 'Kaalaman sa mga pangunahing konsepto sa Blockchain Technology',
    kudosId: null,
    duration: 10,
    learnings: '',
    difficulty: 'Easy',
    description: 'Kaalaman sa mga pangunahing konsepto sa Blockchain Technology',
    name: 'Ano ang blockchains?',
    moduleId: '57608cf30b5547ac8f97bc9b9443b90c',
    quest: 'humanDAOAnoAngBlockchains',
    publicationStatus: 'publish',
    isFeaturedOnHomepage: true,
    isCommentsEnabled: true,
    endOfLessonRedirect: null,
    endOfLessonText: 'MAHALAGANG PAALALA: Makakatanggap ka ng non-transferrable NFT badge at trophy sa kada lesson na matatapos mo sa humanDAO Academy. Magsisilbi ang mga NFT na ito bilang patunay ng iyong kaalaman at karunungan sa humanDAO at web3. Sa susunod na pagkakataon, maaaring makatulong ito sa iyong paghahanap ng trabaho dahil taglay ng wallet mo ang pinaka resume o CV ng iyong mga natapos. Kaya hangga\'t maaari, isang wallet lang ang dapat mong gamitin at hindi iwawala kailanman.',
    notionId: 'ba304db58a70442593a277fb180af22b',
    slug: 'ano-ang-blockchains',
    imageLinks: [
      '/humanDAO/lesson/ano-ang-blockchains/ano-ang-blockchain-a08d7c26.png',
      '/humanDAO/lesson/ano-ang-blockchains/ano-ang-pinagkaiba-ng-blockchain-19181edb.png',
      '/humanDAO/lesson/ano-ang-blockchains/paano-nabubuo-ang-istruktura-ng-blockchain-ab61b5a2.png'
    ],
    slides: [
      {
        type: 'LEARN',
        notionId: '11f36aa1709b45de91da4aec8c1a844c',
        title: '<strong><strong>Ano ang blockchain?</strong></strong>',
        content: '<div class="bloc1"><p>Matuturing natin na blockchain ang isang <em>public ledger</em> kung saan nakatala ang mga datos sa bawat transaksyon.</p><p>Noon, kailangan pa ng <em>third party</em> o grupo para patunayan na lehitimo ang isangtransaksyon.</p><p>Dahil sa <span class="tooltip" definition="A shared, unchangeable database, or ledger, of recorded transactions.">blockchain</span>, hindi na kinakailangan ng <em>third party</em> tulad ng banko o gobyerno para patunayan ang datos na ito.</p><p>Bukas sa publiko ang kasaysayan ng mga datos sa transaksyon, at matatagpuan ito sa mga <em>block explorers</em> tulad ng Etherscan at Polygonscan.</p></div><div class="bloc2"><img src=\'/humanDAO/lesson/ano-ang-blockchains/ano-ang-blockchain-a08d7c26.png\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '70ffc73437534126809ad0bc68c8d0cf',
        title: 'Pagsusulit',
        quiz: {
          question: 'Kailangan ba ng <em>third party</em> o grupo para patunayan ang mga transaksyon sa blockchain?',
          rightAnswerNumber: 2,
          answers: [
            'Oo',
            'Hindi'
          ],
          id: 'ano-ang-blockchains-1'
        }
      },
      {
        type: 'LEARN',
        notionId: 'f4b2e1d09dd14c20ac5dcc1ccc9d8412',
        title: 'Ano ang pinagkaiba ng blockchain?',
        content: '<div class="bloc1"><p>Lahat ng tao ay maaaring makita ang datos sa blockchain. Ang nilalaman nito ay hindi naiiba sa kahit sinuman, kaya’t walang grupo o party ang maaaring ibahin o pakialamanan ang datos ng hindi ito pinapaalam sa iba.</p><p>Dahil dito, ang datos sa blockchain ay maituturing na may seguridad, may katotohanan, at mapapagkatiwalaan.</p><p>Kapag naitala na ang datos sa blockchain, hindi na ito kailanman mababago. Ito ang isa sa mga dahilan kung bakit marami ang interesado sa teknolohiya ng blockchain. Pinapayagan nito ang mga <em>item of value</em> tulad ng land record, patent, copyright, at intellectual property para isapubliko sa blockchain habang-buhay.</p></div><div class="bloc2"><img src=\'/humanDAO/lesson/ano-ang-blockchains/ano-ang-pinagkaiba-ng-blockchain-19181edb.png\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: 'cd13f94089c84fd4a6938d20ff64d0d0',
        title: 'Pagsusulit',
        quiz: {
          question: 'Alin sa mga ito ang HINDI naitatala o nalalagay sa blockchain?',
          rightAnswerNumber: 4,
          answers: [
            'Land Records',
            'Sining',
            'Copyright',
            'Wala sa mga nabanggit'
          ],
          id: 'ano-ang-blockchains-2'
        }
      },
      {
        type: 'LEARN',
        notionId: '9222a915b87241be9ab77847bac3c075',
        title: 'Paano nabubuo ang istruktura ng Blockchain?',
        content: '<div class="bloc1"><p>Ang bawat transaksyon sa blockchain ay nakalagay sa isang <em>block</em>. Kasama sa isang <em>block </em>ang mahalagang impormasyon kung kailan ito naitala. </p><p>Ang bawat <em>block</em> ay konektado sa isa pang block na bumubuo ng isang <em>chain. </em>Kaya’t mapapansin mo na “Blockchain” ang tawag sa magkakasunod na <em>block</em> ng impormasyon.</p><p>Ilan sa mga kilalang aplikasyon ng blockchain ay tinatawag na <em>cryptocurrencies </em>tulad ng Bitcoin at Ether. Ito ay maituturing na <em>fungible assets.</em> Ano ba ang ibig sabihin nun? Maari mo itong ihalintulad sa isang salaping papel kung saan may makukuha kang kapalit kapag ito ay ginamit mo bilang pangbayad. Magkaiba ito sa mga assets tulad ng <em>Non-fungible tokens</em> o NFTs.</p></div><div class="bloc2"><img src=\'/humanDAO/lesson/ano-ang-blockchains/paano-nabubuo-ang-istruktura-ng-blockchain-ab61b5a2.png\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '748965aea47c4d8485f6fbdbc711260a',
        title: 'Pagsusulit',
        quiz: {
          question: 'Alin sa mga ito ay maituturing na “fungible”?',
          rightAnswerNumber: 3,
          answers: [
            'NFT',
            'Ang iyong thumbprint',
            'Ether',
            'Orihinal na sining'
          ],
          id: 'ano-ang-blockchains-3'
        }
      },
      {
        type: 'END',
        title: 'End of lesson'
      }
    ]
  },
  {
    kudosImageLink: '/humanDAO/lesson/ano-ang-bitcoin/kudos-751cf023.png',
    lessonImageLink: '/humanDAO/lesson/ano-ang-bitcoin/lesson-b2e566ae.png',
    socialImageLink: '/humanDAO/lesson/ano-ang-bitcoin/social-bafa3475.jpg',
    learningActions: '',
    marketingDescription: 'Pagtatalakay sa Bitcoin bilang unang cryptocurrency',
    kudosId: null,
    duration: 10,
    learnings: '',
    difficulty: undefined,
    description: 'Pagtatalakay sa Bitcoin bilang unang cryptocurrency',
    name: 'Ano ang Bitcoin?',
    moduleId: '57608cf30b5547ac8f97bc9b9443b90c',
    quest: 'humanDAOAnoAngBitcoin',
    publicationStatus: 'publish',
    isFeaturedOnHomepage: true,
    isCommentsEnabled: true,
    endOfLessonRedirect: null,
    endOfLessonText: 'MAHALAGANG PAALALA: Makakatanggap ka ng non-transferrable NFT badge at trophy sa kada lesson na matatapos mo sa humanDAO Academy. Magsisilbi ang mga NFT na ito bilang patunay ng iyong kaalaman at karunungan sa humanDAO at web3. Sa susunod na pagkakataon, maaaring makatulong ito sa iyong paghahanap ng trabaho dahil taglay ng wallet mo ang pinaka resume o CV ng iyong mga natapos. Kaya hangga\'t maaari, isang wallet lang ang dapat mong gamitin at hindi iwawala kailanman.',
    notionId: '21974b2299fc4ac28dd267198d5aee6c',
    slug: 'ano-ang-bitcoin',
    imageLinks: [
      '/humanDAO/lesson/ano-ang-bitcoin/ano-ang-bitcoin-1797562d.png',
      '/humanDAO/lesson/ano-ang-bitcoin/paano-gumagana-ang-bitcoin-f17d220b.png',
      '/humanDAO/lesson/ano-ang-bitcoin/bakit-ikinukumpara-ang-bitcoin-sa-ginto-6a2432ef.png'
    ],
    slides: [
      {
        type: 'LEARN',
        notionId: '239271dfef8e43b1abab6d6e2ca2a9ab',
        title: 'Ano ang Bitcoin?',
        content: '<div class="bloc1"><p>Binansagan ang Bitcoin bilang pinaka-unang cryptocurrency. Ito ay ginawa ng isang hindi kilalang <em>entity</em> sa pangalan na “Satoshi Nakamoto”. Ang “sat” naman ay isang salita na nanaggaling sa kanyang pangalan para tawagin ang maliit na bahagi ng isang Bitcoin.</p><p>Maari nating maisip, “Paano nga ba makakuha ng Bitcoin gamit ng pera?”. Ilan sa mga pangkaraniwan na paraan ay ang P2P wallet transfers, exchange transfers, at over-the-counter deals (OTCs).</p><p>Dahil ginawa ang Bitcoin ($BTC) sa isang pampublikong blockchain na maaaring i-access ng lahat, walang kakayahan ang sinuman—kahit ang third parties—na manipulahin ito. Hindi ito katulad ng tradisyunal na currency na maaaring maapektuhan ng inflation.</p></div><div class="bloc2"><img src=\'/humanDAO/lesson/ano-ang-bitcoin/ano-ang-bitcoin-1797562d.png\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '015b6fbda2b94e5d9cca46b733f5d9c0',
        title: 'Pagsusulit',
        quiz: {
          question: '<strong>Bitcoin is based on _________ blockchain.</strong>',
          rightAnswerNumber: 2,
          answers: [
            'Private',
            'Public',
            'Public Permissioned',
            'Permissioned'
          ],
          id: 'ano-ang-bitcoin-1'
        }
      },
      {
        type: 'LEARN',
        notionId: 'bc87f4f783b0402ea62e1209d86cb68b',
        title: 'Paano gumagana ang Bitcoin?',
        content: '<div class="bloc1"><p>Ang bitcoin ay gumagamit ng teknolohiyang tinatawag na ‘peer-to-peer’ kung saan nagkakaroon ng palitan ng impormasyon sa dalawang computer. Ang bawat ‘peer’ ay maaaring mabigyan ng gantimpala sa kanyang paglahok. Ang tawag sa gantimpalang ito ay ‘mining reward’.</p><p>Hindi ito maituturing na <em>eco-friendly </em>dahil malakas mag-consume ng enerhiya ang mining.</p></div><div class="bloc2"><img src=\'/humanDAO/lesson/ano-ang-bitcoin/paano-gumagana-ang-bitcoin-f17d220b.png\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '032f347144d244cca57945b48f3eb67b',
        title: 'Pagsusulit',
        quiz: {
          question: 'Ang paggawa ng Bitcoin ay malakas mag-consume ng enerhiya.',
          rightAnswerNumber: 1,
          answers: [
            'Tama',
            'Mali',
            'Paminsan-minsan'
          ],
          id: 'ano-ang-bitcoin-2'
        }
      },
      {
        type: 'LEARN',
        notionId: '06731717188e472cad48d4166fe2f9d4',
        title: 'Bakit ikinukumpara ang Bitcoin sa ginto?',
        content: '<div class="bloc1"><p>Dahil 21 million lang ang maaaring magawa na Bitcoin, limitado ang maaaring makakuha nito katulad ng ginto.</p><p>Maraming tanong kung paano papanatiliin ang paggamit ng Bitcoin ($BTC) bilang pang araw-araw na currency dahil sa bigat ng pinsala na magagawa nito sa kapaligiran. Sa kabila nito, nagsisimula na ang ibang mga bansang mahihina ang ekonomiya tulad ng El Salvador na mag-invest sa $BTC at gawin itong <em>legal tender, </em>kung saan magagamit ang Bitcoin tulad ng tradisyunal na currency.</p></div><div class="bloc2"><img src=\'/humanDAO/lesson/ano-ang-bitcoin/bakit-ikinukumpara-ang-bitcoin-sa-ginto-6a2432ef.png\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: 'ed4982ef866e4e2a9ecc0724f6975f21',
        title: 'Pagsusulit',
        quiz: {
          question: 'Gaano lang karami ang maaaring gawin na Bitcoin?',
          rightAnswerNumber: 2,
          answers: [
            '11 Million',
            '21 Million',
            '41 Million',
            '61 Million'
          ],
          id: 'ano-ang-bitcoin-3'
        }
      },
      {
        type: 'END',
        title: 'End of lesson'
      }
    ]
  },
  {
    kudosImageLink: '/humanDAO/lesson/ano-ang-ethereum/kudos-751cf023.png',
    lessonImageLink: '/humanDAO/lesson/ano-ang-ethereum/lesson-d58e92ed.png',
    socialImageLink: '/humanDAO/lesson/ano-ang-ethereum/social-577b3b87.jpg',
    learningActions: '',
    marketingDescription: 'Pagtatalakay sa Ethereum bilang unang smart contract',
    kudosId: null,
    duration: 10,
    learnings: '',
    difficulty: undefined,
    description: 'Pagtatalakay sa Ethereum bilang unang smart contract',
    name: 'Ano ang Ethereum?',
    moduleId: '57608cf30b5547ac8f97bc9b9443b90c',
    quest: 'humanDAOAnoAngEthereum',
    publicationStatus: 'publish',
    isFeaturedOnHomepage: true,
    isCommentsEnabled: true,
    endOfLessonRedirect: null,
    endOfLessonText: 'MAHALAGANG PAALALA: Makakatanggap ka ng non-transferrable NFT badge at trophy sa kada lesson na matatapos mo sa humanDAO Academy. Magsisilbi ang mga NFT na ito bilang patunay ng iyong kaalaman at karunungan sa humanDAO at web3. Sa susunod na pagkakataon, maaaring makatulong ito sa iyong paghahanap ng trabaho dahil taglay ng wallet mo ang pinaka resume o CV ng iyong mga natapos. Kaya hangga\'t maaari, isang wallet lang ang dapat mong gamitin at hindi iwawala kailanman.',
    notionId: 'aa68493efa9f40d5a857121fa2289b50',
    slug: 'ano-ang-ethereum',
    imageLinks: [
      '/humanDAO/lesson/ano-ang-ethereum/kilalanin-natin-ang-nagtatag-ng-ethereum-104970f2.png',
      '/humanDAO/lesson/ano-ang-ethereum/bakit-ginawa-ang-ethereum-05039e8e.png',
      '/humanDAO/lesson/ano-ang-ethereum/ano-ang-ether-9a8c51ac.png',
      '/humanDAO/lesson/ano-ang-ethereum/what-is-gas-4715f5b9.png',
      '/humanDAO/lesson/ano-ang-ethereum/ang-ethereum-ecosystem-031b8c1c.png',
      '/humanDAO/lesson/ano-ang-ethereum/halimbawa-ng-mga-dapps-d721e9ba.png'
    ],
    slides: [
      {
        type: 'LEARN',
        notionId: '68f611634df94a1db92ddcd9c4972461',
        title: '<strong><strong>Kilalanin natin ang nagtatag ng Ethereum</strong></strong>',
        content: '<div class="bloc1"><p>Sinimulan ni Vitalik Buterin ang Ethereum noong 2013.</p><p>Si Vitaly Dmitriyevich \'Vitalik\' Buterin ay isang Canadian programmer at manunulat na kilala bilang isa sa mga nagsimula ng Ethereum.</p></div><div class="bloc2"><img src=\'/humanDAO/lesson/ano-ang-ethereum/kilalanin-natin-ang-nagtatag-ng-ethereum-104970f2.png\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '9f5ee2475d344e7484c43b3a5fa210fe',
        title: 'Bakit ginawa ang Ethereum?',
        content: '<div class="bloc1"><p>Ginawa ang Bitcoin upang tumutuol sa paggamit ng tradisyunal na currency, subalit hindi pa rin nito nareresolba ang mga problema sa <em>decentralization.</em></p><p>Ang pagpasok ng Ethereum bilang smart-contract enabled blockchain ay nakatulong sa mga tao na bumuo ng ecosystem na hindi kinakailangan ng pahintulot ng third parties.</p><p>Ang Ethereum ay maaaring gamitin ng mga tao sa pakikipag-transact sa isa’t isa. Ang aplikasyon na nagpapagana nito ay hindi kinakailangan ng central server kung saan isang kumpanya o grupo lang ang nagpapahintulot ng mga transaksyon na ito.</p></div><div class="bloc2"><img src=\'/humanDAO/lesson/ano-ang-ethereum/bakit-ginawa-ang-ethereum-05039e8e.png\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: 'e612869cdf7248fa9fade29e70ced145',
        title: 'Pagsusulit',
        quiz: {
          question: 'Ang Ethereum ay kinikilala bilang unang blockchain na may ______.',
          rightAnswerNumber: 2,
          answers: [
            'Mas mabilis na transaksyon',
            'Smart Contracts',
            'NFTs',
            'Tokens'
          ],
          id: 'ano-ang-ethereum-1'
        }
      },
      {
        type: 'LEARN',
        notionId: 'c68626a6b6584f858b5edc929e89e8dc',
        title: 'Ano ang Ether?',
        content: '<div class="bloc1"><p>Tinatawag na Ether ($ETH) ang native token ng Ethereum at ito ang pangalawang kilalang cryptocurrency kasunod ng Bitcoin.</p><p>Ang Ether ay ginagamamit<strong> para magbayad ng </strong><strong><em>transaction fees</em></strong><strong> at </strong><strong><em>computational services</em></strong><strong> sa pamamaraan ng </strong><strong><em>gas fees.</em></strong></p><p>Maaring gamitin ng mga tao ang Ether para i-send ito sa iba, pati na rin ang mga developer para gumawa ng smart contracts na tumatanggap at nagpapadala rin ng Ether.</p><p>Ang Ether ay nagmumula sa pag-validate ng transaksyon sa Ethereum platform sa proseso ng <strong>mining</strong>.</p></div><div class="bloc2"><img src=\'/humanDAO/lesson/ano-ang-ethereum/ano-ang-ether-9a8c51ac.png\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '199c466f31a64246ac4eff465dd758fa',
        title: 'What is “Gas”?',
        content: '<div class="bloc1"><p>“Gas fees” ang ipinapambayad para makapag-transact sa Ethereum blockchain.</p><p>Sa blockchain ng Ethereum, ang gas ay nagsisilbing halaga ng Ether na kailangan para magpatuloy ang transaksyon sa network.</p><p>Nakabase sa supply at demand ng computational power ng network ang halaga ng “gas fee” para patakbuhin ang smart contracts at iba pang mga transaksyon.</p></div><div class="bloc2"><img src=\'/humanDAO/lesson/ano-ang-ethereum/what-is-gas-4715f5b9.png\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '16417a4ed9bf4d79bd2faa5ee10a5ff7',
        title: 'Pagsusulit',
        quiz: {
          question: 'Ano ang ‘gas’?',
          rightAnswerNumber: 2,
          answers: [
            'Ang halaga ng pag-generate sa tamang block hash',
            'Isang sistema ng pag-presyo ng transaksyon batay sa computational complexity ng isang network',
            'Pagsusukat base sa dami ng nodes na naka-attach sa network',
            'Ang kinakailangang Giga Hashes para i-secure ang network'
          ],
          id: 'ano-ang-ethereum-2'
        }
      },
      {
        type: 'LEARN',
        notionId: 'd65f3937c8ef48f48abc4229612d0f8e',
        title: 'Ang Ethereum Ecosystem',
        content: '<div class="bloc1"><p>Ang Ethereum ay isang ecosystem kung saan lahat ay may kakayahang bumuo ng distributed applications (Dapp), smart contracts, at ng kanilang sariling cryptocurrency.</p><p>Patuloy na lumalaki ang ecosystem nito. Matuturing ang Ethereum na <strong>isang decentralized platform na may sariling blockchain</strong>. Sa ngayon, ang Ethereum ang may pinakamalaking ecosystem sa Web3 dala ng napakaraming Dapps na nabuo sa ecosystem na ito.</p></div><div class="bloc2"><img src=\'/humanDAO/lesson/ano-ang-ethereum/ang-ethereum-ecosystem-031b8c1c.png\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '043e101b7e6448dc90f0205e04c1ed48',
        title: 'Halimbawa ng mga Dapps:',
        content: '<div class="bloc1"><p>Ang isang decentralized application ay may malayang nakakapag-operate gamit ang smart contracts na pinapatakbo ng decentralized computing, blockchain, o iba pang distributed ledger system.</p><p>Katulad ng tradisyunal na aplikasyon, ang mga DApps ay maaaring gamitin sa iba’t-ibang paraan na makikita sa mga halimbawang ito:</p><ol><li>Opensea (isang NFT Marketplace)</li><li>Uniswap (ginagamit sa palitan ng Tokens)</li><li>Compound (ginagamit sa Pagpapahiram o Pagpapautang)</li><li>Axie Infinity (ginagamit sa paglalaro)</li></ol><p>Ang Ethereum ay ginagamit para sa makabagong teknolohiya patungkol sa sari-sariling hanay ng Web3 tulad ng <strong>finance, web browsing, gaming, advertising, identity management, at supply chain management</strong>.</p></div><div class="bloc2"><img src=\'/humanDAO/lesson/ano-ang-ethereum/halimbawa-ng-mga-dapps-d721e9ba.png\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: 'f63bd7a134e142afbc785fd8582f2b5b',
        title: 'Pagsusulit',
        quiz: {
          question: 'Alin sa mga ito ang maituturing na smart-contract based blockchain?',
          rightAnswerNumber: 1,
          answers: [
            'Etherereum',
            'Bitcoin',
            'US Dollar',
            'Lahat ng nabanggit'
          ],
          id: 'ano-ang-ethereum-3'
        }
      },
      {
        type: 'END',
        title: 'End of lesson'
      }
    ]
  },
  {
    kudosImageLink: '/humanDAO/lesson/ano-ang-smart-contract/kudos-751cf023.png',
    lessonImageLink: '/humanDAO/lesson/ano-ang-smart-contract/lesson-b0c1b71c.png',
    socialImageLink: '/humanDAO/lesson/ano-ang-smart-contract/social-ad6052a3.jpg',
    learningActions: '',
    marketingDescription: 'Pag-unawa sa pundasyon ng web3',
    kudosId: null,
    duration: 10,
    learnings: '',
    difficulty: undefined,
    description: 'Pag-unawa sa pundasyon ng web3',
    name: 'Ano ang Smart Contract?',
    moduleId: '57608cf30b5547ac8f97bc9b9443b90c',
    quest: 'humanDAOAnoAngSmartContract',
    publicationStatus: 'publish',
    isFeaturedOnHomepage: true,
    isCommentsEnabled: true,
    endOfLessonRedirect: null,
    endOfLessonText: 'MAHALAGANG PAALALA: Makakatanggap ka ng non-transferrable NFT badge at trophy sa kada lesson na matatapos mo sa humanDAO Academy. Magsisilbi ang mga NFT na ito bilang patunay ng iyong kaalaman at karunungan sa humanDAO at web3. Sa susunod na pagkakataon, maaaring makatulong ito sa iyong paghahanap ng trabaho dahil taglay ng wallet mo ang pinaka resume o CV ng iyong mga natapos. Kaya hangga\'t maaari, isang wallet lang ang dapat mong gamitin at hindi iwawala kailanman.',
    notionId: '87e6dd4c9b5347b2b5706f144f8abc6d',
    slug: 'ano-ang-smart-contract',
    imageLinks: [
      '/humanDAO/lesson/ano-ang-smart-contract/what-are-smart-contracts-3b345615.png',
      '/humanDAO/lesson/ano-ang-smart-contract/smart-contracts-are-self-executing-3015a054.png',
      '/humanDAO/lesson/ano-ang-smart-contract/saan-nagagamit-ang-mga-smart-contracts-9dd5bf70.png'
    ],
    slides: [
      {
        type: 'LEARN',
        notionId: 'e2fe33ef1be84ce184579f2cecd175a3',
        title: 'What are smart contracts?',
        content: '<div class="bloc1"><p>Ang smart contracts ay maihahalintulad sa mga legal na kontrata, pero ang pinagkaiba nito ay naitala ang mga kontrata sa blockchain.</p><p>Ang isang kontrata ay legal na dokumentong nagpapatupad ng tagubilin na pinagkasunduan ng dalawang indibiduwal o grupo.</p><p>Makikita natin na parehas ang ginagawa ng isang smart contract, ngunit ito ay hindi ipinapatupad alinsunod sa batas, kundi sa blockchain mismo.</p></div><div class="bloc2"><img src=\'/humanDAO/lesson/ano-ang-smart-contract/what-are-smart-contracts-3b345615.png\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '490da3185d0c4bf0be15718df2ef9d3b',
        title: 'Pagsusulit',
        quiz: {
          question: 'Ano ang smart contract?',
          rightAnswerNumber: 1,
          answers: [
            'Programang nakalagay sa blockchain na tumatakbo kapag ang mga nakasaad na kondisyon ay natagpuan',
            'Isang online na kontrata',
            'Isang digital na kontrata',
            'Lahat ng nabanggit'
          ],
          id: 'ano-ang-smart-contract-1'
        }
      },
      {
        type: 'LEARN',
        notionId: '31a521c7346340ec85f5ff55566a29e7',
        title: 'Smart Contracts are ‘Self-Executing’',
        content: '<div class="bloc1"><p>Sa isang Smart Contract, ang programa ay nagpapatakbo ng code sa blockchain sa bawat pagkakataon na ang mga nakasaad na kondisyon ay natagpuan.</p><p>Ang bawat smart contract ay nangangailangan na ang mga indibiduwal o grupo ay magbigay ng kanilang digital na pirma. Ito’y maaaring gawin sa pamamagitan ng mga in-browser wallets kagaya ng MetaMask.</p><p>Ang mga kontrata na ito ay mga pampublikong dokumento na pwedeng makita ng lahat. Lahat ng smart contracts sa Ethereum blockchain ay maaaring makita sa <a href=\'https://etherscan.io/\'>Etherscan</a>.</p></div><div class="bloc2"><img src=\'/humanDAO/lesson/ano-ang-smart-contract/smart-contracts-are-self-executing-3015a054.png\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: 'c88991c30e9a4724872428bed9d1ee56',
        title: 'Pagsusulit',
        quiz: {
          question: 'Alin sa mga nasa ibaba ang HINDI katangian ng isang Smart Contract:',
          rightAnswerNumber: 1,
          answers: [
            'Nababago',
            'Mabilis at mura',
            'Mataas na antas ng pagkawasto',
            'Malinaw at nakikita ng lahat'
          ],
          id: 'ano-ang-smart-contract-2'
        }
      },
      {
        type: 'LEARN',
        notionId: '0863d55864be4d5983b870e165291595',
        title: 'Saan nagagamit ang mga smart contracts?',
        content: '<div class="bloc1"><p>Smart Contracts ay maaring gamitin sa bagay na kasing simple ng pagpapadala ng pera o pag <em>mint </em>ng NFT.</p><p>Habang ang mga smart contracts ay patuloy na nakikita bilang isang bagay na tungkol sa <em>crypto</em>, dumadami na ang mga panukala na magamit ito sa labas ng mundo ng <em>crypto</em>.</p><p>Ilan sa mga maaaring gamit nito, pero hindi limitado dito ay:</p><ul><li>Pagpapasweldo, pagbagay ng buwis, at pensiyon</li><li>Pagkolekta ng datos</li><li><em>Real Estate </em>at <em>crowdfunding</em></li><li>Pagpapatunay ng pagkakilanlan</li></ul></div><div class="bloc2"><img src=\'/humanDAO/lesson/ano-ang-smart-contract/saan-nagagamit-ang-mga-smart-contracts-9dd5bf70.png\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '0775ede98f6345bda50911ce4884c9f6',
        title: 'Pagsusulit',
        quiz: {
          question: 'Alin sa ibaba ang gamit sa mga Smart Contacts',
          rightAnswerNumber: 4,
          answers: [
            'Defi Lending',
            'Crypto Gaming',
            'Learn-to-Earn',
            'Lahat ng nabanggit'
          ],
          id: 'ano-ang-smart-contract-3'
        }
      },
      {
        type: 'END',
        title: 'End of lesson'
      }
    ]
  },
  {
    kudosImageLink: '/humanDAO/lesson/ano-ang-web3/kudos-751cf023.png',
    lessonImageLink: '/humanDAO/lesson/ano-ang-web3/lesson-18144da6.png',
    socialImageLink: '/humanDAO/lesson/ano-ang-web3/social-cfaf58ba.jpg',
    learningActions: '',
    marketingDescription: 'Pagtatalakay sa web3',
    kudosId: null,
    duration: 10,
    learnings: '',
    difficulty: undefined,
    description: 'Pagtatalakay sa web3',
    name: 'Ano ang Web3?',
    moduleId: '5679e9abfc4142efaad04964d2307667',
    quest: 'humanDAOAnoAngWeb3',
    publicationStatus: 'publish',
    isFeaturedOnHomepage: true,
    isCommentsEnabled: true,
    endOfLessonRedirect: null,
    endOfLessonText: 'MAHALAGANG PAALALA: Makakatanggap ka ng non-transferrable NFT badge at trophy sa kada lesson na matatapos mo sa humanDAO Academy. Magsisilbi ang mga NFT na ito bilang patunay ng iyong kaalaman at karunungan sa humanDAO at web3. Sa susunod na pagkakataon, maaaring makatulong ito sa iyong paghahanap ng trabaho dahil taglay ng wallet mo ang pinaka resume o CV ng iyong mga natapos. Kaya hangga\'t maaari, isang wallet lang ang dapat mong gamitin at hindi iwawala kailanman.',
    notionId: 'cc5cf59d830443419d530caa860a7301',
    slug: 'ano-ang-web3',
    imageLinks: [
      '/humanDAO/lesson/ano-ang-web3/ano-ang-web3-6df969e0.png',
      '/humanDAO/lesson/ano-ang-web3/comparison-between-web1web2web3-4b2290a2.png',
      '/humanDAO/lesson/ano-ang-web3/mga-pangunahing-pakinabang-ng-web3-5f6af7ff.png'
    ],
    slides: [
      {
        type: 'LEARN',
        notionId: 'def33fdaef034732a2cb8cc11a4978ce',
        title: 'Web3: The future of the Internet',
        content: '<div class="bloc2"><iframe allowfullscreen src=\'https://www.youtube.com/embed/Z0-JpR1IY0I?start=461&feature=oembed&rel=0&start=461\'></iframe></div>'
      },
      {
        type: 'LEARN',
        notionId: 'db6a2df8c92f42048c6b3573de33069e',
        title: 'Ano ang Web3?',
        content: '<div class="bloc1"><p>Ang Internet o ang World Wide Web ay pinapahintulutan ang mga tao na magbahagi ng impormasyon sa isa\'t isa.<br>Simula ng ito ay mabuo, ang Internet ay patuloy na gumaganda.</p><p>Ganito ang naging ebolusyon ng web…</p><ul><li>Web 1.0 (1991-2004) ay nagbigay daan sa kominikasyon patungo sa isang direksyon. </li><li>Web 2.0 (2004-onwards) ay pinaigi ito at naging posible ang <em>two-way komunikasyon.</em></li><li>Web 3.0 ay pinaigi pa ito ng isang hakbang at napahintulutan ang lahat na gumawa at maging mayari ng <em>data o assets sa Internet. </em></li></ul><p>Web3 ay ang pinakabang bersyon ng Internet.</p></div><div class="bloc2"><img src=\'/humanDAO/lesson/ano-ang-web3/ano-ang-web3-6df969e0.png\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '28afb6622d9542af87280c5181b3c51c',
        title: 'Pagsusulit',
        quiz: {
          question: 'Alin sa ibaba ang HINDI katangian ng Web3?',
          rightAnswerNumber: 3,
          answers: [
            'Decentralization',
            'Blockchain technology',
            'Pay Per Click',
            'Token-based economics'
          ],
          id: 'ano-ang-web3-1'
        }
      },
      {
        type: 'LEARN',
        notionId: 'de1053fc77b7431aa6dc2ecaad7f0590',
        title: 'Comparison Between Web1/Web2/Web3',
        content: '<img src=\'/humanDAO/lesson/ano-ang-web3/comparison-between-web1web2web3-4b2290a2.png\'>'
      },
      {
        type: 'QUIZ',
        notionId: '4d4f6996504b4b1787ccece9f8e65cd2',
        title: 'Pagsusulit',
        quiz: {
          question: 'Ang mga plataporma kagaya ng Facebook and Instagram ay ilan sa mga halimbawa ng:',
          rightAnswerNumber: 2,
          answers: [
            'Web1',
            'Web2',
            'Web3',
            'Metaverse'
          ],
          id: 'ano-ang-web3-2'
        }
      },
      {
        type: 'LEARN',
        notionId: '80c9cc74c3ec44f9b56fc96ff189ac09',
        title: 'Mga pangunahing pakinabang ng Web3',
        content: '<div class="bloc1"><p>Ang Web3.0 ay madaming gamit, the ang tatlong tampok na silbi nito ay:</p><ol><li>Ang lahat ay maaaring gumamit ng <em>networks </em>- hindi na kailangan ng paalam</li><li>Maaari mo itong gamitin ng hindi ka nakikilala</li><li>Walang makakaharang ng iyong mga transaksyon</li></ol><p>Ang Web3.0 ay bukas at nagbibigay ng <em>reward sa</em> mga gumagamit nito, ito ay nagbibigay daan para magbunga ang <em><strong>Digital Gig Economy</strong></em><strong>.</strong></p></div><div class="bloc2"><img src=\'/humanDAO/lesson/ano-ang-web3/mga-pangunahing-pakinabang-ng-web3-5f6af7ff.png\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: 'd46e2cc42d9f4771b01fe2224a381412',
        title: 'Pagsusulit',
        quiz: {
          question: 'Alin sa ibaba ang HINDI katangian ng Web3?',
          rightAnswerNumber: 2,
          answers: [
            'Ito ay decentralized ',
            'Ito ay pagmamayari ng mga nagtaguyod dito',
            'Ito ay pagmamayari ng mga gumagamit nito',
            'Ito ay nakakabit sa isang blockchain'
          ],
          id: 'ano-ang-web3-3'
        }
      },
      {
        type: 'END',
        title: 'End of lesson'
      }
    ]
  },
  {
    kudosImageLink: '/humanDAO/lesson/ano-ang-defi/kudos-751cf023.png',
    lessonImageLink: '/humanDAO/lesson/ano-ang-defi/lesson-a2b572d2.png',
    socialImageLink: '/humanDAO/lesson/ano-ang-defi/social-cc86f1ba.jpg',
    learningActions: '',
    marketingDescription: 'Pag-unawa sa pangunahing kaalaman ng Decentralized Finance',
    kudosId: null,
    duration: 10,
    learnings: '',
    difficulty: undefined,
    description: 'Pag-unawa sa pangunahing kaalaman ng Decentralized Finance',
    name: 'Ano ang DeFi?',
    moduleId: '5679e9abfc4142efaad04964d2307667',
    quest: 'humanDAOAnoAngDeFi',
    publicationStatus: 'publish',
    isFeaturedOnHomepage: true,
    isCommentsEnabled: true,
    endOfLessonRedirect: null,
    endOfLessonText: 'MAHALAGANG PAALALA: Makakatanggap ka ng non-transferrable NFT badge at trophy sa kada lesson na matatapos mo sa humanDAO Academy. Magsisilbi ang mga NFT na ito bilang patunay ng iyong kaalaman at karunungan sa humanDAO at web3. Sa susunod na pagkakataon, maaaring makatulong ito sa iyong paghahanap ng trabaho dahil taglay ng wallet mo ang pinaka resume o CV ng iyong mga natapos. Kaya hangga\'t maaari, isang wallet lang ang dapat mong gamitin at hindi iwawala kailanman.',
    notionId: '2f1380879c0a40b2bde5bd677683ab51',
    slug: 'ano-ang-defi',
    imageLinks: [
      '/humanDAO/lesson/ano-ang-defi/ano-ang-defi-1f26de9b.png',
      '/humanDAO/lesson/ano-ang-defi/paano-napapaunlad-ng-defi-ang-kasalukuyang-financial-system-e1e7c57b.png',
      '/humanDAO/lesson/ano-ang-defi/paggamit-ng-defi-54b45bb9.png',
      '/humanDAO/lesson/ano-ang-defi/defi-ecosystem-ng-ethereum-8739727d.png'
    ],
    slides: [
      {
        type: 'LEARN',
        notionId: '467320e147084e53819f7b92ce2ab3d3',
        title: 'Ano ang DeFi?',
        content: '<div class="bloc1"><p>Ang kahulugan ng <em>DeFi</em> ay <em>Decentralised</em> <em>Finance</em>. Ito ay tumutukoy sa mga <em>financial services</em> na tumatakbo gamit ang <em>smart contracts</em>.</p><p>Layunin ng <em>DeFi</em> na tanggalin ang pangangailangan sa mga <em>centralised banks</em> o <em>exchanges</em> para makapagbigay ng <em>financial services</em> sa mga tao.</p></div><div class="bloc2"><img src=\'/humanDAO/lesson/ano-ang-defi/ano-ang-defi-1f26de9b.png\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '566f5354d7964e1385aaf3173e419e58',
        title: 'Pagsusulit',
        quiz: {
          question: 'Ang <em>DeFi </em>ay posibleng palitan ang ________________?',
          rightAnswerNumber: 4,
          answers: [
            'Investment Banks',
            'Reserve Banks',
            'Private Banks',
            'Lahat ng nabanggit'
          ],
          id: 'ano-ang-defi-1'
        }
      },
      {
        type: 'LEARN',
        notionId: '6bcca749ffd545a78a8519d5797e0fb9',
        title: 'Paano napapaunlad ng DeFi ang kasalukuyang Financial System?',
        content: '<div class="bloc1"><p>Layunin ng <em>DeFi</em> na makagawa ng <em>transparent</em> na <em>financial system</em> kung saan ang mga tao ay kontrolado ng buo ang kanilang salapi. Ito ay nagbibigay ng kapangyarihan sa <em>blockchain of Finance</em>, kung kaya\'t nagbibigay daan ito para sa lalong magandang <em>transparency</em>.</p></div><div class="bloc2"><img src=\'/humanDAO/lesson/ano-ang-defi/paano-napapaunlad-ng-defi-ang-kasalukuyang-financial-system-e1e7c57b.png\'></div>'
      },
      {
        type: 'LEARN',
        notionId: 'b616c1cea0d24125a2520fb07b647087',
        title: 'Paggamit ng DeFi',
        content: '<div class="bloc1"><p>Ang mga <em>DeFi services</em> ay puwedeng gamitin para:</p><ul><li>Makapagpadala ng pera</li><li>Kumita ng interest</li><li>Makautang direkta mula sa ibang <em>users</em></li></ul><p>Karamihan sa <em>DeFi protocols</em> ay pagmamay-ari ng users, kaya ang <em>users</em> ay nabibigyan ng <em>reward</em> habang umuunlad ang <em>DeFi protocol</em>.</p></div><div class="bloc2"><img src=\'/humanDAO/lesson/ano-ang-defi/paggamit-ng-defi-54b45bb9.png\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: 'aa190a7430db4c759cde8b58d60f8397',
        title: 'Pagsusulit',
        quiz: {
          question: 'Ang mga <em>DeFi services</em> ay puwedeng gamitin para',
          rightAnswerNumber: 4,
          answers: [
            'Makapagpadala ng pera',
            'Kumita ng interest',
            'Makautang direkta mula sa ibang users',
            'Lahat ng nabanggit'
          ],
          id: 'ano-ang-defi-2'
        }
      },
      {
        type: 'LEARN',
        notionId: '4710efac75964b7191632f245c01cd77',
        title: 'DeFi Ecosystem ng Ethereum',
        content: '<div class="bloc1"><p>Ang <em>DeFi Ecosystem</em> ay umuunlad ng sobrang bilis. Ang <em>illustration </em>na ito ay naglalaman ng listahan ng mga umuusbong na manlalaro sa loob ng <em>DeFi space</em> sa <em>Ethereum ecosystem</em>. Ang <em>core DeFi platforms</em> ay umiikot sa <em>Curve Finance</em> kasama ang ibang <em>blue chip platforms</em> tulad ng Yearn, AAVE, Uniswap, Compound, at Maker.</p></div><div class="bloc2"><img src=\'/humanDAO/lesson/ano-ang-defi/defi-ecosystem-ng-ethereum-8739727d.png\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '79fe86fe04284973bca7ee2b353d19eb',
        title: 'Pagsusulit',
        quiz: {
          question: 'Alin sa mga ito ang halimbawa ng <em>core DeFi platform</em>',
          rightAnswerNumber: 4,
          answers: [
            'Metamask',
            'Opensea',
            'a16z',
            'Uniswap'
          ],
          id: 'ano-ang-defi-3'
        }
      },
      {
        type: 'END',
        title: 'End of lesson'
      }
    ]
  },
  {
    kudosImageLink: '/humanDAO/lesson/ano-ang-mga-nft/kudos-751cf023.png',
    lessonImageLink: '/humanDAO/lesson/ano-ang-mga-nft/lesson-7774c66e.png',
    socialImageLink: '/humanDAO/lesson/ano-ang-mga-nft/social-5a13bdc2.jpg',
    learningActions: '',
    marketingDescription: 'Pag-unawa sa mga pangunahing kaalaman Non-Fungible Tokens',
    kudosId: null,
    duration: 10,
    learnings: '',
    difficulty: undefined,
    description: 'Pag-unawa sa mga pangunahing kaalaman Non-Fungible Tokens',
    name: 'Ano ang mga NFT?',
    moduleId: '5679e9abfc4142efaad04964d2307667',
    quest: 'humanDAOAnoAngMgaNFT',
    publicationStatus: 'publish',
    isFeaturedOnHomepage: true,
    isCommentsEnabled: true,
    endOfLessonRedirect: null,
    endOfLessonText: 'MAHALAGANG PAALALA: Makakatanggap ka ng non-transferrable NFT badge at trophy sa kada lesson na matatapos mo sa humanDAO Academy. Magsisilbi ang mga NFT na ito bilang patunay ng iyong kaalaman at karunungan sa humanDAO at web3. Sa susunod na pagkakataon, maaaring makatulong ito sa iyong paghahanap ng trabaho dahil taglay ng wallet mo ang pinaka resume o CV ng iyong mga natapos. Kaya hangga\'t maaari, isang wallet lang ang dapat mong gamitin at hindi iwawala kailanman.',
    notionId: '79a6ca8eb3c94d759af5864e158f4c9b',
    slug: 'ano-ang-mga-nft',
    imageLinks: [
      '/humanDAO/lesson/ano-ang-mga-nft/ano-ang-minting-42bd1ce9.png',
      '/humanDAO/lesson/ano-ang-mga-nft/ano-ang-mga-royalties-031393a0.png'
    ],
    slides: [
      {
        type: 'LEARN',
        notionId: '74ac482df9bd4753ad8cacfa0362e993',
        title: 'Ano ang mga NFT?',
        content: '<div class="bloc1"><p>Ang <em>NFTs</em> ay mga <em>digital</em> at walang katulad na patunay na ikaw ang nagmamay-ari ng isang bagay - pisikal man o <em>digital</em>.</p><p>Karamihan ng <em>NFTs</em> ngayon ay binuo para sa pagamamaya-ari ng <em>digital assets</em>, tulad ng <em>digital art</em>, <em>music video</em>, <em>photos</em>, at <em>digital lands</em>.</p><p>Pero pwede rin kumuha ang kahit na sino ng <em>NFTs</em> na nagrerepresenta ng pagmamay-ari ng pisikal na bagay tulad ng <em>land records</em> o <em>artwork</em>.</p></div>'
      },
      {
        type: 'QUIZ',
        notionId: '5e149ddcd40041d18e007e5b10753f40',
        title: 'Pagsusulit',
        quiz: {
          question: 'Ang <em>NFT</em> ay patunay ng ________',
          rightAnswerNumber: 2,
          answers: [
            'Pagiging tunay',
            'Pag-aari',
            'Paglikha',
            'Copyright'
          ],
          id: 'ano-ang-mga-nft-1'
        }
      },
      {
        type: 'LEARN',
        notionId: 'bc98d2e2b6ff4d28a7f9f71c376f085b',
        title: 'Ano ang minting?',
        content: '<div class="bloc1"><p>Ang paggawa ng paglikha ng <em>NFT</em> ay tinatawag na \'<em>minting</em>\'.</p><p>Para makapag-<em>mint </em>ng <em>NFT</em>, kailangan na naka-<em>upload</em> sa <em>blockchain</em> ang <em>digital</em> <em>object</em> na kumakatawan sa orihinal na <em>asset</em>. Pagtapos malikha, ang mga <em>NFTs</em> ay puwedeng mabili o mabenta sa isang <em>NFT Marketplace</em>.</p></div><div class="bloc2"><img src=\'/humanDAO/lesson/ano-ang-mga-nft/ano-ang-minting-42bd1ce9.png\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '2ca5ab5eba7945a08324db037ee019e0',
        title: 'Pagsusulit',
        quiz: {
          question: 'Ano ang code na nagpapahintulot na makapag-<em>mint</em> ng <em>NFT</em>?',
          rightAnswerNumber: 2,
          answers: [
            'Gas fees',
            'Smart Contract',
            'Sponsor',
            'Wala sa nabanggit'
          ],
          id: 'ano-ang-mga-nft-2'
        }
      },
      {
        type: 'LEARN',
        notionId: '0762751d6edc44f2b7eb64e3abc7c491',
        title: 'Ano ang mga royalties?',
        content: '<div class="bloc1"><p>Ang walang katulad na <em>feature</em> ng <em>NFTs</em> ay \'<em>Royalties</em>\' na nabubuo kapag nagmi-<em>mint</em> ng <em>NFT</em>.</p><p>Ang <em>Royalties </em>ang nagsisigurado na ang orihinal na manlilikha ng isang <em>NFT</em> ay palaging makakatanggap ng parte ng kita tuwing ang isang <em>NFT</em> ay nabebenta.</p><p>Ang <em>NFTs</em> ay magkakaroon pa ng maraming gamit sa darating na panahon.</p><p>Ang ilang paggamit sa NFTs na mabagal ngunit patuloy na lumalago ay patunay ng exclusive na membership, certification, at simbolo ng social status.</p></div><div class="bloc2"><img src=\'/humanDAO/lesson/ano-ang-mga-nft/ano-ang-mga-royalties-031393a0.png\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: 'defbc243ee9146eb8bab42d78fa9bbc2',
        title: 'Pagsusulit',
        quiz: {
          question: 'Ang NFT ay maaaring tawaging ________',
          rightAnswerNumber: 1,
          answers: [
            'Asset',
            'Liability',
            'Wala sa nabanggit'
          ],
          id: 'ano-ang-mga-nft-3'
        }
      },
      {
        type: 'END',
        title: 'End of lesson'
      }
    ]
  },
  {
    kudosImageLink: '/humanDAO/lesson/ano-ang-dao/kudos-751cf023.png',
    lessonImageLink: '/humanDAO/lesson/ano-ang-dao/lesson-dd20ff12.png',
    socialImageLink: '/humanDAO/lesson/ano-ang-dao/social-9397de7b.jpg',
    learningActions: '',
    marketingDescription: 'Pagtalakay sa konsepto ng web3 orgs',
    kudosId: null,
    duration: 10,
    learnings: '',
    difficulty: undefined,
    description: 'Pagtalakay sa konsepto ng web3 orgs',
    name: 'Ano ang DAO?',
    moduleId: '5679e9abfc4142efaad04964d2307667',
    quest: 'humanDAOAnoAngDAO',
    publicationStatus: 'publish',
    isFeaturedOnHomepage: true,
    isCommentsEnabled: true,
    endOfLessonRedirect: null,
    endOfLessonText: 'MAHALAGANG PAALALA: Makakatanggap ka ng non-transferrable NFT badge at trophy sa kada lesson na matatapos mo sa humanDAO Academy. Magsisilbi ang mga NFT na ito bilang patunay ng iyong kaalaman at karunungan sa humanDAO at web3. Sa susunod na pagkakataon, maaaring makatulong ito sa iyong paghahanap ng trabaho dahil taglay ng wallet mo ang pinaka resume o CV ng iyong mga natapos. Kaya hangga\'t maaari, isang wallet lang ang dapat mong gamitin at hindi iwawala kailanman.',
    notionId: '5d86c9a7d82247428deee9c9eaf9fdb1',
    slug: 'ano-ang-dao',
    imageLinks: [
      '/humanDAO/lesson/ano-ang-dao/what-is-a-dao-9ea17bce.png',
      '/humanDAO/lesson/ano-ang-dao/ang-pinagsimulan-ng-dao-43871093.png',
      '/humanDAO/lesson/ano-ang-dao/ang-kahulugan-ng-dao-e20cb1c8.png',
      '/humanDAO/lesson/ano-ang-dao/ano-ang-pamamahala-sa-isang-dao-12-64c0e12b.png',
      '/humanDAO/lesson/ano-ang-dao/ano-ang-pamamahala-sa-isang-dao-22-38a92eba.png',
      '/humanDAO/lesson/ano-ang-dao/bakit-bukod-tangi-ang-mga-dao-5c0787c0.png',
      '/humanDAO/lesson/ano-ang-dao/paano-magtrabaho-sa-isang-dao-cfe6adb8.png',
      '/humanDAO/lesson/ano-ang-dao/maituturing-ba-ang-dao-bilang-regular-na-trabaho-sa-hinaharap-na-panahon-bb3d9391.png',
      '/humanDAO/lesson/ano-ang-dao/ibat-ibang-uri-ng-dao-c389bedb.png'
    ],
    slides: [
      {
        type: 'LEARN',
        notionId: 'f0a8cffb3c304dfa8c6c618bb9ccefca',
        title: 'What is a DAO?',
        content: '<div class="bloc1"><p>Ang ibig sabihin ng DAO ay Decentralised Autonomous Organization / Organisasyon<br>Sa madaling salita, ito ay grupo ng tao na may nakabahaging mapagkukunan ng pera, papunta sa iisang layunin. Ang mga DAO ay nabubuo kung saan kahit sino ang pwede makibahagi at makakuha ng premyo.</p><p><br>Ang DAO ay pagmamayari ng isang organisasyon na binubuo ng isang komunidad. Ang mga desisyon ay nagmumula sa mga ibiniabahagi na proposals o proyekto.</p></div><div class="bloc2"><img src=\'/humanDAO/lesson/ano-ang-dao/what-is-a-dao-9ea17bce.png\'></div>'
      },
      {
        type: 'LEARN',
        notionId: 'f2146eeada7b49a193533d7258f28fa4',
        title: '<strong><strong>Ang pinagsimulan ng DAO</strong></strong>',
        content: '<div class="bloc1"><p>Ang ideya ng DAO o Decentralized Autonomous Organization ay malapit sa historya ng pagunlad ng Internet.</p><p>Ang Internet ay nagsimula sa taong 1980s na may hanay ng mga protocol na pinapaliwanag ng mga naunang komunidad. Ang tawag sa Era na iyon na nag tagal hanggang 2000s, ay “Web 1.0”</p><p>Ang pag gamit ng internet ay lumaganap ng mabilis at lumaki ng lumaki ito hanggang ito ay nagging Madali gamitin ng mga tao at nagkaroon ng iba’t ibang serbisyo.</p><p>Dahil dito, nag bigay daan to sa mga panibagong centralized na mga serbisyo na tinatawag ng “Web 2.0”</p><p>Ang Web 2.0 ay umunlad pa lalo at nagging Web 3.0 – kung saan ang decentralized na internet ay itinaguyod ng mga tinatawag nating “Builders”</p><p>Ang mga Web3 Builders ay halos palaging magkasama sa pagiging organisasyon kaya ito ay tinatawag na DAO.</p></div><div class="bloc2"><img src=\'/humanDAO/lesson/ano-ang-dao/ang-pinagsimulan-ng-dao-43871093.png\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '5908498aea854efdb5443264e0dde3b1',
        title: 'Ang kahulugan ng DAO',
        content: '<div class="bloc1"><p>Ito ay simple, impormal ngunit tinatawag na ‘degen’ na kahulugan ng DAO ay mababasa sa ibaba:</p><p><em>“Ang Dao ay isang grupo na may nakabahaging mapagkukunan ng pera”.</em></p><p>Sa pormal na kahulugan, hiramin natin ang kahulugan ng “put forward” ni Aragon, na isang Open-source DAO provider.</p><blockquote>Tinutukoy nila ang DAO bilang “isang nilalang na nagging katutubo na sa pag gamit ng internet na walang pamamahala na inaayos ng isang hanay ng mga tuntunin sa isang pampublikong blockchain, na may layunin na magkaroon ng sariling buhay at bigyan ng insentibo ang mga tao para maabot ang iisang ibinahaging layunin.”</blockquote></div><div class="bloc2"><img src=\'/humanDAO/lesson/ano-ang-dao/ang-kahulugan-ng-dao-e20cb1c8.png\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '708f1c2ccc744b16ada507328901b81e',
        title: 'Pagsusulit',
        quiz: {
          question: 'Lahat ng importanteng desisyon sa isang DAO ay ginaganap sa pamamagitan ng ________',
          rightAnswerNumber: 2,
          answers: [
            'Board meeting',
            'Voting (Pagboto)',
            'Delegating (Pagtatalaga)',
            'Decentralization'
          ],
          id: 'ano-ang-dao-1'
        }
      },
      {
        type: 'LEARN',
        notionId: '32b76ed71ac54f25898e79b92f928f39',
        title: 'Ano ang pamamahala sa isang DAO? (1/2)',
        content: '<div class="bloc1"><p>Kailangan natin magsimula sa isang mahalagang tanong: Bakit nga ba may iba’t-ibang organisasyon sa mundo? Ang bawat organisasyon ay may layunin sa kanyang pagtatag, at ito ay para lutasin ang mga problema. Bakit nga ba sila interesado dito?</p><p>Dalawa ang mahalagang rason na pwedeng mag-explain nito:</p><ol><li>Matuturing nating likas na pagkatao ang paglutas ng mga problema upang gawing payak at mahusay ang pamamaraan ng ating pagpapatakbo ng buhay. Ang organisasyon ay isa lamang sa mga anyo ng pagtutugon nito.</li><li>Mahilig ang tao tumanggap ng gantimpala sa paglutas ng mga problema. Nangunguna ang mga organisasyon sa paggawa ng simpleng proseso para sa mga kasapi at namumuhunan dito.</li></ol><p>Ngayong napaliwanag na natin ang mga pangunahing konsepto ng isang DAO, intindihin naman natin kung bakit mahlaga ang Governance sa pagpapatakbo ng isang organisasyon.</p></div><div class="bloc2"><img src=\'/humanDAO/lesson/ano-ang-dao/ano-ang-pamamahala-sa-isang-dao-12-64c0e12b.png\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '9307fdd2427746d79ade8a0fc40100ec',
        title: 'Ano ang pamamahala sa isang DAO? (2/2)',
        content: '<div class="bloc1"><p>Ayon sa kasalukuyang pamantayan, ang board of directors ang gumagawa ng desisyon base sa kanilang lebel ng experience. Bagamat gumagana ang sistemang ito sa mga kumpanya, hindi ito naaangkop pagdating sa isang DAO.</p><p>Ang DAO ay binuo para sa kanilang komunidad. Ito ang nagbibigay sa kanila ng pahintulot para makapag desisyon ang bawat miyembro kahit walang board of directors.</p><p>Maaari mong maisip, hindi na ba kakailanganin ng governance structure sa isang DAO? Sa aming palagay, kailangan pa rin ito.</p><p>Sinusundan ng DAO ang decentralized model pero nais pa rin nito maging parte sa paglutas ng mga problema.</p><p>Upang maging maayos ang koordinasyon ng isang organisasyon, mahalaga ang pagbuo ng governance structure para maisagawa ito.</p></div><div class="bloc2"><img src=\'/humanDAO/lesson/ano-ang-dao/ano-ang-pamamahala-sa-isang-dao-22-38a92eba.png\'></div>'
      },
      {
        type: 'LEARN',
        notionId: 'bd792832f0eb4c25a74faa4097ec3c00',
        title: 'Bakit bukod tangi ang mga DAO?',
        content: '<div class="bloc1"><p>Naiiba ang mga DAO dahil sila ang nagtakda ng bagong paraan ng pagtatrabaho, kung saan ang iba’t-ibang grupo ay pwedeng makisama sa mga freelancer para isa mas makatarungang pag-unlad.</p><p>Hindi man bago ang konsepto nito (tulad ng kooperatiba na may kaparehong pamamaraan), nanguna naman ang mga DAO sa pagsulong ng bagong teknolohiya tulad ng web3.</p><p>Mula sa pananaw na iyon, nagkaroon ng panibagong bersyon ang kooperatiba mula sa paggamit ng mga smart contracts sa kanilang mga pangunahing proseso. Ang iba pang mga pagbabago sa hinaharap na panahon ay maaaring pagpasiyan gamit ang isang patas na mekanismo ng pagboto.</p><p>Ang ganitong sistema ng governance ay nagbibigay ng kalayaan sa miyembro ng mga DAO para pagtuunan ng pansin ang mga problema, kaysa mag-ubos ng oras sa pangangasiwa ng mga papeles at pamamahala ng mga tao.</p></div><div class="bloc2"><img src=\'/humanDAO/lesson/ano-ang-dao/bakit-bukod-tangi-ang-mga-dao-5c0787c0.png\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '92ded7720d5449e18b87afd2c8a548a2',
        title: 'Paano magtrabaho sa isang DAO?',
        content: '<div class="bloc1"><p>Mahahalintulad sa mga freelancers ang mga nagtatrabaho sa isang DAO. Slia ay maaaring mag-ambag ng kanilang skills sa iba’t-ibang organisasyon.</p><p>Dahil dito, maaring magtrabaho ang miyembro ng mga DAO mula sa kanilang bahay, at sa sarili nilang timezone. Hindi sila nali-limit kung saan nila gusto mag-trabaho, ngunit wala pa itong seguridad kung hanggang gaano sila katagal maaaring manatili sa ganitong posisyon.</p></div><div class="bloc2"><img src=\'/humanDAO/lesson/ano-ang-dao/paano-magtrabaho-sa-isang-dao-cfe6adb8.png\'></div>'
      },
      {
        type: 'LEARN',
        notionId: 'aec937c4feb0410996993ef94d7e8ebe',
        title: 'Maituturing ba ang DAO bilang regular na trabaho sa hinaharap na panahon?',
        content: '<div class="bloc1"><p><em>Oo naman!</em></p><p>Bagamat may hadlang sa bagong sistema, malaki na ang pinagbago ng DAO simula 2021.</p><p>Maaari itong maging pangunahing paraan para bigyan ng panibagong pananaw ang trabaho sa pagpasok ng ika-21 na siglo.</p><p>Mula sa balangkas ng ‘work-to-earn’, maaaring magkaroon pa ng iba’t-ibang modelo ang trabaho tulad ng ‘play-to-earn’, ‘learn-to-earn’, o ‘create-to-earn’. Ang mga nabanggit na paraan ay hindi ganap na pinapatupad sa mga tradisyonal na kumpanya.</p><p>Ang ecosystem na ito ay maaaring magbigay ng kalayaan, pagsasama, at katarungan sa pagbigay ng gantimpala. Ang pagbabagong ito ay kinikilala at tinanggap ng mga taong nais subukan ang pagtrabaho sa DAO.</p></div><div class="bloc2"><img src=\'/humanDAO/lesson/ano-ang-dao/maituturing-ba-ang-dao-bilang-regular-na-trabaho-sa-hinaharap-na-panahon-bb3d9391.png\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '604cb44d9eac43cdb2c9611ae3decc85',
        title: 'Pagsusulit',
        quiz: {
          question: 'Kaiangan magkasama sa isang lugar o opisina ang mga nagtatrabaho sa isang DAO para maging mahusay.',
          rightAnswerNumber: 2,
          answers: [
            'Tama',
            'Mali'
          ],
          id: 'ano-ang-dao-2'
        }
      },
      {
        type: 'LEARN',
        notionId: 'a51c4e52d40145e28baad3663aa98a14',
        title: 'Iba’t-ibang uri ng DAO',
        content: '<div class="bloc1"><p>Ang tsart sa ibaba na sinimulan ni <a href=\'https://coopahtroopa.mirror.xyz/_EDyn4cs9tDoOxNGZLfKL7JjLo5rGkkEfRa_a-6VEWw\'>@Coopahtroopa</a> ay isang magandang halimbawa kung paano kilalanin ang mga DAO base sa kanilang uri.</p></div><div class="bloc2"><img src=\'/humanDAO/lesson/ano-ang-dao/ibat-ibang-uri-ng-dao-c389bedb.png\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '71a41a0f69564cd49cb39e470fd9c71e',
        title: 'Conclusion',
        content: '<div class="bloc1"><p>Para magkaroon ka kaalaman kung paano pinapatakbo ang iba’t-ibang DAO, pwede mong simulan ang iyong paglalagkbay sa pagsali sa Discord server nila para malaman ang kanilang ginagawa sa mga channels. </p><p>Pwede mo rin subukang bumati ng “gm” sa mga tao kahit hindi mo sila kilala, dahil ito ay matuturing na isang oportunidad na madiskubre kung anong klaseng komunidad ang mayroon sa isang DAO, at kung anong problema ang maaari mong lutasin. Mula dito, pwede mo na isipin saan mo ihahanay ang mga skills mo para mag-ambag sa isang DAO.</p><p>Kapag pumasok ka na sa loob ng DAO, huwag mo kalimutan mag-enjoy, kasi ano paba ang dapat mong gawin bukod sa pagtrabaho?</p><p>Mga Sanggunian at Karagdagang Pagbabasa:</p><ul><li><a href=\'https://future.a16z.com/dao-canon/\'>https://future.a16z.com/dao-canon/</a></li><li><a href=\'https://blog.aragon.org/15-ways-the-world-is-being-transformed-by-daos/\'>https://blog.aragon.org/15-ways-the-world-is-being-transformed-by-daos/</a></li><li><a href=\'https://future.a16z.com/the-future-of-work-daos-crypto-networks\'>https://future.a16z.com/the-future-of-work-daos-crypto-networks</a></li></ul></div>'
      },
      {
        type: 'QUIZ',
        notionId: 'e165a56d91c142588510612db1a002c0',
        title: 'Pagsusulit',
        quiz: {
          question: 'Ang iba’t-ibang DAO ay mahahanap sa uri na ito:',
          rightAnswerNumber: 4,
          answers: [
            'Edukasyon at Pananalapi',
            'Panlipunan',
            'Pamumuhunan',
            'Lahat ng nabanggit'
          ],
          id: 'ano-ang-dao-3'
        }
      },
      {
        type: 'END',
        title: 'End of lesson'
      }
    ]
  },
  {
    kudosImageLink: '/humanDAO/lesson/ano-ang-metaverse/kudos-751cf023.png',
    lessonImageLink: '/humanDAO/lesson/ano-ang-metaverse/lesson-afb72abf.png',
    socialImageLink: '/humanDAO/lesson/ano-ang-metaverse/social-03cca826.jpg',
    learningActions: '',
    marketingDescription: 'Isang maikling pagtalakay sa Metaverse',
    kudosId: null,
    duration: 10,
    learnings: '',
    difficulty: undefined,
    description: 'Isang maikling pagtalakay sa Metaverse',
    name: 'Ano ang Metaverse?',
    moduleId: '5679e9abfc4142efaad04964d2307667',
    quest: 'humanDAOAnoAngMetaverse',
    publicationStatus: 'publish',
    isFeaturedOnHomepage: true,
    isCommentsEnabled: true,
    endOfLessonRedirect: null,
    endOfLessonText: 'MAHALAGANG PAALALA: Makakatanggap ka ng non-transferrable NFT badge at trophy sa kada lesson na matatapos mo sa humanDAO Academy. Magsisilbi ang mga NFT na ito bilang patunay ng iyong kaalaman at karunungan sa humanDAO at web3. Sa susunod na pagkakataon, maaaring makatulong ito sa iyong paghahanap ng trabaho dahil taglay ng wallet mo ang pinaka resume o CV ng iyong mga natapos. Kaya hangga\'t maaari, isang wallet lang ang dapat mong gamitin at hindi iwawala kailanman.',
    notionId: '5601c63cddac4f3f97e7f8f0fd1ffec5',
    slug: 'ano-ang-metaverse',
    imageLinks: [
      '/humanDAO/lesson/ano-ang-metaverse/ano-ang-metaverse-25075269.png',
      '/humanDAO/lesson/ano-ang-metaverse/ano-ang-nagaganap-sa-metaverse-7831f6a9.png',
      '/humanDAO/lesson/ano-ang-metaverse/kailan-ba-nagsimula-ang-metaverse-9a71aa17.png',
      '/humanDAO/lesson/ano-ang-metaverse/what-does-the-metaverse-look-like-now-2d3b9386.png',
      '/humanDAO/lesson/ano-ang-metaverse/ano-ang-magiging-kinabukasan-ng-metaverse-03ea1a55.png'
    ],
    slides: [
      {
        type: 'LEARN',
        notionId: 'd5de0c6237a64c4eacd271f9537651a5',
        title: 'Ano ang Metaverse?',
        content: '<div class="bloc1"><p>Ang Metaverse ay isang digital na mundo na ginagaya ang tunay na mundo gamit ang iba’t ibang teknolohiya tulad ng Virtual reality o VR, Augmented Reality o AR, at Blockchain.</p><p>Ito ay binubuo upang maging bagong destinasyon para sa larangan ng Gaming, Business at Social Media.</p></div><div class="bloc2"><img src=\'/humanDAO/lesson/ano-ang-metaverse/ano-ang-metaverse-25075269.png\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '9760588144aa44bc8140d49f2af18561',
        title: 'Pagsusulit',
        quiz: {
          question: 'Ang Metaverse platform ay maaring gamitin sa _____.',
          rightAnswerNumber: 4,
          answers: [
            'Paglalaro at Pagtuturo',
            'Edukasyon',
            'Pagpupulong',
            'Lahat ng mga nabanggit'
          ],
          id: 'ano-ang-metaverse-1'
        }
      },
      {
        type: 'LEARN',
        notionId: 'e84f36268b6947d686755b48f8b224e9',
        title: 'Ano ang nagaganap sa Metaverse?',
        content: '<div class="bloc1"><p>Kahit sino ang maaaring pumasok sa metaverse bilang isang “avatar” – isang digital na bersyon na kumakatawan sa kanila.</p><p>Kapag nakapasok na sa loob ng metaverse, ang mga users o ang mga gumagamit ay maaaring makipag-usap sa isa’t isa at bumuo ng isang komunidad.</p><p>Tulad ng tunay na mundo, maaaring ikutin ng isang avatar ang metaverse, ngunit walang limitasyon kung hanggang saan mo gustong pumunta. Maaari kang lumipat mula sa isang metaverse papunta sa kabila ng isang iglap.</p><p>Maaari rin bumili ng iba’t ibang digital asset (o NFTs) sa loob ng isang Metaverse. Ito ay ginagawa sa pamamagitan ng digital cryptocurrency.</p></div><div class="bloc2"><img src=\'/humanDAO/lesson/ano-ang-metaverse/ano-ang-nagaganap-sa-metaverse-7831f6a9.png\'></div>'
      },
      {
        type: 'LEARN',
        notionId: 'd3470de3cb1c4e97a30b2fbf0645cdcd',
        title: 'Kailan ba nagsimula ang metaverse?',
        content: '<div class="bloc1"><p>Ang konsepto ng metaverse ay unang lumitaw sa isang libro na pinamagatang “Snowcrash” ni Neal Stephenson. Punong-puno ng buhay ang makikita sa loob ng metaverse na maari mahanap sa libro o sa pelikulang “Ready Player One”.</p></div><div class="bloc2"><img src=\'/humanDAO/lesson/ano-ang-metaverse/kailan-ba-nagsimula-ang-metaverse-9a71aa17.png\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '96f306d794ef4828abfeb467a4f503bd',
        title: 'Pagsusulit',
        quiz: {
          question: 'Ang Metaverse ay maari lamang mabuo gamit ang Blockchain Technology.',
          rightAnswerNumber: 2,
          answers: [
            'Tama',
            'Mali'
          ],
          id: 'ano-ang-metaverse-2'
        }
      },
      {
        type: 'LEARN',
        notionId: '5098b15748e9482aae3f2369ce14be4a',
        title: 'What does the metaverse look like now?',
        content: '<div class="bloc1"><p>Bumubuo ng sariling bersyon ng metaverse ang Facebook at Microsoft, ngunit hindi ito decentralized tulad ng mga produktong nagagawa sa web3.</p><p>Ilan sa mga web-3 native platforms na bumubuo ng application sa metaverse ay tulad ng Sandbox at Decentralized.</p></div><div class="bloc2"><img src=\'/humanDAO/lesson/ano-ang-metaverse/what-does-the-metaverse-look-like-now-2d3b9386.png\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '305e08ce74064f4c99d7df9e1f1cd6ff',
        title: 'Ano ang magiging kinabukasan ng Metaverse?',
        content: '<div class="bloc1"><p>Ngayon, malinaw na nais manatili ng Metaverse sa nararating na panahon. Ang Metaverse ay may potensyal na maging hub para sa industriya ng Entertainment (Gaming, Social Media) at Business (Web Conferences, Team Collaborations).</p><p>Higit pa dito, ang Metaverse ay magkakaroon ng malaking papel sa pag laganap ng e-commerce o Electronic Commerce. Ang mga malalaking kompanya tulad ng Nike, Adidas, at Coke ay handa na para harapin ang madla sa Metaverse.</p><p>Ang mabilis na pag-usbong ng teknolohiyang ito ay magiging pugad ng mga pagkakataon para sa teknikal at hindi teknikal na mga trabaho.</p></div><div class="bloc2"><img src=\'/humanDAO/lesson/ano-ang-metaverse/ano-ang-magiging-kinabukasan-ng-metaverse-03ea1a55.png\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '16cf2d6f81cb47b0af4c97a076efdf31',
        title: 'Pagsusulit',
        quiz: {
          question: 'Ang mga sumusunod ay halimbawa ng Decentralised Metaverses',
          rightAnswerNumber: 2,
          answers: [
            'Facebook',
            'Sandbox and Decentraland',
            'Snapchat'
          ],
          id: 'ano-ang-metaverse-3'
        }
      },
      {
        type: 'END',
        title: 'End of lesson'
      }
    ]
  },
  {
    kudosImageLink: '/humanDAO/lesson/ano-ang-crypto-wallet/kudos-091da5ee.png',
    lessonImageLink: '/humanDAO/lesson/ano-ang-crypto-wallet/lesson-93b37bc0.png',
    socialImageLink: '/humanDAO/lesson/ano-ang-crypto-wallet/social-bc3b6d21.jpg',
    learningActions: '',
    marketingDescription: 'Kaalaman sa paggawa at ligtas na paggamit ng isang crypto wallet.',
    kudosId: null,
    duration: 15,
    learnings: '',
    difficulty: 'Easy',
    description: 'Kaalaman sa paggawa at ligtas na paggamit ng isang crypto wallet.',
    name: 'Ano ang Crypto Wallet?',
    moduleId: '8507bffcd2314a96be8c5abb6d061cb3',
    quest: 'humanDAOAnoAngCryptoWallet',
    publicationStatus: 'publish',
    isFeaturedOnHomepage: true,
    isCommentsEnabled: true,
    endOfLessonRedirect: null,
    endOfLessonText: 'MAHALAGANG PAALALA: Makakatanggap ka ng non-transferrable NFT badge at trophy sa kada lesson na matatapos mo sa humanDAO Academy. Magsisilbi ang mga NFT na ito bilang patunay ng iyong kaalaman at karunungan sa humanDAO at web3. Sa susunod na pagkakataon, maaaring makatulong ito sa iyong paghahanap ng trabaho dahil taglay ng wallet mo ang pinaka resume o CV ng iyong mga natapos. Kaya hangga\'t maaari, isang wallet lang ang dapat mong gamitin at hindi iwawala kailanman.',
    notionId: '902f8787d02541a985aa22baf40fb187',
    slug: 'ano-ang-crypto-wallet',
    imageLinks: [
      '/humanDAO/lesson/ano-ang-crypto-wallet/panimula-4becd480.png',
      '/humanDAO/lesson/ano-ang-crypto-wallet/wallet-definition-1998fbd2.png',
      '/humanDAO/lesson/ano-ang-crypto-wallet/recovery-phrase-5bb6e265.png',
      '/humanDAO/lesson/ano-ang-crypto-wallet/public-key-a24d611e.png',
      '/humanDAO/lesson/ano-ang-crypto-wallet/private-key-887e475d.png',
      '/humanDAO/lesson/ano-ang-crypto-wallet/custodial-wallet-5b992b6d.png',
      '/humanDAO/lesson/ano-ang-crypto-wallet/non-custodial-wallet-b41de715.png',
      '/humanDAO/lesson/ano-ang-crypto-wallet/wallet-security-c1a65c65.png',
      '/humanDAO/lesson/ano-ang-crypto-wallet/hot-wallet-286f7703.png',
      '/humanDAO/lesson/ano-ang-crypto-wallet/cold-wallet-c8e511a9.png',
      '/humanDAO/lesson/ano-ang-crypto-wallet/metamask-wallet-56d90c0b.png',
      '/humanDAO/lesson/ano-ang-crypto-wallet/acknowledgment-3b468363.jpg'
    ],
    slides: [
      {
        type: 'LEARN',
        notionId: 'cdea9577b20f4ae2885cc6ab3e8aae56',
        title: 'Panimula',
        content: '<div class="bloc1"><p><strong>Maligayang Pagbati!</strong></p><p>Maligayang pagdating<strong> </strong>sa humanDAO Academy. Natutuwa kaming gabayan ka sa iyong paglalakbay sa <span class="tooltip" definition="Refers to applications that run on the blockchain and allow anyone to participate without monetizing their personal data.">Web3</span>. Pero bago tayo magsimula, kailangan mo ihanda ang isang mahalagang kagamitan: ito ay tinatawag na isang <em>digital wallet</em>.</p><p>Ang digital wallet ay nagsisilbing pasaporte upang tuklasin ang iba\'t ibang parte ng Web3. Mararaming oportunidad ang matatagpuan mo dahil sa mga makabagong ideya nito. Bukod pa rito, maari ka rin magkaroon ng seguridad sa iyong mga pag-aari at pagkakakilanlan sa Web3.</p><p>Sa araling ito, ipapakilala namin sa iyo ang isang digital wallet. Kasama na rin nito ang pagtatalakay kung paano ito gumagana para masimulan mo ang paggamit nito ng ligtas sa iyong paglalakbay sa Web3.</p><p>Tara, magsimula na tayo!</p></div><div class="bloc2"><img src=\'/humanDAO/lesson/ano-ang-crypto-wallet/panimula-4becd480.png\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '4ae9fe042e0f4fcfbe670419b5bcfb92',
        title: 'Wallet Definition',
        content: '<div class="bloc1"><p>Sa mundo ng cryptocurrency, ang wallet ay tumutukoy sa isang aplikasyon o <em>electronic device</em> na maaari mong gamitin sa isang <span class="tooltip" definition="A shared, unchangeable database, or ledger, of recorded transactions.">blockchain</span>.</p><p>Ang iyong <span class="tooltip" definition="A wallet is an application or device used to send and receive crypto assets on the blockchain.">wallet</span> ay maaaring ikumpara sa isang digital na kaha de yero o lalagyan ng iyong pag-aari.</p><p>Kapag konektado ito sa blockchain, magagamit mo ang iyong wallet sa iba’t-ibang paraan: sa pamimili, paglipat ng digital na pag-ari, at pati na rin sa paggamit ng aplikasyon sa iyong device. Marami pang maaring magawa dito ngunit itatalakay ito sa mga susunod na aralin.</p></div><div class="bloc2"><img src=\'/humanDAO/lesson/ano-ang-crypto-wallet/wallet-definition-1998fbd2.png\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: 'cae39d51ddd94c379878264e22413d7c',
        title: 'Pagsusulit',
        quiz: {
          question: 'Sa konteksto ng blockchain, ano ang isang wallet?',
          rightAnswerNumber: 4,
          answers: [
            'Isang device na nilagyan ng RFID technology',
            'Isang velcro bi-fold na kagamitan',
            'Isang account na nagbibigay ng seguridad sa aking pag-aari',
            'Isang aplikasyon o device na maari mong gamitin sa isang blockchain'
          ],
          id: 'ano-ang-crypto-wallet-1'
        }
      },
      {
        type: 'LEARN',
        notionId: 'bf90c361e5464ff48468e94f8426ebbc',
        title: 'Recovery Phrase',
        content: '<div class="bloc1"><p>Pagkatapos mo mag set up ng iyong <span class="tooltip" definition="A wallet is an application or device used to send and receive crypto assets on the blockchain.">wallet</span>, bubuo ang software ng natatangi o walang kaparehong <span class="tooltip" definition="A recovery phrase is a list of 12 to 24 words which is used to generate your wallet\'s public key and private key.">recovery phrase</span> na nakatalaga lamang sa iyong wallet account.</p><p>Tinatawag din itong <em>seed phrase</em> o secret recovery phrase. Tandaan, ang iyong secret recovery phrase ay parang susi na makakabukas sa iyong wallet para magamit mo ang iyong pag-aari. Dapat mo itong protektahan para maging handa sa mga sitwasyon na ito:</p><ul><li>Na-corrupt ang iyong wallet app o nasira ang iyong electronic device.</li><li>Hindi mo ito ma-access dahil sa pagkakawala o ninakaw.</li><li>Gusto mong i-access ang iyong wallet account gamit ang wallet app sa ibang computer o device.</li></ul><p>Kadalasan, ang Recovery Phrase ay isang listahan ng 12 hanggang 24 salita na kumakatawan sa isang natatanging piraso ng datos. Ginagamit ang datos na ito para bumuo ng <span class="tooltip" definition="A public key is your address. It gives others a point of reference to send crypto assets to you.">public key</span> (maa-access ng kahit sinuman) at <span class="tooltip" definition="A private key allows access to your wallet in order for you to send crypto assets to other address.">private key</span> <em>(pribado lamang sa may-ari)</em> para sa iyong wallet.</p></div><div class="bloc2"><img src=\'/humanDAO/lesson/ano-ang-crypto-wallet/recovery-phrase-5bb6e265.png\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '8422be8d3a4b49fe8e4fa41390d8384e',
        title: 'Pagsusulit',
        quiz: {
          question: 'Paano mo magagamit ang iyong Recovery Phrase?',
          rightAnswerNumber: 3,
          answers: [
            '[A] I-access muli ang iyong wallet kung ito ay nawala, nanakaw, o nasira',
            '[B] Gamitin ang iyong wallet sa maraming device',
            '[C] Parehong A at B',
            '[D] Wala sa nabanggit'
          ],
          id: 'ano-ang-crypto-wallet-2'
        }
      },
      {
        type: 'LEARN',
        notionId: '6b8ea7cb00014df99144e91d0932af76',
        title: 'Public Key',
        content: '<div class="bloc1"><p>Natutunan mo na kung paano nauugnay ang <span class="tooltip" definition="A recovery phrase is a list of 12 to 24 words which is used to generate your wallet\'s public key and private key.">recovery phrase</span> sa isang <span class="tooltip" definition="A public key is your address. It gives others a point of reference to send crypto assets to you.">public key</span> at <span class="tooltip" definition="A private key allows access to your wallet in order for you to send crypto assets to other address.">private key</span>.</p><p>Tandaan, ang isang wallet ay maaaring maglaman ng maraming account. Ang bawat account ay may natatanging pares ng public at private key.</p><p>Maari mong ihalintulad ang public key sa address ng iyong tahanan. Ito ay pampubliko, makikita ito ng kahit sino, at tinutukoy ang lokasyong gagamitin upang magpadala ng mga crypto asset sa iyo.</p></div><div class="bloc2"><img src=\'/humanDAO/lesson/ano-ang-crypto-wallet/public-key-a24d611e.png\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '36b50fd544c546d1a69266ca063918ee',
        title: 'Private Key',
        content: '<div class="bloc1"><p>Kung ang iyong <span class="tooltip" definition="A public key is your address. It gives others a point of reference to send crypto assets to you.">public key</span> ay katulad ng iyong address, ang <span class="tooltip" definition="A private key allows access to your wallet in order for you to send crypto assets to other address.">private key</span> naman ay maaaring ihalintulad sa susi ng iyong bahay.</p><p>Tinatawag itong pribado dahil <em>ikaw lang dapat</em> ang may access dito.</p><p>Ginagamit ang private key para ma-access ang wallet at pag-aari mo katulad ng crypto assets. Maaari ka rin magpadala ng iyong assets sa ibang wallet account gamit ang kanilang address.</p></div><div class="bloc2"><img src=\'/humanDAO/lesson/ano-ang-crypto-wallet/private-key-887e475d.png\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '9bc9a0f6b915486783814a2d9078eff6',
        title: 'Pagsusulit',
        quiz: {
          question: 'Ang iyong public key ay maaaring ihalintulad sa _____. Samantala, ang iyong private key naman ay tulad ng _____.',
          rightAnswerNumber: 2,
          answers: [
            'Routing Number / Account Number',
            'Address ng bahay / Susi ng bahay',
            'Address / Zip code',
            'Numero ng Telepono / Social Security Number'
          ],
          id: 'ano-ang-crypto-wallet-3'
        }
      },
      {
        type: 'LEARN',
        notionId: '6b6ee1a16eaa4369852cfd675f7c8e38',
        title: 'Custodial Wallet',
        content: '<div class="bloc1"><p>Dahil <span class="tooltip" definition="A private key allows access to your wallet in order for you to send crypto assets to other address.">private key</span> lamang ang kailangan para buksan ang iyong <span class="tooltip" definition="A wallet is an application or device used to send and receive crypto assets on the blockchain.">wallet</span>, </p><p>Not all wallets let you control your private key. With a <span class="tooltip" definition="With a custodial wallet, another party controls the private keys, thus controlling access to your crypto assets.">custodial wallet</span>, another party controls it. Accounts on Coinbase and Kraken are examples of custodial wallets that hold your private key, dapat siguraduhin mo ito na pribado at ligtas.</p><p>Maaaring ito lang ang kailangan ng ibang tao, pero kinakailangan mong magtiwala sa mga <em>third parties</em> o grupo na ito para mapanatiling ligtas ang iyong <em>crypto assets</em> at bigyan ka ng <em>access</em> kapag gusto mo itong i-<em>trade</em> o i-<em>send</em> sa iba. Dahil dito, limitado lamang ang magagawa mo sa mundo ng <span class="tooltip" definition="An abbreviation for decentralized finance.">DeFi</span> kung saan may iba’t-ibang aplikasyon na pwedeng gamitin.</p></div><div class="bloc2"><img src=\'/humanDAO/lesson/ano-ang-crypto-wallet/custodial-wallet-5b992b6d.png\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: 'd6f99ede2b464356b69173e608d6198e',
        title: 'Pagsusulit',
        quiz: {
          question: 'Ikaw ba ang may kakayahang mag-access sa iyong <em>private key</em> gamit ang <em>custodial wallet</em>?',
          rightAnswerNumber: 2,
          answers: [
            'Oo',
            'Hindi'
          ],
          id: 'ano-ang-crypto-wallet-4'
        }
      },
      {
        type: 'LEARN',
        notionId: '5411bf82f3cd4ac28046ed65ec40db7c',
        title: 'Non-custodial Wallet',
        content: '<div class="bloc1"><p>Isa sa pinaka-magandang paraan para maprotektahan ang iyong <span class="tooltip" definition="A private key allows access to your wallet in order for you to send crypto assets to other address.">private key</span> ay ang <span class="tooltip" definition="With a non-custodial wallet, you have sole control of your private keys, which in turn control your crypto assets.">non-custodial wallet</span>. Nagsisilbi ito bilang pasaporte papunta sa iba’t ibang oportunidad na mahahanap sa <span class="tooltip" definition="An abbreviation for decentralized finance.">DeFi</span> at <span class="tooltip" definition="Refers to applications that run on the blockchain and allow anyone to participate without monetizing their personal data.">Web3</span>.</p><p>Paalala: kung ang iyong <em>private key</em> ay mawala, hindi mo maa-<em>access</em> ang iyong <em>wallet</em> para gamitin, i-<em>withdraw</em>, o i-<em>transfer</em> ang iyong <em>crypto assets</em>.</p><p>Sa kabutihang palad, pwede mo pa rin ma-<em>recover</em> ang iyong <em>wallet</em> gamit ang iyong <span class="tooltip" definition="A recovery phrase is a list of 12 to 24 words which is used to generate your wallet\'s public key and private key.">recovery phrase</span>. Pero kung mawala mo rin ito, hindi na ito maa-<em>access</em> habang-buhay.</p></div><div class="bloc2"><img src=\'/humanDAO/lesson/ano-ang-crypto-wallet/non-custodial-wallet-b41de715.png\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: 'd5f109fa05c942a7ab255eb859a74fde',
        title: 'Pagsusulit',
        quiz: {
          question: 'Responsable ka ba para sa iyong <em>private key</em> sa <em>non-custodial wallet</em>?',
          rightAnswerNumber: 1,
          answers: [
            'Oo',
            'Hindi'
          ],
          id: 'ano-ang-crypto-wallet-5'
        }
      },
      {
        type: 'LEARN',
        notionId: 'c765ab1693f5437594593602bdcfef1b',
        title: 'Wallet Security',
        content: '<div class="bloc1"><h2>UGALIING gawin ito para maprotektahan ang iyong <em>recovery phrase</em>:</h2><p>✅ isulat mo ito<br>✅ gumamit ng matibay na materyal sa iyong sinulat<br>✅ itago ito sa ligtas na lugar</p><h2>HUWAG mo itong gawin para maprotektahan ang iyong <em>recovery phrase</em>:</h2><p>🛑 i-<em>save</em> ang iyong <em>recovery phrase</em> sa isang <em>online drive </em><br>🛑 i-<em>screenshot</em> ang iyong <em>private key</em><br>🛑 ilahad ang iyong <em>recovery key</em> sa kahit na kanino</p></div><div class="bloc2"><img src=\'/humanDAO/lesson/ano-ang-crypto-wallet/wallet-security-c1a65c65.png\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '5fd0190bcd114eb6b3767ebed3c379bd',
        title: 'Pagsusulit',
        quiz: {
          question: 'Ano ang pinakaligtas na paraan para maprotektahan ang iyong <em>recovery phrase</em>?',
          rightAnswerNumber: 4,
          answers: [
            'I-save ito sa iyong computer at i-print.',
            'Kumuha ng screenshot at i-save ito sa iyong phone.',
            'I-save ito sa iyong Dropbox account.',
            'Isulat ito sa matibay na materyal at itago sa ligtas na lugar.'
          ],
          id: 'ano-ang-crypto-wallet-6'
        }
      },
      {
        type: 'LEARN',
        notionId: '5646c6862a9a4a83a83bcd4716aaeb14',
        title: 'Hot Wallet',
        content: '<div class="bloc1"><p>Mayroong dalawang uri ng <span class="tooltip" definition="With a non-custodial wallet, you have sole control of your private keys, which in turn control your crypto assets.">non-custodial wallets</span>: ito ang software wallets (tinatawag din na <span class="tooltip" definition="A type of non-custodial wallet that is perpetually connected to the internet.">hot wallets</span>) at hardware wallets (tinatawag din na <span class="tooltip" definition="A type of non-custodial wallet that is stored offline and does not require a perpetual internet connection.">cold wallets</span>)</p><p>Ang <em>software wallet</em> ay isang <em>app</em> o <em>browser extension</em> na palaging naka-<em>connect</em> sa <em>internet</em>.</p><ul><li>KALAMANGAN 👍: Kadalasan, ito ay libre, mabilis i-set up, at madaling gamitin.</li><li>KAHINAAN 👎: Dahil ito ay isang <em>software</em> na naka-<em>connect</em> sa <em>internet</em>, ito ay maaaring maging <em>target</em> ng mga <em>hackers</em>.</li></ul></div><div class="bloc2"><img src=\'/humanDAO/lesson/ano-ang-crypto-wallet/hot-wallet-286f7703.png\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '88240c407d0b46158740ee85ac68f067',
        title: 'Cold Wallet',
        content: '<div class="bloc1"><p>Ang <span class="tooltip" definition="A type of non-custodial wallet that is stored offline and does not require a perpetual internet connection.">cold wallet</span>, o <em>hardware wallet</em>, ay naka-connect lamang sa <em>internet</em> kapag ito ay sinaksak sa isang computer o <em>device</em>.</p><ul><li>KALAMANGAN 👍: Ito ay mas ligtas laban sa mga banta tulad ng <em>hacking</em>.</li><li>KAHINAAN 👎: Ito ay hindi libre, hindi akma para sa mga saglitang<em> </em>transaksyon, at maaaring mahirap gamitin sa una.</li></ul></div><div class="bloc2"><img src=\'/humanDAO/lesson/ano-ang-crypto-wallet/cold-wallet-c8e511a9.png\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '0a0f643ab8be4fdfaa05067e8f264fa6',
        title: 'Pagsusulit',
        quiz: {
          question: 'Mas ligtas ba gamitin ang <em>cold wallet</em> kaysa sa <em>hot wallet?</em>',
          rightAnswerNumber: 1,
          answers: [
            'Oo',
            'Hindi'
          ],
          id: 'ano-ang-crypto-wallet-7'
        }
      },
      {
        type: 'LEARN',
        notionId: '2ee32befa6c4456cab81ce4858fd2438',
        title: 'MetaMask Wallet',
        content: '<div class="bloc1"><p>Maraming non-custodial <span class="tooltip" definition="A type of non-custodial wallet that is perpetually connected to the internet.">hot wallets</span> na pwedeng gamitin ngayon. Titignan natin ang sikat na <em>MetaMask Wallet</em> para sa natitirang bahagi ng aralin dahil:</p><ul><li>Ito ay maaroing gamitin sa karamihan ng aplikasyon sa DeFi.</li><li>Ito ay mayroong <em>browser extension</em> para sa <em>Chrome</em>, <em>Brave</em>, <em>Edge</em>, at <em>Firefox internet browsers</em>.</li><li>Ang <em>mobile app</em> ay maaaring i-download ng mga <em>Android</em> at <em>iOS users.</em></li></ul><p>Siguraduhin na i-download ang iyong <em>wallet</em> galing sa <em>MetaMask</em> <a href=\'https://metamask.io/\'>DITO</a>.</p></div><div class="bloc2"><img src=\'/humanDAO/lesson/ano-ang-crypto-wallet/metamask-wallet-56d90c0b.png\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '4537c20204584dec91baf8589a2bbfb7',
        title: 'Pagsusulit',
        quiz: {
          question: 'Ang <em>MetaMask</em> ba ay isang <em>custodial wallet</em>?',
          rightAnswerNumber: 2,
          answers: [
            'Oo',
            'Hindi'
          ],
          id: 'ano-ang-crypto-wallet-8'
        }
      },
      {
        type: 'LEARN',
        notionId: '65826b5c475e4c6bb6aca4365ca80fe2',
        title: 'Alamin kung paano makuha ang SBT',
        content: '<div class="bloc1"><p>Ang Soulbound Tokens (SBTs) ay nagsisilbing “completion badge” sa bawat module na matatapos ng isang user. Ito rin ay maaaring i-distribute sa mga Pocket Assistant at scholar sa humanDAO gamit ang Polygon Network. </p><p>Panoorin natin ang video na ito para masundan kung paano i-add ang Polygon network at makita ang mga tokens.</p></div><div class="bloc2"><iframe allowfullscreen src=\'https://www.youtube.com/embed/eRKzP5q8F9Y?feature=oembed&rel=0\'></iframe></div>'
      },
      {
        type: 'LEARN',
        notionId: '40148d6945244b04b7db8da47f9a952f',
        title: 'Acknowledgment',
        content: '<div class="bloc1"><p>Ang modyul na ito ay hatid ng <a href=\'https://app.banklessacademy.com\'>Bankless Academy</a></p></div><div class="bloc2"><img src=\'/humanDAO/lesson/ano-ang-crypto-wallet/acknowledgment-3b468363.jpg\'></div>'
      },
      {
        type: 'END',
        title: 'End of lesson'
      }
    ]
  },
  {
    kudosImageLink: '/humanDAO/lesson/pagkilala-sa-humandao/kudos-a608c528.png',
    lessonImageLink: '/humanDAO/lesson/pagkilala-sa-humandao/lesson-29ea4ca9.png',
    socialImageLink: '/humanDAO/lesson/pagkilala-sa-humandao/social-4b41d78a.jpg',
    learningActions: '',
    marketingDescription: 'Maikling pagtalakay sa layunin ng humanDAO: Ang pag-angat ng buhay gamit ang cryptocurrency',
    kudosId: null,
    duration: 10,
    learnings: '',
    difficulty: undefined,
    description: 'Maikling pagtalakay sa layunin ng humanDAO: Ang pag-angat ng buhay gamit ang cryptocurrency',
    name: 'Pagkilala sa humanDAO',
    moduleId: '7f16572f0ce84cda82ae6c15e4f1e7bf',
    quest: 'humanDAOPagkilalaSaHumanDAO',
    publicationStatus: 'publish',
    isFeaturedOnHomepage: true,
    isCommentsEnabled: true,
    endOfLessonRedirect: null,
    endOfLessonText: 'MAHALAGANG PAALALA: Makakatanggap ka ng non-transferrable NFT badge at trophy sa kada lesson na matatapos mo sa humanDAO Academy. Magsisilbi ang mga NFT na ito bilang patunay ng iyong kaalaman at karunungan sa humanDAO at web3. Sa susunod na pagkakataon, maaaring makatulong ito sa iyong paghahanap ng trabaho dahil taglay ng wallet mo ang pinaka resume o CV ng iyong mga natapos. Kaya hangga\'t maaari, isang wallet lang ang dapat mong gamitin at hindi iwawala kailanman.',
    notionId: 'f4fda04b920a498196a94584029baefe',
    slug: 'pagkilala-sa-humandao',
    imageLinks: [
      '/humanDAO/lesson/pagkilala-sa-humandao/ano-ang-humandao-ce056b65.png',
      '/humanDAO/lesson/pagkilala-sa-humandao/paano-ito-nagsimula-6bac95c1.png',
      '/humanDAO/lesson/pagkilala-sa-humandao/paano-gumagana-ang-play-to-earn-p2e-17c130b7.png',
      '/humanDAO/lesson/pagkilala-sa-humandao/paano-gumagana-ang-learn-to-earn-l2e-b8b5d896.png',
      '/humanDAO/lesson/pagkilala-sa-humandao/mga-tungkulin-sa-humandao-para-sa-scholarships-573f3b24.png',
      '/humanDAO/lesson/pagkilala-sa-humandao/mga-tungkulin-sa-humandao-para-sa-builder-at-moderators-e0eb89a8.png',
      '/humanDAO/lesson/pagkilala-sa-humandao/paano-maging-mahusay-sa-iyong-tungkulin-sa-humandao-1b077b68.png',
      '/humanDAO/lesson/pagkilala-sa-humandao/para-sa-mga-baguhan-sa-discord-ito-ang-paraan-para-makagsimula-sa-hdao-12-41057185.png',
      '/humanDAO/lesson/pagkilala-sa-humandao/para-sa-mga-baguhan-sa-discord-ito-ang-paraan-para-makagsimula-sa-hdao-22-594ea13f.png',
      '/humanDAO/lesson/pagkilala-sa-humandao/paano-hahanapin-ang-ibat-ibang-channel-ng-humandao-discord-3b22c6ad.png',
      '/humanDAO/lesson/pagkilala-sa-humandao/aling-discord-channels-na-makakatulong-sa-mga-gustong-maging-scholar-d3e357ba.png',
      '/humanDAO/lesson/pagkilala-sa-humandao/aling-discord-channels-ang-makakakatulong-sa-mga-gustong-maging-builder-f3e690f3.png',
      '/humanDAO/lesson/pagkilala-sa-humandao/paano-mag-participate-sa-mga-programa-ng-humandao-6167a5fb.png',
      '/humanDAO/lesson/pagkilala-sa-humandao/paano-mag-participate-sa-mga-programa-ng-humandao-b1be5e0c.png',
      '/humanDAO/lesson/pagkilala-sa-humandao/mga-kasalukuyang-oportunidad-sa-humandao-dc0e0846.png',
      '/humanDAO/lesson/pagkilala-sa-humandao/mga-hinaharap-na-oportunidad-sa-humandao--8da39f54.png'
    ],
    slides: [
      {
        type: 'LEARN',
        notionId: 'a8fdfc26f5ae45a298e24933d49f2cd5',
        title: 'Ano ang humanDAO?',
        content: '<div class="bloc1"><p>Ang <em>humanDAO</em> ay isang <em>decentralized autonomous organization</em> (<em>DAO</em>) na may hangaring makatulong na mapabuti ang buhay ng mga tao sa pamamagitan ng <em>crypto assets</em>, <em>non-fungible tokens</em> (<em>NFTs</em>), at <em>Web3 technology</em> para magbigay ng bagong oportunidad sa mga nasa laylayan at walang sapat na access.</p><p>Ang apat na haligi ng DAO ay ginagamit upang makamit ito:</p><ul><li><strong>Wages (Pagpapasuweldo) </strong>- iba’t-ibang trabaho sa play-to-earn scholarship at jobs board.</li><li><strong>Education (Edukasyon)</strong> - kasama ang mga module ng pag-aaral sa cryptocurrency at web3.</li><li><strong>Feed (Pagpapakain)</strong> - tulad ng mga meal programs at partnerships</li><li><strong>Funds (Pagpopondo)</strong> - ito ang paraan ng pagpopondo sa mga panukalang proyekto.</li></ul><p><em>Manatiling updated sa humanDAO dahil maraming programa ang pina-plano ng DAO tulad ng libreng pag-aaral at potensyal na kumita. Kaya panatilihing naka-on ang mga alerto para sa mga anunsyo sa Discord.</em></p></div><div class="bloc2"><img src=\'/humanDAO/lesson/pagkilala-sa-humandao/ano-ang-humandao-ce056b65.png\'></div>'
      },
      {
        type: 'LEARN',
        notionId: 'a2876896bb8e422b93555593dbbdecf9',
        title: 'Paano ito nagsimula?',
        content: '<div class="bloc1"><p>Si Christopher Chase ang nagtatag ng humanDAO. Nagsimula ang organisasyong ito bilang isang paraan para makasama nya ang kanyang mga anak sa paglalaro ng mga makabagong <em>crypto games</em>. Sila ay naglalaro noong mapagtanto niyang ito ay maaaring magamit upang mapalawak ang gamit sa <em>cryptocurrency</em>, hindi lamang sa mga <em>gamers</em> at mayayamang bansa.</p><p>Kaya itinatag nya ang humanDAO noong katapusan ng Setyembre taong 2021, ini-launch ito sa sumunod na buwan at nakapag-mint ng token ($HDAO) noong simula ng Disyembre.</p><p>Para sa karagdagang impormasyon tungkol sa DAO, puntahan ang module na “What is a DAO” na mahahanap sa “Crypto 101”.</p></div><div class="bloc2"><img src=\'/humanDAO/lesson/pagkilala-sa-humandao/paano-ito-nagsimula-6bac95c1.png\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: 'f378b1f977d9412c84bbec994e9879a8',
        title: 'Pagsusulit',
        quiz: {
          question: 'Ano ang apat na haligi ng humanDAO?',
          rightAnswerNumber: 1,
          answers: [
            'Wages, education, meals, funds',
            'P2E, Auditing, Blockchain',
            'Education, NFT’s, private communities'
          ],
          id: 'pagkilala-sa-humandao-1'
        }
      },
      {
        type: 'LEARN',
        notionId: '8adfa628094c4d5bbdbc13deef01f1ea',
        title: 'Paano gumagana ang play-to-earn (P2E)?',
        content: '<div class="bloc1"><p>Ang <strong>Play-to-Earn </strong>ay isang bagong inobasyon sa larangan ng <em>gaming</em>.</p><p>Binibigyan nito ng pagkakataon ang mga manlalaro na kumita ng pera sa blockchain-based na mga laro.</p><p>Ang mga manlalaro ay kumikita at nakakagawa din ng halaga para sa mga <em>game developers</em> and para din sa mga ibang manlalaro.</p><p>Isa sa mga unang sumikat ang Axie Infinity. Kasama na rito ang Alien Worlds, Star Atlas, Monster Clan atbp.</p></div><div class="bloc2"><img src=\'/humanDAO/lesson/pagkilala-sa-humandao/paano-gumagana-ang-play-to-earn-p2e-17c130b7.png\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '8af1e27a736248c4b709bbb536c62077',
        title: 'Paano gumagana ang learn-to-earn (L2E)?',
        content: '<div class="bloc1"><p>Ang <strong>Learn-to-Earn (L2E) </strong>ay isang katangi-tanging <em>use-case </em>o gamit<em> </em>ng blockchain technology.</p><p>Sa ilalim ng L2E, ang mga gumagamit nito ay maaaring kumita ng <em>crypto assets </em>sa pamamagitan ng pag kumpleto ng mga gawaing nakatuon sa pag-aaral ng bagong konsepto. Ang mga gawain ay maaaring kasing simple ng panonood ng mga video at pagsagot ng mga tanong o pag kumpleto ng mga <em>on-chain tasks</em> para matuto ng mga bagong <em>skills </em>patungo sa pagkakaroon ng trabaho sa <em>web3</em>.</p><p>Ang mga proyekto ay maaaring gamitin ang L2E para maturuan ang mga <em>users </em>tungkol sa kanilang produkto, ito ay maaari din maging isang simpleng paraan na hikayatin ang mga estudyante na matuto ng bagong <em>skill </em>habang nabibigyan ng <em>reward</em><strong>.</strong></p></div><div class="bloc2"><img src=\'/humanDAO/lesson/pagkilala-sa-humandao/paano-gumagana-ang-learn-to-earn-l2e-b8b5d896.png\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '7115c5b4af7e4682a88627388a02558a',
        title: 'Pagsusulit',
        quiz: {
          question: 'Ano ang ibig sabihin ng P2E & L2E?',
          rightAnswerNumber: 2,
          answers: [
            'Pay-To-Educate & Live-To-Earn',
            'Play-To-Earn & Learn-To-Earn',
            'Picture-To-Earn & Lesson-To-Educate'
          ],
          id: 'pagkilala-sa-humandao-2'
        }
      },
      {
        type: 'LEARN',
        notionId: 'b7f98f5dfd674663858e45cd2ffb9d5a',
        title: 'Mga tungkulin sa humanDAO para sa scholarships',
        content: '<div class="bloc1"><p>Kailangan mag-submit ng <strong>applicant</strong> ng <em>requirements </em>at uma-attend ng mga friendly battles (para sa mga first-time players) na pinapagawa ng mga <strong>axie trainers</strong>. Pagkatapos nito, ang <strong>moderator</strong> bilang tagapangasiwa ay ang kakausap sa applicant at tutulong sa pag-onboard para papiliin ang applicant ng <em>axie meta teams o </em>bumuo ng kanilang sariling team mula sa <em>treasury. </em></p><p>Magiging <strong>scholar</strong> ang applicant kapag sila ay nai-announce na sa mga <em>social media channels</em> (Discord/Facebook). Sa ngayon, 80% ang share ng scholar sa SLP and AXS. Dito papasok ang <strong>scholar monitor</strong> na sumusubaybay sa kanilang <em>performance at attendance</em><strong><em><em>.</em></em></strong> Ito ay mahalaga para mapanatiling maayos ang DAO at bigyan ng mas maraming<em> rewards </em>ang mga nakakamit ng mataas na ranggo sa <em>leaderboards o </em>may maayos na record sa kanilang <em>attendance. </em></p><p>Magkakaroon din ng mga <em>scholarship programs </em>sa ibang P2E games at potensyal na trabaho sa web3.</p></div><div class="bloc2"><img src=\'/humanDAO/lesson/pagkilala-sa-humandao/mga-tungkulin-sa-humandao-para-sa-scholarships-573f3b24.png\'></div>'
      },
      {
        type: 'LEARN',
        notionId: 'f31a115f9f214f55b0674c3e57817e7c',
        title: 'Mga tungkulin sa humanDAO para sa Builder at Moderators',
        content: '<div class="bloc1"><p>Mayroong dalawang klase ng builder: isang <em>bounty hunter</em> at committed na builder. Ang <strong>bounty hunter </strong>ay maaaring pumili ng mga partikular na gawain sa kanilang sariling bilis habang ang <strong>committed builder</strong> ay maihahalintulad sa full-time na trabaho kung saan ang trabaho ay nakapokus sa <em>long-term projects</em> na makakatulong sa DAO na lumago ng malaki.</p><p>Sa pangaraw-araw na operasyon, naroroon ang mga moderator upang matiyak na natutugunan ang mga rules ng komunidad sa Discord server, dahil dito nangyayari ang karamihan ng paguusap ng mga scholars and builders. Dahil dito, ang moderators at admins ay may nakakataas na mga permissions sa <em>server</em>. Sigisugrado ng mga <strong>moderator </strong>na ang mga tanong at mga concern ay natutugunan at sa kabilang bahagi, ang mga <strong>admin</strong> ay ang nagsasagawa ng mga pangunahing pagbabago at updates sa mga <em>channels</em>.</p></div><div class="bloc2"><img src=\'/humanDAO/lesson/pagkilala-sa-humandao/mga-tungkulin-sa-humandao-para-sa-builder-at-moderators-e0eb89a8.png\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: 'af226e7d77c740818b8ed9dce19b5784',
        title: 'Pagsusulit',
        quiz: {
          question: 'Ano ang tatlong kasalukuyang roles sa humanDAO?',
          rightAnswerNumber: 1,
          answers: [
            'Builder, Scholar & Moderator',
            'Team Leader, Content creator, Scholar',
            'Educator, Play-To-Earner, Builder'
          ],
          id: 'pagkilala-sa-humandao-3'
        }
      },
      {
        type: 'LEARN',
        notionId: '026a26d567b048019a2e5520a0bfee9c',
        title: 'Paano maging mahusay sa iyong tungkulin sa humanDAO?',
        content: '<div class="bloc1"><p>Bilang isang <strong>moderator</strong>, <strong>admin</strong>, or <strong>axie trainer</strong>,</p><ul><li>Maging handa na tulungan ang mga <em>applicants</em></li><li>Asikasuhin ang komunidad</li><li>Sumunod sa mga <em>rules </em>at maging mabuting ehemplo</li><li>Panatilihin ang <em>boundaries sa mga kapwa miyembro</em></li></ul><p> bilang isang <strong>scholar</strong> or <strong>scholar monitor,</strong> </p><ul><li>Dumalo sa mga itinakdang <em>schedules</em> sa tamang oras</li><li>Track scholar performance on a daily basis</li><li>Lumapit sa mga <em>moderator </em>sa pamamagitan ng help desk para sa iyong mga tanong</li><li>Maging pamagkumbaba magturo at maturuan</li></ul><p>Bilang isang <strong>builder</strong>,</p><ul><li>Magkusa sa mga gawain</li><li>Palaging ilista ang iyong mga kontribusyon</li><li>Kumunekta sa mga <em>functional leads</em></li><li>Magbigay sa mga kapwa contributor ng patas</li></ul></div><div class="bloc2"><img src=\'/humanDAO/lesson/pagkilala-sa-humandao/paano-maging-mahusay-sa-iyong-tungkulin-sa-humandao-1b077b68.png\'></div>'
      },
      {
        type: 'LEARN',
        notionId: 'ac351f8dc5b6478fa4724dc74301c5df',
        title: 'Para sa mga baguhan sa Discord, ito ang paraan para makagsimula sa hDAO (1/2)',
        content: '<div class="bloc1"><p><strong>Step 1: Installation</strong></p><ul><li>Para sa mga mobile users, i-download ang app sa Android o IOS</li><li>Para sa mga desktop users, patakbuhin ito sa web-browser or o mag download ng desktop client para magamit ang mga advanced features katulad game overlays. </li></ul><p><strong>Step 2: Gumawa ng Discord Account</strong></p><ul><li>Ang unang gagawin pagka bukas ng Discord app ay ang pumili ng <em>username </em>para sa’yo. Maaari kang pumili ng iyong pangalan - totoo man o ang iyong palayaw. </li><li>Ang discord ay kusang maglalagay ng <em>random </em>na apat na numero na kadugtong ng iyong <em>username</em>.</li><li>Kakailanganin mong i-<em>link </em>ang iyong <em>email </em>at <em>password </em>sa iyong <em>username</em>.</li></ul></div><div class="bloc2"><img src=\'/humanDAO/lesson/pagkilala-sa-humandao/para-sa-mga-baguhan-sa-discord-ito-ang-paraan-para-makagsimula-sa-hdao-12-41057185.png\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '7c8e0ded5d0a4810bf2ac5051d4030ac',
        title: 'Para sa mga baguhan sa Discord, ito ang paraan para makagsimula sa hDAO (2/2)',
        content: '<div class="bloc1"><p><strong>Step 3: Sumali sa isang server</strong></p><ul><li>Ang pangunahing <em>forum </em>sa Discord ay ang mga <em>servers, </em>na maaaring ituring bilang mga maliliit na komunidad na may kanilang sariling mga <em>rules and regulations</em>. </li><li>May dalawang uri ng servers: <strong>Public and Private.</strong></li><li>Sa isang public server, maaari kang sumali kaagad. Samantala, sa isang private server, kakailanganin mo ng isang imbitasyon.</li><li>May mga server para sa iyong mga paboritong laro, banda o klase ng musika, <em>political ideology</em>, o para sa lang sa pagbahagian ng mga <em>meme</em>. Kahit saan ka man interesado, palaging may server para dyan.</li><li>Subukang bisitahin ang <a href=\'https://discord.gg/humandao\'>https://discord.gg/humandao</a> para makasali sa ating server!</li></ul></div><div class="bloc2"><img src=\'/humanDAO/lesson/pagkilala-sa-humandao/para-sa-mga-baguhan-sa-discord-ito-ang-paraan-para-makagsimula-sa-hdao-22-594ea13f.png\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '321b8f9998f44efc83fc37d870731db4',
        title: 'Paano hahanapin ang iba’t-ibang channel ng humanDAO Discord?',
        content: '<div class="bloc1"><p>Ito ang mga mahalagang channel para sa iyong panimula</p><ul><li><strong>About us</strong> - Inilalarawan ang misyon at pananaw ng humanDAO</li><li><strong>Rules </strong>- Ang mga tuntunin na dapat sundin ng lahat ng miyembro</li><li><strong>Official links </strong>- Kasama dito ang <em>official website, token contracts, liquidity pools, </em>at <em>social media channels</em></li><li><strong>FAQs </strong>- Nandito ang <em>Community Onboarding Guide </em>at mga detalye tungkol sa mga <em>role </em>at <em>scholarship</em></li><li><strong>Get-Scholarship</strong> - Nagbibigay ng <em>step-by-step </em>na proseso para sa pagiging isang <em>applicant </em>at isang <em>scholar</em></li><li><strong>Help-desk </strong>- Dito mo maaaring ilahad ang iyong mga katanungan sa mga <em>moderator </em>tungkol sa mga teknikal na bagay at sa proseso ng paga-apply. </li><li><strong>Report-Scam</strong> - Para sa pag report ng <em>fraud</em>, <em>scam</em>, <em>spam</em>, at iba pang violations ng mga <em>rules</em></li><li><strong>Rewards-programs </strong>- Isang lugar kung saan makikita ng mga <em>contributor </em>ang listahan ng mga <em>short </em>at <em>long term projects </em>na maaaring pagtrabahuhan. </li></ul></div><div class="bloc2"><img src=\'/humanDAO/lesson/pagkilala-sa-humandao/paano-hahanapin-ang-ibat-ibang-channel-ng-humandao-discord-3b22c6ad.png\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '08cc94e2153a4164bb31022ca5ec6157',
        title: 'Aling Discord channels na makakatulong sa mga gustong maging scholar?',
        content: '<div class="bloc1"><ul><li><strong>P2E-Chat</strong> - Pwede kang makipag-usap tungkol sa mga <em>play-to-earn games </em>at scholarships, o makipagkilala sa mga bagong kaibigan na mga <em>scholars, newbies, </em>at iba ding <em>applicant </em>sa server.</li><li><strong>Applicant-Chat</strong> - Pagkatapos mong mag apply para sa <em>scholarship</em>, magkakaroon ka ng <em>access </em>sa pag <em>send ng messages </em>sa mga katulad mong <em>applicant </em>at maaari mong matignan ang mga <em>update </em>sa iyong role.</li><li><strong>Meta-Teams - </strong>Sa channel na ito, makikita mo ang mga <em>available meta teams </em>na ipinapahiram ng humanDAO sa mga scholar na kagaya mo kapag ikaw ay natanggap na. </li><li><strong>Resources</strong> - Kung bago ka sa Axie Infinity, ito ang pinakamainam na paraan para masimulan mong matutunan kung paano laruin ito, ang mga <em>axie class, buffs at debuffs, </em>at iba pang diskarte sa laro.</li></ul></div><div class="bloc2"><img src=\'/humanDAO/lesson/pagkilala-sa-humandao/aling-discord-channels-na-makakatulong-sa-mga-gustong-maging-scholar-d3e357ba.png\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '52d19e10a9d24a59b65a64bdb84bb72a',
        title: 'Aling Discord channels ang makakakatulong sa mga gustong maging builder?',
        content: '<div class="bloc1"><ul><li><strong>Builder-Interest</strong> - Kung nais mong maging isang <em>contributor, core team member, advisor, o investor, </em>ibahagi mo ang iyong mga <em>skill at interest </em>sa channel na ito.</li><li><strong>Build-Gen-Chat </strong>- Kapag ikaw ay binigyang ng <em>builder role, </em>siguraduhing bisitahin ang <em>channel </em>na ito upang maging <em>updated </em>sa mga latest projects na pinagta-trabahuhan ng DAO.</li><li><strong>Build-Content </strong>-<strong> </strong>Ang mga<strong> </strong><em>writer at social media strategists </em>ay maaaring magtulong-tulong sa paggawa ng <em>content </em>na <em>ipa-publish </em>sa <em>Medium </em>o sa ibang <em>social media channels. </em>Sa kabilang banda, mayroon ding mga <em>graphic designers, content creators, at mga UI/UX designers </em>na nagta-trabaho sa mga <em>asset </em>katulad ng <em>website interface, pubmats, at illustrations. </em></li><li><strong>Build-Dev</strong> - Dito nagtutulungan ang mga <em>front-end </em>at <em>back-end developers</em> na nagta-trabaho para sa <em>website </em>at <em>applications</em>. Maaari silang magtrabaho sa <em>web2 </em>and <em>web3 </em>na bahagi ng project.</li></ul></div><div class="bloc2"><img src=\'/humanDAO/lesson/pagkilala-sa-humandao/aling-discord-channels-ang-makakakatulong-sa-mga-gustong-maging-builder-f3e690f3.png\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '86cf0d09faa6483a976a13adf023e5e9',
        title: 'Paano mag-participate sa mga programa ng<strong> humanDAO?</strong>',
        content: '<div class="bloc1"><p><strong>Bumili ng $HDAO governance token</strong> </p><p>Isa sa mga kinakailangang hakbang upang maging isang miyembro ng $HDAO community ay ang bumili ng token.</p><p>Kapag ikaw ay nagmamay-ari ng token, maaari kang mag <em>participate </em>sa <em>staking programs</em> at kumita. Maaari ka ding bumoto sa mga <em>proposals </em>na maaaring humubog sa kinabukasan ng komunidad.</p><p><strong>I-stake ang iyong $HDAO tokens</strong></p><p>Nabanggit sa itaas na maaari mong <em>i-stake </em>ang iyong mga tokens, at sa humanDAO, maaari kang mag-<em>stake </em>sa <em>Etherum </em>at sa <em>Polygon chain </em>para sa mataas na <em>APY% returns</em>. Ito ay magbibigay sa mga miyembro ng komunidad ng mas magandang pagkakataon na i-<em>optimize </em>ang kanilang pakikilahok at lumaki ang kita sa pamamagitan ng mas mahabang <em>lockup periods. </em></p></div><div class="bloc2"><img src=\'/humanDAO/lesson/pagkilala-sa-humandao/paano-mag-participate-sa-mga-programa-ng-humandao-6167a5fb.png\'></div>'
      },
      {
        type: 'LEARN',
        notionId: 'b567b78eeecc44069dbef96cf0de3c27',
        title: 'Paano mag-participate sa mga programa ng<strong> humanDAO?</strong>',
        content: '<div class="bloc1"><p><strong>Mag-</strong>p<strong>articipate sa forum</strong></p><p>Ang forum ay kung saan maaaring magsumite ang mga tao ng mga <em>proposal </em>at magtalakay ng mga <em>strategy</em>, <em>points for improvement</em>, at iba pang uri ng paguusap. Ang proseso ng <em>governance </em>ay may tatlong hakbang:</p><ol><li><strong>Sanity Check</strong>: proposal na may 2 na araw ng paguusap</li><li><strong>Draft Proposal:</strong> proposal ay natanggap, tinaggihan, o nangangailangan ng pagbabago at may 70% <em>builder approval</em></li><li><strong>Active Proposal:</strong> proposal ay inihain sa <em>Snapshot </em>at mayroong <em>for </em>and <em>against </em>options na pagpipiliin at 60% <em>quorum</em></li></ol><p><strong>Vote in Snapshot</strong></p><p>Ang isang<em> live snapshot proposal</em> ay hinahayaan ang mga miyembro ng komunidad na may <em>$HDAO tokens</em> na bumoto ng hindi kinakailangang gumastos ng tokens. Ang mga boto sa <em>Snapshot </em>ay nakatimbang ayon sa dami ng humanDAO tokens na naka-<em>delegate </em>o <em>stake </em>sa kanilang <em>address</em>.</p></div><div class="bloc2"><img src=\'/humanDAO/lesson/pagkilala-sa-humandao/paano-mag-participate-sa-mga-programa-ng-humandao-b1be5e0c.png\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '7618cbc351494b87ab5b54f4421910fb',
        title: 'Pagsusulit',
        quiz: {
          question: 'Ano ang mga benepisyo ng paghawak sa $HDAO token?',
          rightAnswerNumber: 3,
          answers: [
            'Maaari mong ipadala at matanggap ito sa iyong web3 wallet',
            'Ito ay nagbibigay sa iyo ng access sa mga privte discord channels ',
            'Maari mo itong i-stake para makatanggap ng mas malaking APY% rewards at makaboto sa mga governance proposals'
          ],
          id: 'pagkilala-sa-humandao-4'
        }
      },
      {
        type: 'LEARN',
        notionId: '54de919ab5a2444aad8f225be5d460c7',
        title: 'Mga kasalukuyang oportunidad sa humanDAO',
        content: '<div class="bloc1"><p>Nais ng humanDAO maging sentro ng web3 recruitment at bagong oportunidad sa buong mundo. Dahil nagsimula ang DAO sa pagbibigay ng mga P2E scholarships sa mahigit 1000 katao, ito ang nagsilbing matibay na pundasyon ng komunidad. Ngayon, binibigyang-daan ng DAO ang mga serbisyo gamit ng NFT para mas maging <em>flexible </em>sa kanilang <em>approach</em> sa web3 recruitment at pagsali ng mga miyembro na wala pang sapat na kaalaman sa web3 at crypto.</p><p>Kasabay nito, sa paglabas ng humanDAO Academy, ang hDAO ay nagta-trabaho patungo sa pagiging isang <em>industry-leading platform </em>na magbibigay ng <em>reward </em>sa mga gumagamit nito ng <em>on-chain credentials.</em></p><p>Maaari mong tignan ang mga channels/links na ito sa aming Discord sserver: </p><ul><li>Mag-apply para sa p2e scholarship (<a href=\'https://discord.gg/fzVQYWAQ\'>#get-scholarship</a>)</li><li>Mag-apply bilang Pocket Assistant (<a href=\'https://pa.humandao.org\'>https://pa.humandao.org</a>)</li><li>Maging isang builder (<a href=\'https://discord.gg/A3rJQ7AR\'>#builder-interest</a>)</li></ul></div><div class="bloc2"><img src=\'/humanDAO/lesson/pagkilala-sa-humandao/mga-kasalukuyang-oportunidad-sa-humandao-dc0e0846.png\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '972dfd71249242f59fb18d3a0945ee2a',
        title: 'Mga hinaharap na oportunidad sa humanDAO ',
        content: '<div class="bloc1"><p>Ang academy platform, DAO at Web3 na mga oportunidad sa humanDAO ay nakikitaan ng malaking paglago sa mga paparating na taon. Nakita natin na marami ang <em>participants </em>sa mga proyekto at naglalayong mapabuti ang buhay ng mga naghihirap. </p><p>Ang mga oportunidad ng web3 sa kinabukasan sa humanDAO ay manggagaling mula sa isang proyektong pinamagatang <em>“Metaverse Talent Network” (MTN)</em>. Gagamitin ng hDAO ang mga koneksyon nito sa industriya, <em>education platform </em>at malalim na kaalaman ng <em>web3 space </em>para maka-hikayat, makapagturo, at mailagay ang mga miyembro ng komunidad ng hDAO sa mga posisyon sa <em>web3 space</em>. Ang industriya ng web3 ay nangangailanganan sa mga posisyon na katulad ng <em>community support roles.</em></p><p>Upang mapanatiling updated sa mga nangyayari, siguraduhing tignan ang <em>announcement channel </em>para sa mga oportunidad sa trabaho tulad ng <em>support role.</em></p></div><div class="bloc2"><img src=\'/humanDAO/lesson/pagkilala-sa-humandao/mga-hinaharap-na-oportunidad-sa-humandao--8da39f54.png\'></div>'
      },
      {
        type: 'END',
        title: 'End of lesson'
      }
    ]
  },
  {
    kudosImageLink: '/humanDAO/lesson/community-support-role/kudos-922d7695.png',
    lessonImageLink: '/humanDAO/lesson/community-support-role/lesson-b8d480d5.png',
    socialImageLink: '/humanDAO/lesson/community-support-role/social-b1c1cada.png',
    learningActions: '',
    marketingDescription: 'Panimula sa tungkulin ng Community Support sa web3',
    kudosId: null,
    duration: 10,
    learnings: '',
    difficulty: undefined,
    description: 'Panimula sa tungkulin ng Community Support sa web3',
    name: 'Community Support Role',
    moduleId: '36835560ea344efea39d206b16821f53',
    quest: 'humanDAOCommunitySupportRole',
    publicationStatus: 'publish',
    isFeaturedOnHomepage: false,
    isCommentsEnabled: true,
    endOfLessonRedirect: null,
    endOfLessonText: 'MAHALAGANG PAALALA: Makakatanggap ka ng non-transferrable NFT badge at trophy sa kada lesson na matatapos mo sa humanDAO Academy. Magsisilbi ang mga NFT na ito bilang patunay ng iyong kaalaman at karunungan sa humanDAO at web3. Sa susunod na pagkakataon, maaaring makatulong ito sa iyong paghahanap ng trabaho dahil taglay ng wallet mo ang pinaka resume o CV ng iyong mga natapos. Kaya hangga\'t maaari, isang wallet lang ang dapat mong gamitin at hindi iwawala kailanman.',
    notionId: 'b230f725fd8643f4a1074d8773c95e0c',
    slug: 'community-support-role',
    imageLinks: [
      '/humanDAO/lesson/community-support-role/tungkol-saan-ang-web3-249cae66.png',
      '/humanDAO/lesson/community-support-role/paano-nga-ba-ito-konektado-sa-tungkulin-ko-sa-komunidad-ng-support-team-31e4f3ed.png',
      '/humanDAO/lesson/community-support-role/ano-ba-ang-mga-pangunahing-responsibilidad-ng-isang-community-support-role-bd49904a.png',
      '/humanDAO/lesson/community-support-role/sa-anong-paraan-magandang-ipakilala-ang-sarili-bilang-miyembro-ng-organisasyon-a30051b7.png'
    ],
    slides: [
      {
        type: 'LEARN',
        notionId: '9581cc8d066b41839b75194a1b2ac133',
        title: 'Tungkol saan ang web3?',
        content: '<div class="bloc1"><p>Ayon kay Mason Nystrom, ang Web3 ay isang “shift” sa kulutra ng internet, kung saan ang mga datos ay pinamamahalaan at kontrolado ng komunidad sa halip ng korporayon at mga spesyal na interes.</p><p>Binibigyan nito ng halaga ang mga produkto at serbisyo pabalik sa mga tao dahil sila ang tunay na may ari ng mga datos, ari-arian at mga nilalaman nito. Ang mga teknolohiya na ginagamit ay tinatawag na “blockchain”, kung saan kahit sino makakakita nito basta may permisyo gumamit ng internet.</p><p>Sanggunian: <a href=\'https://twitter.com/masonnystrom/status/1359139789820334082\'>https://twitter.com/masonnystrom/status/1359139789820334082</a> </p></div><div class="bloc2"><img src=\'/humanDAO/lesson/community-support-role/tungkol-saan-ang-web3-249cae66.png\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '44093dfa4ffe4e7fb73a08fa8da95b0a',
        title: '<strong>Paano nga ba ito konektado sa tungkulin ko sa komunidad ng support team?</strong>',
        content: '<div class="bloc1"><p>When these concepts are learned, questions and concerns raised by community can be accommodated by the Community Support team to keep them informed and engaged.</p><p>Sa pag unawa ng kapaligiran na pinag tratrabahuan, nauunawaan mo ang klase ng komunidad na iyong makakasama, kasama na dito ang mga taga ibang bansa, ibang kultura at mga iba’t-ibang gawi.</p><p>Dahil makabagong teknolohiya rin ang ginagamit sa web3, may tungkulin ang nabibilang sa Community Support na maging pamilyar sa mga pangunahing konsepto ng blockchain at ang likas na katangian ng isang organisasyon.</p><p>Kapag napag-aralan ang mga konsepto ng web3 ng may lalim, mas madaling matutugunan ng isang Community Support specialist ang mga tanong at hinaing ng mga miyembro ng organisasyon. Patuloy din nitong mauudyok ang komunidad para manatiling may alam at may motibasyon na sumali sa iba’t-ibang programa.</p></div><div class="bloc2"><img src=\'/humanDAO/lesson/community-support-role/paano-nga-ba-ito-konektado-sa-tungkulin-ko-sa-komunidad-ng-support-team-31e4f3ed.png\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '0a748f2fae204ae5b472207962420947',
        title: 'Ano ba ang mga pangunahing responsibilidad ng isang Community Support Role?',
        content: '<div class="bloc1"><ul><li>Makihalubilo at mapanaliti na ligtas na kapaligiran ito para sa lahat ng miyembro.</li><li>Sagutin ang mga katanungan at mga problem na ibinahagi sa social media channels.</li><li>Magbigay ng mga nakatalang mga puna, updates at iba pa.</li><li>Tulungan ang kapwa sa pamamahala ng mga social media channels.</li></ul></div><div class="bloc2"><img src=\'/humanDAO/lesson/community-support-role/ano-ba-ang-mga-pangunahing-responsibilidad-ng-isang-community-support-role-bd49904a.png\'></div>'
      },
      {
        type: 'LEARN',
        notionId: 'b3c9352fec0d43e68aa9a32b40ba7d26',
        title: 'Sa anong paraan magandang ipakilala ang sarili bilang miyembro ng organisasyon?',
        content: '<div class="bloc1"><ol><li><strong>Makisama sa mga miyembro</strong>. Alamin sino ang nangangailangan ng tulong at ibigay o idirekta tamang impormasyon</li><li><strong>Maging mabuti at matutong rumespeto. </strong>Tandaan na ang iyong pakikipag-ugnayan ay sumasalamin sa pagkakilanlan ng isang organisasyon.</li><li><strong>Gumamit ng tamang gramatiko at pagbabantas. </strong>Ang iyong pakikipag-usap ay mas klaro kapag kompleto ang paggamit ng pangungusap. Mas mabuting suriin muna ang iyong mensahe bago ito i-send sa ibang tao.</li><li><strong>Maging sensitibo sa iba’t-ibang kultura. </strong>Pinakamainam na malaman kung paano makakaapekto ang iba\'t ibang paraan ng pagpapahayag ng mensahe sa iba pang nasyonalidad.</li><li><strong>Sundin ang mga patakaran. </strong>Bigyan natin ng pantay na pagtrato ang lahat ng miyembro ng komunidad anuman ang kanilang posisyon.</li><li><strong>Ipaalam ang problema sa team lead.</strong> Huwag lutasin ang lahat ng mga problema ng mag-isa. Kumonsulta sa isang team lead para sa karagdagang kumpirmasyon.</li></ol></div><div class="bloc2"><img src=\'/humanDAO/lesson/community-support-role/sa-anong-paraan-magandang-ipakilala-ang-sarili-bilang-miyembro-ng-organisasyon-a30051b7.png\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: 'aa0b41cc90f74f058c5de04b1a095a70',
        title: 'Pagsusulit',
        quiz: {
          question: 'Bakit may pagbabago sa kultura ng internet ang Web3?',
          rightAnswerNumber: 2,
          answers: [
            'Dahil mas madaming kumpanya ang gumagamit ng internet ngayon.',
            'Ang Blockchain ay ginagamit sa pamamahala ng komunidad at indibidwal na pagmamay-ari',
            'Makabagong henerasyong ang humuhugis sa kultura ng internet'
          ],
          id: 'community-support-role-1'
        }
      },
      {
        type: 'QUIZ',
        notionId: '87d32d24dee14d54ac933e92b738da0d',
        title: 'Pagsusulit',
        quiz: {
          question: 'Ano ang bago sa Community Support Role kumpara sa mga tradisyonal na tungkulin?',
          rightAnswerNumber: 4,
          answers: [
            'Pwede kang magtrabaho at makipag usap sa kapwa tao sa iba’t ibang parte ng mundo habang nasa sariling tahana',
            'Nagiging pamilyar ka sa mga importanteng at makabagong konsenpto ng web3',
            'Nauunawaan mo ang layunin ng organisasyon, kung saan ito ay pinamamahalaan ng isang decentralized na komunidad',
            'Lahat ng nabanggit'
          ],
          id: 'community-support-role-2'
        }
      },
      {
        type: 'QUIZ',
        notionId: 'df8a1668bc614ae29043c90049e75858',
        title: 'Pagsusulit',
        quiz: {
          question: 'Alin mga aksyon ang hindi makakatulong sa layunin ng isang community support sa organisasyon?',
          rightAnswerNumber: 3,
          answers: [
            'Maging sensitibo sa iba’t-ibang kultura',
            'Makisama sa mga miyembro',
            'Matutong lutasin ang mga problema ng mag-isa',
            'Gawing malinaw at simple ang mensahe na ipaparating sa komunidad'
          ],
          id: 'community-support-role-3'
        }
      },
      {
        type: 'END',
        title: 'End of lesson'
      }
    ]
  },
  {
    kudosImageLink: '/humanDAO/lesson/mga-hakbang-sa-community-resolution/kudos-922d7695.png',
    lessonImageLink: '/humanDAO/lesson/mga-hakbang-sa-community-resolution/lesson-4cd153a5.png',
    socialImageLink: '/humanDAO/lesson/mga-hakbang-sa-community-resolution/social-f53b34c5.png',
    learningActions: '',
    marketingDescription: 'Alamin ang iba’t-ibang paraan ng community resolution',
    kudosId: null,
    duration: 15,
    learnings: '',
    difficulty: undefined,
    description: 'Alamin ang iba’t-ibang paraan ng community resolution',
    name: 'Mga hakbang sa Community Resolution',
    moduleId: '36835560ea344efea39d206b16821f53',
    quest: 'humanDAOMgaHakbangSaCommunityResolution',
    publicationStatus: 'publish',
    isFeaturedOnHomepage: false,
    isCommentsEnabled: true,
    endOfLessonRedirect: null,
    endOfLessonText: 'MAHALAGANG PAALALA: Makakatanggap ka ng non-transferrable NFT badge at trophy sa kada lesson na matatapos mo sa humanDAO Academy. Magsisilbi ang mga NFT na ito bilang patunay ng iyong kaalaman at karunungan sa humanDAO at web3. Sa susunod na pagkakataon, maaaring makatulong ito sa iyong paghahanap ng trabaho dahil taglay ng wallet mo ang pinaka resume o CV ng iyong mga natapos. Kaya hangga\'t maaari, isang wallet lang ang dapat mong gamitin at hindi iwawala kailanman.',
    notionId: '5c30f3971bed4d389589f22820b7237c',
    slug: 'mga-hakbang-sa-community-resolution',
    imageLinks: [
      '/humanDAO/lesson/mga-hakbang-sa-community-resolution/unang-hakbang-tukuyin-ang-uri-ng-issue-8c12fe87.png',
      '/humanDAO/lesson/mga-hakbang-sa-community-resolution/ikalawang-hakbang-tiyakin-na-totoo-ang-impormasyon-8445db08.png',
      '/humanDAO/lesson/mga-hakbang-sa-community-resolution/ikatlong-hakbang-harapin-ang-isyu-4af30bfc.png',
      '/humanDAO/lesson/mga-hakbang-sa-community-resolution/ikaapat-na-hakbang-magpasalamat-bago-tapusin-ang-usapan-1befe06c.png',
      '/humanDAO/lesson/mga-hakbang-sa-community-resolution/ikalimang-hakabang-maghanda-ng-ulat-2771ae83.png'
    ],
    slides: [
      {
        type: 'LEARN',
        notionId: 'ec9159f1798547d0af94417ca18a4351',
        title: 'Limang hakbang patungo sa Community Resolution',
        content: '<div class="bloc1"><p>Bakit nga ba natin kailangan lutasin sa mga problem sa komunidad?</p><p>Ang paglutas ng problema ay isang mahalagang kasanayan na kailangang taglayin ng bawat organisasyon kapag namamahala sa isang komunidad. Sa mundo ng online communities, madalas mahirapan ang isang tao sa pag-navigate sa iba\'t ibang lugar gaya ng mga website, application, produkto, at proseso ng komunidad.</p><p>Ngayon, mas magandang maglaan ng oras para mag-accommodate ng mga miyembro ng komunidad dahil marami ang bagong konsepto na nabubuo sa blockchain. Ang pagkakaroon ng Community Support role ay maaaring maging tulay para mas maunawan ng mga sumasali sa komunidad ang mga konseptong ito at ayusin ang mga proseso para magkaroon ng positibong relasyon sa tao.</p><p>Para isakatapuran ito, kami ng ilang alituntunin na may <strong>5 hakbang sa community resolution*</strong></p><p>*Kung ang isang miyembro ay may tanong na wala sa kontrol ng organisasyon, kinakailangang linawin na wala sa iyong kapasidad na lutasin ang problemang iyon, ngunit susubukan mo ang iyong makakaya upang iparamdam sa kanila na naiintindihan sila.</p></div>'
      },
      {
        type: 'LEARN',
        notionId: 'ad37d000f3ff43d38024b86e6c35682f',
        title: 'Unang hakbang: Tukuyin ang uri ng issue',
        content: '<div class="bloc1"><p>Maaari mong ipakilala muna ang iyong sarili, at ipaalam sa kanila na narito ka para tumulong.</p><p>Pagkatapos, maaari kang magtanong tungkol sa paksa ng kanilang isyu at anumang impormasyon na sa tingin nila ay kumplikadong maunawaan. Ito ang oras upang mangalap ng impormasyon tulad ng pangalan ng tao, email address, username, mga screenshot, at kategorya ng isyu. </p><p>Ilan sa mga halimbawa nito ang pamamaraan ng pag kategorya:</p><ul><li><strong>Klase ng isyu: </strong>Reports for Scams, Spams, and Bug</li><li><strong>Request: </strong>Collaboration, Feature Request, and Service Request</li><li><strong><strong><strong><strong><strong><strong><strong><strong><strong><strong><strong><strong><strong><strong>Departamento: </strong></strong></strong></strong></strong></strong></strong></strong></strong></strong></strong></strong></strong></strong>Design, Development, Governance</li></ul></div><div class="bloc2"><img src=\'/humanDAO/lesson/mga-hakbang-sa-community-resolution/unang-hakbang-tukuyin-ang-uri-ng-issue-8c12fe87.png\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '0b3e63408be94baab10a250a28e5e310',
        title: '<strong><strong>Ikalawang hakbang: Tiyakin na totoo ang impormasyon</strong></strong>',
        content: '<div class="bloc1"><p>Pagkatapos mangolekta ng datos, mahalagang tiyakin na ang data ay tumpak at totoo. Karamihan sa mga komunidad ay gumagamit ng isang platform o karagdagang mga tool upang suriin ang pagkakakilanlan ng isang tao.</p><p>Ilan sa mga ito ay ang</p><ul><li><strong>Community Database</strong> - para alamin ang karagdagang impormasyon sa tao</li><li><strong>Member List</strong> - para maberipika ang role o departamento na kinabibilangan</li><li><strong>Search Bar</strong> - para maghanap ng partikular na keyword</li><li><strong>Audit Logs</strong> - para i-trace ang pinanggalingan ng isyu</li></ul></div><div class="bloc2"><img src=\'/humanDAO/lesson/mga-hakbang-sa-community-resolution/ikalawang-hakbang-tiyakin-na-totoo-ang-impormasyon-8445db08.png\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '9b08fa45b726488da75857498918bf2b',
        title: 'Ikatlong hakbang: Harapin ang isyu',
        content: '<div class="bloc1"><p>Kapag natuklasan mo na ang dahilan nito, oras na para gamitin ang mga online resources na ginagamit sa isang organisasyon para lutasin ang problema.</p><p>Kung hindi pa rin ito nauunawaan, maaaring gawin ang mga hakbang na ito:</p><ol><li>Klaruhin ang konteksto</li><li>Gumamit ng positibong salita</li><li>Maging totoo sa resulta o impormasyon na ipapakita</li></ol></div><div class="bloc2"><img src=\'/humanDAO/lesson/mga-hakbang-sa-community-resolution/ikatlong-hakbang-harapin-ang-isyu-4af30bfc.png\'></div>'
      },
      {
        type: 'LEARN',
        notionId: 'cf8df84d1c0e43669cdea624fe398e15',
        title: 'Ikaapat na hakbang: Magpasalamat bago tapusin ang usapan',
        content: '<div class="bloc1"><p>Dapat magkaroon ng beripikasyon kung nakatulong ang pakikipag usap natin sa isang miyembro. Pwede mong sabihin, <strong>“Maraming salamat po sa inyong oras. Kung mayroon pa akong maitutulong sa inyo, nandito lang po ako</strong>.”</p><p>Kung ang isyu ay hindi pa nalutas, maaaring tumagal ng ilang oras upang makahanap ng bagong solusyon. Sa kasong ito, maaari mong sabihin ang na, <strong>\'Pasensya na po. Kailangan ko lang i-escalate ang isyung ito sa aming team lead para mas matugunan ang isyu na ito.\'</strong></p><p>Tiyakin natin na magalang at may positibong impresyon sa kanila ang iyong pakikipag-usap. Maaari mo ring payagan ang mga miyembro na i-rate ang transaksyon upang mabigyan kayo ng feedback.</p></div><div class="bloc2"><img src=\'/humanDAO/lesson/mga-hakbang-sa-community-resolution/ikaapat-na-hakbang-magpasalamat-bago-tapusin-ang-usapan-1befe06c.png\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '1f242ec76ea74b88821a708ee56afe3c',
        title: 'Ikalimang hakabang: Maghanda ng ulat',
        content: '<div class="bloc1"><p>Ang pagtatala ng mga ticket o pag-uusap sa organisasyon ay mahalaga. Ito ay magagamit mo upang mas mapabilis ang paglutas ng isyu kung sakaling umulit ito. Maaari kang mag authorize ng ticketing bot o mga help desk system sa iyong server para isagawa ito.</p><p>Kinakailangan na maghanda ng isang ulat at ilista ang mga partikular na punto ng problema kung galing ito sa iba’t-ibang miyembro ng komunidad. Mayroon ding mga tool na makakatulong sa iyong bumuo ng mga ulat sa reports tulad ng number of tickets closed per day, average response time, at satisfaction rate.</p></div><div class="bloc2"><img src=\'/humanDAO/lesson/mga-hakbang-sa-community-resolution/ikalimang-hakabang-maghanda-ng-ulat-2771ae83.png\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '0f1b3eea296d46ea8ab10e5489d85a18',
        title: 'Pagsusulit',
        quiz: {
          question: 'Saan magandang mag beripika ng mga nakaraang aktibidad sa server?',
          rightAnswerNumber: 1,
          answers: [
            'Audit logs',
            'Archive',
            'Community Database',
            'Member List'
          ],
          id: 'mga-hakbang-sa-community-resolution-1'
        }
      },
      {
        type: 'QUIZ',
        notionId: 'be1ada826a3c4a40b1acda7cfa3ce33e',
        title: 'Pagsusulit',
        quiz: {
          question: 'Tama o mali: Hindi kailangan ng feedback sa mga tinugunang isyu',
          rightAnswerNumber: 2,
          answers: [
            'Tama',
            'Mali'
          ],
          id: 'mga-hakbang-sa-community-resolution-2'
        }
      },
      {
        type: 'QUIZ',
        notionId: '2fd73cee42d9427f9f569dc35cdeea7e',
        title: 'Pagsusulit',
        quiz: {
          question: 'Bakit kailangan gumawa ng talaan ng mga tinugunang isyu',
          rightAnswerNumber: 4,
          answers: [
            'Para mas mapabilis ang paglulutas ng problema',
            'Para mabigyan ng mas wastong impormasyon ang organisasyon sa susunod na problema',
            'Para ma-automate ang pagresolba sa umuulit na isyu',
            'Lahat ng mga nabanggit'
          ],
          id: 'mga-hakbang-sa-community-resolution-3'
        }
      },
      {
        type: 'END',
        title: 'End of lesson'
      }
    ]
  },
  {
    kudosImageLink: '/humanDAO/lesson/online-tools-para-sa-moderation-at-collaboration/kudos-922d7695.png',
    lessonImageLink: '/humanDAO/lesson/online-tools-para-sa-moderation-at-collaboration/lesson-a831d0e1.png',
    socialImageLink: '/humanDAO/lesson/online-tools-para-sa-moderation-at-collaboration/social-72eaa996.png',
    learningActions: '',
    marketingDescription: 'Pagtalakay ng napapanahong online tools',
    kudosId: null,
    duration: 20,
    learnings: '',
    difficulty: undefined,
    description: 'Pagtalakay ng napapanahong online tools',
    name: 'Online Tools para sa Moderation at Collaboration',
    moduleId: '36835560ea344efea39d206b16821f53',
    quest: 'humanDAOOnlineToolsParaSaModerationAtCollaboration',
    publicationStatus: 'publish',
    isFeaturedOnHomepage: false,
    isCommentsEnabled: true,
    endOfLessonRedirect: null,
    endOfLessonText: 'MAHALAGANG PAALALA: Makakatanggap ka ng non-transferrable NFT badge at trophy sa kada lesson na matatapos mo sa humanDAO Academy. Magsisilbi ang mga NFT na ito bilang patunay ng iyong kaalaman at karunungan sa humanDAO at web3. Sa susunod na pagkakataon, maaaring makatulong ito sa iyong paghahanap ng trabaho dahil taglay ng wallet mo ang pinaka resume o CV ng iyong mga natapos. Kaya hangga\'t maaari, isang wallet lang ang dapat mong gamitin at hindi iwawala kailanman.',
    notionId: '487d45837a7148a8a5e346c5aa392b5f',
    slug: 'online-tools-para-sa-moderation-at-collaboration',
    imageLinks: [
      '/humanDAO/lesson/online-tools-para-sa-moderation-at-collaboration/anong-klaseng-plataporma-ang-maaaring-gamitin-para-sa-community-support-707773bf.png',
      '/humanDAO/lesson/online-tools-para-sa-moderation-at-collaboration/ano-ang-mga-kadalasang-nagagamit-na-features-sa-discord-b263cd98.png',
      '/humanDAO/lesson/online-tools-para-sa-moderation-at-collaboration/discord-server-settings-0539cca1.png',
      '/humanDAO/lesson/online-tools-para-sa-moderation-at-collaboration/discord-server-settings-7c203951.png',
      '/humanDAO/lesson/online-tools-para-sa-moderation-at-collaboration/discord-server-integrations-e7178362.png'
    ],
    slides: [
      {
        type: 'LEARN',
        notionId: '896bc35484774c818d75bbb4773b62dc',
        title: 'Anong klaseng plataporma ang maaaring gamitin para sa Community Support?',
        content: '<div class="bloc1"><p>Maraming mga komunidad sa web3 ang may itinalagang virtual na lugar para makipag-usap, magbahagi ng mga ideya, at magtrabaho sa mga proyekto. Ang Discord ay isa sa mga kilalang plataporma.</p><p>Iba\'t ibang paraan ng komunikasyon ang maaaring gawin sa Discord, kabilang na rito ang mga text channel, voice channel, at stage channel, kung saan ito ay itinatampok sa isang server. Para gawing maayos ang mga sistema ng bawat komunidad, ang mga admin at moderator ay gumagamit ng bot at iba pang teknolohiya para panatiliin ang kanilang server.</p><p>Ang iba pang mga social media platform tulad ng Twitter, Facebook, Instagram, at Reddit ay kadalasang ginagamit para sa mga anunsyo, paligsahan, at papremyo.</p></div><div class="bloc2"><img src=\'/humanDAO/lesson/online-tools-para-sa-moderation-at-collaboration/anong-klaseng-plataporma-ang-maaaring-gamitin-para-sa-community-support-707773bf.png\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '00ca672c2ee242df9eb75d2440ac7d98',
        title: 'Ano ang mga kadalasang nagagamit na features sa Discord?',
        content: '<div class="bloc1"><p><strong>Application commands</strong></p><p>Nagbibigay-daan ang mga text channel sa mga user na gumamit ng mga command ng application mula sa mga bot gamit ang slash na simbolo <strong>( / )</strong> kasama ang pangalan ng command.</p><p><strong>Pin messages</strong></p><p>Magandang kasanayan ang pag-pin ng mga mensahe gamit ang dropdown na menu sa iba pang mga channel. Makakatulong ito sa iyong i-redirect ang mga miyembro sa mahahalagang mensahe sa halip na ulitin ang mga ito.</p><p><strong>Markdown text</strong></p><p>May mga pagkakataon na gusto mong i-highlight ang ilang text sa isang mensahe. Ang paggamit ng markdown formatting system ay tutulong sa iyo sa paggawa ng mga anunsyo na kapansin-pansin.</p></div><div class="bloc2"><img src=\'/humanDAO/lesson/online-tools-para-sa-moderation-at-collaboration/ano-ang-mga-kadalasang-nagagamit-na-features-sa-discord-b263cd98.png\'></div>'
      },
      {
        type: 'LEARN',
        notionId: 'ebf31eb79bf44b68a6bd6b214a75292b',
        title: 'Discord: Server settings',
        content: '<div class="bloc1"><p>Bilang bahagi ng Community Support team, mayroon kang access sa ilang partikular na setting sa server ng Discord.</p><p>Ang mga seksyon sa ibaba ay magbibigay sa iyo ng ideya kung anong data ang maaaring baguhin at kung paano i-customize ang mga pahintulot:</p><ul><li><strong>Overview</strong> - pangalan ng server, banner, at background ng imbitasyon. Kasama rin ang channel ng mga mensahe ng system</li><li><strong>Roles</strong> - paglikha ng mga pangalan ng tungkulin, mga default na pahintulot, at hierarchy ng mga tungkulin. Ang tungkulin na may pinakamataas na pahintulot ay nasa itaas ng listahan, at maaari itong i-drag pataas o pababa upang baguhin ang hierarchy.</li><li><strong>Integrations </strong>- Naka-configure ang bot/app na mga command at permissions sa setting na ito. Dito rin maaaring i-set up ang listahan ng mga fina-follow na channel.</li></ul></div><div class="bloc2"><img src=\'/humanDAO/lesson/online-tools-para-sa-moderation-at-collaboration/discord-server-settings-0539cca1.png\'></div>'
      },
      {
        type: 'LEARN',
        notionId: 'e29a4c54eb4942908fc33f2161e7e25f',
        title: 'Discord: Server settings',
        content: '<div class="bloc1"><ul><li><strong>Rules Screening </strong>- Kailangan lamang i-enable ang community setting para maglagay ng panuntunan at regulasyon na makikita ng bagong miyembro na sasali sa server.</li><li><strong>Safety Setup</strong> - kasama ang mga antas ng pag-verify para sa mga miyembrong sasali sa isang server</li> <ul><li>None - Walang restrictions</li><li>Low - verified email</li><li>Medium - Naka-register ng 5 minuto.</li><li>High - Member ng server sa loob ng 10 minuto</li><li>Highest - Verified ang email at phone number</li></ul> <li><strong>Audit Log</strong> - dito ang mga server actions pag-filter ayon sa member at <em>type of action</em>.</li><li><strong>Members</strong> - ipinapakita ang kabuuang bilang ng mga miyembro, na maaaring i-filter ayon sa <em>role</em>. </li><li><strong>Invites </strong>- dito makikita ang bawat bilang <em>invites</em> ng miyembro. Limitado ang maaaring gamitin na invite link, kaya mainam na magbawas kapag dumami ang nag-invite sa server.</li><li><strong>Bans</strong> - Ang mga miyembro na <em>banned</em> ay naka base sa kanilang IP address at account. </li></ul></div><div class="bloc2"><img src=\'/humanDAO/lesson/online-tools-para-sa-moderation-at-collaboration/discord-server-settings-7c203951.png\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: 'd482c2a5f88f4c1684dfba7e4cabfb22',
        title: 'Pagsusulit',
        quiz: {
          question: 'Sa mga text channel, anong character ang ini-input mo para ma-access ang isang partikular na command?',
          rightAnswerNumber: 4,
          answers: [
            '!',
            '#',
            '-',
            '/'
          ],
          id: 'online-tools-para-sa-moderation-at-collaboration-1'
        }
      },
      {
        type: 'QUIZ',
        notionId: '85016fc4e3bb4c938b3116aa6720eee2',
        title: 'Pagsusulit',
        quiz: {
          question: 'Aling bahagi ng <em>server settings</em> ang nagpapahintulot sa iyo na magbigay ng mga partikular na permissions sa iba\'t ibang indibidwal?',
          rightAnswerNumber: 1,
          answers: [
            'Permissions',
            'Special Permissions',
            'Roles',
            'Members'
          ],
          id: 'online-tools-para-sa-moderation-at-collaboration-2'
        }
      },
      {
        type: 'QUIZ',
        notionId: 'dbba6eaba74d4fffb2b4ce88a3f25dce',
        title: 'Pagsusulit',
        quiz: {
          question: 'Saan mo mahahanap ang mga aksyon na ginawa sa server?',
          rightAnswerNumber: 3,
          answers: [
            'Server Logs',
            'System Logs',
            'Audit Logs',
            'Data Logs'
          ],
          id: 'online-tools-para-sa-moderation-at-collaboration-3'
        }
      },
      {
        type: 'LEARN',
        notionId: 'bdfe15188149428c9359dafd63ba86fa',
        title: 'Discord: Server integrations',
        content: '<div class="bloc1"><p><strong>Ano ang mga Discord bots?</strong></p><p>Tinuturing silang integrations sa loob ng server para i-automate ang mga prosesong ito (at iba pang mga hindi nabanggit):</p><ul><li>Moderation</li><li>Verification </li><li>Productivity</li><li>Management</li><li>Entertainment</li></ul><p>Para malaman kung paano gamitin ang iba’t-ibang bots sa Discord, mainam na simulang pumunta sa website ng kumpanya o developer na gumawa ng bot. Pagkatapos nito ay maaari nilang basahin ang documentation na ang nilalaman ay komprehensibong gabay sa command lists, dashboard configurations, at ang operational status nito.</p></div><div class="bloc2"><img src=\'/humanDAO/lesson/online-tools-para-sa-moderation-at-collaboration/discord-server-integrations-e7178362.png\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '6e07f1138540455a9f7c7ba2b09cdb43',
        title: 'Anong Discords bots ang maaaring gamitin? (1/5)',
        content: '<div class="bloc1"><p>Importateng makahanap ng angkop na bot sa pagpapanatili ng maayos na operasyon at komunidad.</p><p>Narito ang ilan sa mga bot na maaari mong i-consider:</p><p><strong>Moderation Bots:</strong> MEE6, Carl-bot, YAGPDB, Arcane</p><p><strong>Paano ito makakatulong sa iyong komunidad</strong></p><ol><li>Ang pagbati sa mga bagong sali gamit ng welcome card at custom messaging</li><li>Ang pakikipag-ugnayan base sa parehong interes gamit ng reaction roles, commands, atbp.</li><li>Ang pag-stream ng online event at pag-upload nito sa server gamit ng social connectors</li><li>Ang pagkamit ng bagong ranggo gamit ng XP at levelling system </li></ol><p><strong>Paano ito makakatulong sa Community Support team</strong></p><ol><li>Ang mga bot ay maaaring palitan ng pangalan upang umangkop sa branding ng komunidad</li><li>Nangangailangan lang ang auto-moderation na i-set up nang isang beses. Maaaring i-configure rin ito upang gumana sa ilang channel na exclusive lamang sa mga may priority.</li><li>Ang paggamit ng buwanang subscription ay magbibigay ng dagdag sa features para mas mapadali ang proseso ng pag-manage ng gated channels</li></ol></div>'
      },
      {
        type: 'LEARN',
        notionId: 'c93bc62a56c7498f89f8453732f8f8fd',
        title: 'Anong Discords bots ang maaaring gamitin? (2/5)',
        content: '<div class="bloc1"><p>Dahil karamihan ng mga NFT projects ay nangangailangan ng Discord server sa pag-manage ng komunidad, mahalagang maging handa sa pag</p><p>Narito ang ilan sa mga bot na maaari mong i-consider para sa sitwasyong ito:</p><p><strong>Verification Bots:</strong> Collab.Land, Vulcan Bot</p><p><strong>Paano ito makakatulong sa iyong komunidad</strong></p><ol><li>Sa Vulcan Bot, maaaring i-verify ng mga miyembro ang kanilang pagmamay-ari ng NFT nang hindi pumipirma ng transaksyon gamit ang kanilang wallet</li><li>Sa Collab.Land, maaaring i-verify ng mga miyembro ang kanilang pagmamay-ari ng NFT sa pamamagitan ng paglalagay ng custom na link sa kanilang wallet</li><li>Maa-access ng mga na-verify na miyembro ang mga eksklusibong channel sa Discord para makakita ng mga anunsyo, magbigay ng mga feedback, at kumonekta sa mga tao</li></ol><p><strong>Paano ito makakatulong sa Community Support team</strong></p><ol><li>Ang pagtatalaga ng tungkulin sa mga na-verify na may-ari ng NFT ay maaaring i-automate ng bot</li><li>Ang mga potensyal na masamang aktor na hindi pumasa sa pag-verify ay awtomatikong aalisin sa server</li></ol></div>'
      },
      {
        type: 'LEARN',
        notionId: '2849999006004671961fd4dd99a31443',
        title: 'Anong Discords bots ang maaaring gamitin? (3/5)',
        content: '<div class="bloc1"><p>Ang pag-set up ng Discord server ay mahirap na trabaho. Ang pag-post ng mga update mula sa maraming mga channel sa social media ay mas nakakaubos ng oras kapag ginawa nang manu-mano. Ang paggamit ng mga bot na maaaring isama ang iyong tech stack ay makakatulong sa iyo at sa iyong mga miyembro ng komunidad na mag-navigate sa platform nang madali at panatilihing positibo ang pakikipag-ugnayan. Narito ang ilan sa mga bot na maaari mong i-consider para sa sitwasyong ito:</p><p><strong>Productivity Bots:</strong> Boto, Sesh, Statbot, Autocode</p><p><strong>Paano ito makakatulong sa iyong komunidad</strong></p><ol><li>Sa Boto, madaling maabisuhan ang mga miyembro ng mga update tungkol sa proyekto ng NFT mula sa maraming channel sa social media sa pamamagitan ng pagpapagana ng mga notification na partikular sa channel sa Discord</li><li>Sa Sesh, pinasimpleng karanasan sa paglikha ng kaganapan para sa mga miyembrong naninirahan sa iba\'t ibang timezone</li><li>Sa Statbot, makikita ng mga miyembro ang isang pangkalahatang-ideya kung gaano kalaki ang impluwensya ng isang organisasyon o artist</li></ol><p><strong>Paano ito makakatulong sa Community Support team</strong></p><ol><li>Sa Boto, ang mga update para sa NFT mints at mga benta, whale wallet, at mga listahan ay maaaring mai-post sa Discord, Slack, at Telegram nang walang pagsulat ng anumang code</li><li>Sa Sesh, magiging madaling makuha ang listahan ng mga dadalo at isama ang mga iskedyul ng kaganapan sa Google calendar</li><li>Sa Autocode, ang mga bot ay maaaring mabuo na may kaunting kaalaman sa Javascript upang mag-set up ng anumang mga custom na command o pagsasama sa ibang mga platform</li></ol></div>'
      },
      {
        type: 'LEARN',
        notionId: '29998363d6994d1da5e6b478040c24e7',
        title: 'Anong Discords bots ang maaaring gamitin? (4/5)',
        content: '<div class="bloc1"><p>Isa sa mga pamantayan ng maayos na Community Support team ay ang pagsagot ng mga tanong ng komunidad sa tamang oras. Mas mararamdaman ng mga miyembro ang suporta ng isang organisasyon kapag sila ay mabilis tumugon sa chat o handang magbigay ng impormasyon gamit ang automated responses.</p><p>INarito ang ilan sa mga bot na maaari mong i-consider para sa sitwasyong ito:</p><p><strong>Support Bots</strong><strong>:</strong> TicketTool, Helper.gg </p><p><strong>Paano ito makakatulong sa iyong komunidad</strong></p><ol><li>Maaaring pumili ng kategorya kapag magbubukas ng ticket</li><li>Pribado at ligtas ang pag-uusap kapag may concern. Maaari rin kumuha ng kopya ng ticket.</li><li>Maaaring gumamit ng keywords sa Discord commands para makuha ang hinahanap na impormasyon</li></ol><p><strong>Paano ito makakatulong sa Community Support team</strong></p><ol><li>Pwedeng mag-customize ng ticket gamit ang panel colors, names, and description para gawin organisado ang iba’t ibang kategorya ng ticket.</li><li>Nalilimit ang tickets sa role na meron ang isang user.</li><li>Mas madaling makita ang paksa ng isang ticket dahil sa pangalan na pwede i-set dito.</li></ol></div>'
      },
      {
        type: 'LEARN',
        notionId: '33f3c4d03aab4c72a094d9cf3b614180',
        title: 'Anong Discords bots ang maaaring gamitin? (5/5)',
        content: '<div class="bloc1"><p>Ang pag-set up ng Discord server ay mahirap na trabaho. Ang pag-post ng mga update mula sa maraming channel sa social media ay mas nakakaubos ng oras kapag ginawa nang manu-mano. Ang paggamit ng mga bot na maaaring isama ang iyong tech stack ay makakatulong sa iyo at sa iyong mga komunidad na mag-navigate sa platform nang madali at panatilihing positibo ang pakikipag-ugnayan. Narito ang ilan sa mga bot na maaari mong simulan-alang para sa sitwasyong:</p><p><strong>Productivity Bots:</strong> Boto, Sesh, Statbot, Autocode</p><p><strong>Paano ito makakatulong sa iyong komunidad</strong></p><ol><li>Sa Boto, madaling maabisuhan ang mga miyembro ng mga update tungkol sa proyekto ng NFT mula sa maraming channel sa social media sa pamamagitan ng pagpapagana ng mga notification na partikular sa channel ng Discord</li><li>Sa Sesh, pinasimpleng karanasan sa paglikha ng kaganapan para sa mga miyembrong naninirahan sa iba pang timezone</li><li>Sa Statbot, makikita ng mga miyembro ang pangkalahatang ideya kung gaano kalaki ang impluwensya ng isang organisasyon o artist</li></ol><p><strong>Paano ito makakatulong sa Community Support team</strong></p><ol><li>Sa Boto, ang mga update para sa NFT mints at mga benta, whale wallet, at mga listahan ay maaaring mai-post sa Discord, Slack, at Telegram nang walang pagsulat ng anumang code</li><li>Sa Sesh, magiging madaling makuha ang listahan ng mga dadalo at isama ang mga kaganapan ng kaganapan sa Google calendar</li><li>Sa Autocode, ang mga bot ay maaaring mabuo na may kaunting kaalaman sa Javascript upang i-set up ang anumang custom na command</li></ol></div>'
      },
      {
        type: 'QUIZ',
        notionId: 'ab2341f8a9374e2ab25389e2948a417c',
        title: 'Pagsusulit',
        quiz: {
          question: 'Aling bot ang makakatulong sa Community Support team na magbigay ng mga update sa NFT sales/mints?',
          rightAnswerNumber: 3,
          answers: [
            'Tip.cc',
            'MEE6',
            'Boto',
            'Vulcan Bot'
          ],
          id: 'online-tools-para-sa-moderation-at-collaboration-4'
        }
      },
      {
        type: 'QUIZ',
        notionId: '308fa05b4e8b412bbf936b8302472259',
        title: 'Pagsusulit',
        quiz: {
          question: 'Aling uri ng mga bot ang nagtitiyak na natutugunan ang mga problema sa komunidad sa tamang oras?',
          rightAnswerNumber: 2,
          answers: [
            'Verification bots',
            'Support bots',
            'Entertainment bots',
            'Moderation bots'
          ],
          id: 'online-tools-para-sa-moderation-at-collaboration-5'
        }
      },
      {
        type: 'QUIZ',
        notionId: '8c61250dfe854ee68987e0a64810d8c2',
        title: 'Pagsusulit',
        quiz: {
          question: 'Maaari mo bang i-verify ang pagmamay-ari ng NFT nang walang koneksyon sa wallet gamit ang Vulcan bot?',
          rightAnswerNumber: 1,
          answers: [
            'Yes',
            'No'
          ],
          id: 'online-tools-para-sa-moderation-at-collaboration-6'
        }
      },
      {
        type: 'QUIZ',
        notionId: 'c99d4b2ba6a448fc89b35d27a7bcd68e',
        title: 'Pagsusulit',
        quiz: {
          question: 'Anong services ang maaari mong i-streamline sa Sesh bot?',
          rightAnswerNumber: 2,
          answers: [
            'NFT verification',
            'Event schedules',
            'Ranking system',
            'Custom welcome messages'
          ],
          id: 'online-tools-para-sa-moderation-at-collaboration-7'
        }
      },
      {
        type: 'LEARN',
        notionId: '23320fcab2a5466ea12c4c52f3f8849d',
        title: 'Anong online tools ang magandang gamitin sa workplace<strong>? (1/4)</strong>',
        content: '<div class="bloc1"><p>Sa isang desentralisadong lugar ng trabaho, ang mga online na tool ay karaniwang ginagamit upang magawa ang mga proyekto kahit na sa isang malayong setting. Ito ang ilan sa mga pinakamahusay na tool—sa web2 at web3—upang buuin ang iyong tech stack at gumana nang walang putol sa mga miyembro mula sa iba\'t ibang team o departamento.</p><h2><strong>Notion (</strong> <a href=\'https://www.notion.so/\'>https://www.notion.so</a>)</h2><p>Ang Notion ay isang online na workspace kung saan maaari kang kumuha ng mga tala, bumuo ng database, gumawa ng mga kanban board para sa iyong mga listahan ng gagawin, at makipagtulungan sa mga kapantay para sa mga gawain sa pamamahala ng proyekto. Magagamit ito upang makita kung ano ang ginagawa ng ibang mga departamento at para i-update ang pag-unlad na ginawa mula sa iyong pagtatapos.</p><h2><strong>Google Workspace (</strong><a href=\'https://workspace.google.com/\'>https://workspace.google.com</a>)</h2><p>Ang Google Workspace ay maraming serbisyo kabilang na ang email, calendar management, video call, mga dokumento, spreadsheet, at isang cloud storage kung saan maaaring i-sync ang lahat ng data mula sa mga productivity app. Ang pagbabahagi ng file ay isa sa mga pangunahing tampok na ginagamit upang pagsamahin ang mga ideya at pagbabago sa isang dokumento.</p><h2><strong>Figma (</strong><a href=\'https://www.figma.com/\'>https://www.figma.com</a>)</h2><p>Ang Figma ay isang graphics-editing at prototyping tool na ginagamit upang lumikha ng mga digital na disenyo at likhang sining. Posibleng makipagtulungan sa mga kapantay dito sa pamamagitan ng pagbabahagi ng access sa file. Para sa mga tungkulin sa suporta sa komunidad, ang pagkakaroon ng kaalaman sa pag-navigate sa tool na ito ay makakatulong sa pagtulong sa mga maliliit na pagbabago sa mga post sa social media.</p></div>'
      },
      {
        type: 'LEARN',
        notionId: '6cec77ee17e94c64acfe2528e7ce1a93',
        title: 'Anong online tools ang magandang gamitin sa workplace<strong>? (2/4)</strong>',
        content: '<div class="bloc1"><h2><strong>Trello (</strong><a href=\'https://trello.com/\'>https://trello.com</a>)</h2><p>Ang Trello ay ang visual na tool sa pamamahala ng trabaho na nagbibigay kapangyarihan sa mga team na mag-ideya, magplano, mamahala, at magdiwang ng kanilang trabaho nang magkasama sa isang collaborative, produktibo, at organisadong paraan. Ang isang board ay kumakatawan sa isang lugar upang subaybayan ang impormasyon — madalas para sa malalaking proyekto, koponan, o daloy ng trabaho.</p><h2><strong>Miro (</strong><a href=\'https://miro.com/\'>https://miro.com</a>)</h2><p>Ang Miro ay isang online na collaborative na whiteboard platform na nagbibigay-daan sa mga distributed team na epektibong magtrabaho nang sama-sama, mula sa brainstorming gamit ang digital sticky notes hanggang sa pagpaplano at pamamahala ng maliksi na daloy ng trabaho. Sa Miro, maaari kang mag-organisa ng mga team, proyekto, at board para magtrabaho sa mga dokumento at lumikha ng mga lohikal na koneksyon upang bumuo ng mga ideya. Ang ilang mga kaso ng paggamit ng Miro ay kinabibilangan ng mga workshop, pananaliksik, pagsusuri, at paggawa ng mga mindmaps o diagram.</p></div>'
      },
      {
        type: 'LEARN',
        notionId: '10e3c6b826ec4c3eb2d705b1bbf1095b',
        title: 'Anong online tools ang magandang gamitin sa workplace<strong>? (3/4)</strong>',
        content: '<div class="bloc1"><h2>Parcel<strong> (</strong><a href=\'https://parcel.money/\'>https://parcel.money</a>)</h2><p>Pagdating sa reward distribution, matutulungan ka ng Parcel na mag-navigate sa mabagal at mahirap na mundo ng mga on-chain na pagbabayad ng DAO sa kanilang platform na halos zero ang gas. Posible para sa Community Support team na mag-request ng compensation sa pagkonekta sa kanilang wallet, pagpili ng role bilang Contributor, at pagpili ng cryptocurrency ng kanilang reward depende sa kung alin ang available.</p><p>Ang mga transaksyon ay ligtas na pinamamahalaan sa pamamagitan ng mga multi-sig contract na pinapagana ng Gnosis Safe.</p><h2><strong>Coinvise (</strong><a href=\'https://coordinape.com/\'>https://coordinape.com</a>)</h2><p>Ang Coinvise ay isang bukas na platform sa Ethereum kung saan maaaring maglunsad ang mga creator ng isang social at bumuo ng isang tokenized na komunidad. Magagamit ang kanilang mga tool sa pag-airdrop ng mga token, pagdidisenyo ng mga lockup at paggawa ng mga quest. Ang kamalayan sa kung paano makakatulong ang isang platform tulad nito sa Community Support team na tumulong sa mga miyembro kung paano lumahok sa mga airdrop at bounty.</p><ul><li><strong>Airdrop social tokens:</strong> magpadala at tumanggap ng mga social token sa social media, pribadong channel o nang maramihan sa maraming tao, sa pamamagitan ng isang natatanging na-claim na link.</li><li><strong>Rewards & Bounties:</strong> Bigyan ng parangal ang iyong komunidad para sa mga kontribusyon at pagdaragdag ng halaga sa pamamagitan ng mga social token.</li><li><strong>Open Social Graph for Creator DAOs / Tokenized Communities:</strong> Tuklasin at palakihin ang iyong komunidad, makipag-ugnayan at mag-ambag sa iba pang mga creator. Makakuha ng mga reward sa pagsali sa mga komunidad, at higit pa.</li></ul></div>'
      },
      {
        type: 'LEARN',
        notionId: 'e6c1126aab7b4253a2220089aa0418c7',
        title: 'Anong online tools ang magandang gamitin sa workplace<strong>? (4/4)</strong>',
        content: '<div class="bloc1"><h2><strong>Discourse (</strong><a href=\'https://www.discourse.org/\'>https://www.discourse.org</a>)</h2><p>Ang Discourse ay isang open-source na platform ng talakayan na ginagamit bilang isang forum o isang mahabang anyo na chat ng mga komunidad. Ito ay naging tahanan ng mga developer na komunidad upang magbigay ng suporta sa teknolohiya at komunidad, at isang lugar para sa maliliit na komunidad upang talakayin ang mga konsepto at pamamaraan. Nagbibigay din ang diskurso sa malalaking komunidad sa pamamagitan ng pagpapahintulot ng sabay-sabay na pakikilahok sa pamamagitan ng paghahati-hati ng mga indibidwal na paksa.</p><h2><strong>Snapshot (</strong><a href=\'https://snapshot.org/#/\'>https://snapshot.org/#/</a>)</h2><p>Snapshot is a decentralized voting system. It provides flexibility on how voting power is calculated for a vote. Snapshot supports various voting types to cater to the needs of organizations. Creating proposals and voting on Snapshot is user-friendly and does not cost gas as the process is performed off-chain. In short, Snapshot is an off-chain gasless multi-governance client with easy to verify and hard to contest results.</p><ul><li>Libre (walang gas) upang lumikha ng mga panukala at bumoto sa mga ito</li><li>Ang mga boto ay mga naka-sign na mensahe na madaling ma-verify online</li><li>Maramihang mga sistema ng pagboto - Isang pagpipilian, Pagboto sa pag-apruba, Quadratic na pagboto, at higit pa</li><li>Mga flexible na diskarte sa pagboto upang kalkulahin ang mga resulta ng pagboto - bumoto gamit ang mga ERC20, NFT, at higit pa</li></ul></div>'
      },
      {
        type: 'QUIZ',
        notionId: '36d548b0e0c84d9cbc460f5512bc7a23',
        title: 'Pagsusulit',
        quiz: {
          question: 'Aling online na plataporma ang may iba’t-ibang uri ng cloud services tulad ng email, calendar, video call, documents, spreadsheets, at cloud storage?',
          rightAnswerNumber: 3,
          answers: [
            'Yahoo Messenger',
            'Microsoft teams',
            'Google Workspace',
            'Discord'
          ],
          id: 'online-tools-para-sa-moderation-at-collaboration-8'
        }
      },
      {
        type: 'QUIZ',
        notionId: '4692845887854dadaf0dae04683952c7',
        title: 'Pagsusulit',
        quiz: {
          question: 'Aling online na plataporma ang gumagamit ng whiteboard interface para bumuo ng ideya gamit ang boards para mag-collaborate ang iba’t-ibang grupo?',
          rightAnswerNumber: 3,
          answers: [
            'Trello',
            'Blackboard',
            'Miro',
            'Draw.io'
          ],
          id: 'online-tools-para-sa-moderation-at-collaboration-9'
        }
      },
      {
        type: 'QUIZ',
        notionId: '0cc89adeb5d4496a92d11233c9d0705d',
        title: 'Pagsusulit',
        quiz: {
          question: 'Anong app ang karaniwang ginagamit para mag-request ng sahod para sa mga nag-aambag sa web3?',
          rightAnswerNumber: 4,
          answers: [
            'Coinvise',
            'MetaMask',
            'Coordinape',
            'Parcel'
          ],
          id: 'online-tools-para-sa-moderation-at-collaboration-10'
        }
      },
      {
        type: 'END',
        title: 'End of lesson'
      }
    ]
  },
  {
    kudosImageLink: '/humanDAO/lesson/pinakamahusay-na-kasanayan/kudos-922d7695.png',
    lessonImageLink: '/humanDAO/lesson/pinakamahusay-na-kasanayan/lesson-e2cab323.png',
    socialImageLink: '/humanDAO/lesson/pinakamahusay-na-kasanayan/social-5b35d9ef.png',
    learningActions: '',
    marketingDescription: 'Panatilihing may alam at may seguridad ang iyong komunidad',
    kudosId: null,
    duration: 10,
    learnings: '',
    difficulty: undefined,
    description: 'Panatilihing may alam at may seguridad ang iyong komunidad',
    name: 'Pinakamahusay na kasanayan',
    moduleId: '36835560ea344efea39d206b16821f53',
    quest: 'humanDAOPinakamahusayNaKasanayan',
    publicationStatus: 'publish',
    isFeaturedOnHomepage: false,
    isCommentsEnabled: true,
    endOfLessonRedirect: null,
    endOfLessonText: 'MAHALAGANG PAALALA: Makakatanggap ka ng non-transferrable NFT badge at trophy sa kada lesson na matatapos mo sa humanDAO Academy. Magsisilbi ang mga NFT na ito bilang patunay ng iyong kaalaman at karunungan sa humanDAO at web3. Sa susunod na pagkakataon, maaaring makatulong ito sa iyong paghahanap ng trabaho dahil taglay ng wallet mo ang pinaka resume o CV ng iyong mga natapos. Kaya hangga\'t maaari, isang wallet lang ang dapat mong gamitin at hindi iwawala kailanman.',
    notionId: '85ec56009f6c43179c824b3309dfe9de',
    slug: 'pinakamahusay-na-kasanayan',
    imageLinks: [
      '/humanDAO/lesson/pinakamahusay-na-kasanayan/1-gumamit-ng-datos-para-makilala-ang-komunidad-d82ffb55.png',
      '/humanDAO/lesson/pinakamahusay-na-kasanayan/2-gumamit-palagi-ng-dokumentasyon-016734bb.png',
      '/humanDAO/lesson/pinakamahusay-na-kasanayan/3-sumunod-sa-pamamaraan-ng-handoff--a5ada672.png',
      '/humanDAO/lesson/pinakamahusay-na-kasanayan/4-manatiling-updated-sa-mga-anunsyo--66366976.png'
    ],
    slides: [
      {
        type: 'LEARN',
        notionId: '93e37f01ffe144f8bee651ad1ed2e8ba',
        title: 'Bakit kailangan nating obserbahan ang pinakamahuhusay na kasanayan?',
        content: '<div class="bloc1"><p>Magkakaiba ang karanasan ng bawat organisasyon. Ito ay nakasalalay sa uri ng relasyon na kailangang buuin, at ang mga produkto, serbisyo, o proyektong ipapatupad. </p><p>Sa pagpasok ng web3, lahat ng paraan ng pakikipag-ugnayan ay mangyayari online. Ibig sabihin nito, mas madaling makapasok sa mga komunidad, subalit mas mahirap tulungan ang komunidad dahil sa mga pagkakaiba sa time zone, kakulangan ng mga di-berbal na pakikipag-usap, sabay-sabay na komunikasyon sa iba\'t ibang mga channel, mga panganib sa seguridad, atbp.</p><p>Dahil dito, kakailanganin mong maglaan ng oras sa pagsasaliksik para maunawaan mo kung anong uri ng mga tao ang mas gustong makisama sa organisasyon. Bukod dito, kakailanganin mo ring maglaan ng ilang oras upang gawing mas mahusay ang proseso ng pakikipag-usap at paglutas ng mga problema gamit ang mga naaangkop na feature sa mga online na tool at platform.</p></div>'
      },
      {
        type: 'LEARN',
        notionId: 'ac09970295a443c080b1601440214f71',
        title: '#1: Gumamit ng datos para makilala ang komunidad',
        content: '<div class="bloc1"><p>Mapapansin mong lumitaw ang iba\'t ibang paksa o isyu ng paulit-ulit, kaya kailangan ito ilagay sa isang kategorya. Para maunawan pa natin nito gamit ng datos, mahalagang gumamit ng platform analytics at mga sarbey.</p><p>Bilang halimbawa, maaari kang pumunta sa Server Insights ng Discord kung saan makikita mo ang mga datos sa growth retention, engagement rate, audience demographics, at channel interactions.</p><p>Pwede ka rin mag-send ng auto-response gamit ng mga keyword o parirala na karaniwang lumalabas sa chat. Bukod pa rito, pwede rin mag sarbey para malaman ang lalim ng pakaunawa ng nasa komunidad.</p></div><div class="bloc2"><img src=\'/humanDAO/lesson/pinakamahusay-na-kasanayan/1-gumamit-ng-datos-para-makilala-ang-komunidad-d82ffb55.png\'></div>'
      },
      {
        type: 'LEARN',
        notionId: 'abda425df0c54c3eb2fe19440bb6955e',
        title: '#2: Gumamit palagi ng dokumentasyon',
        content: '<div class="bloc1"><p>Habang lumalaki ang mga online na komunidad, kailangang pumili ang isang organisasyon ng iba\'t ibang web application, bot, at mobile app para bumuo ng isang technology stack o \'tech stack.\' Dahil mabilis ang pagbabago ng teknolohiya, maaaring maiba ang ilan sa mga web application na ginagamit sa paglipas ng panahon.</p><p>Ang isang dokumentasyon o knowledge base ay kumakatawan ng impormasyon kung paano gumamit ng isang software. Sa operational processes, ang dokumentasyon naman ay nagbibigay ng impormasyon sa kultura ng isang orgnanisasyon, project lifecycle at proseso ng handoff.</p></div><div class="bloc2"><img src=\'/humanDAO/lesson/pinakamahusay-na-kasanayan/2-gumamit-palagi-ng-dokumentasyon-016734bb.png\'></div>'
      },
      {
        type: 'LEARN',
        notionId: 'ed75b3d68ea842d3b7d29f8f6fa6405e',
        title: '#3: Sumunod sa pamamaraan ng handoff ',
        content: '<div class="bloc1"><p>Minsan, nakakaliuto ang pakikipag-usap. Gayunpaman, posible magkaroon ng sistema sa mga proseso ng isang organisasyon. Kinakailangan i-standardize ang impormasyon gamit ang mga pamamaraan ng handoff.</p><p>Sa madaling salita, ang handoff ay ginagawa kapag kailangan mo ipasa ang responsibilidad na may sapat na dokumentasyon at tagubilin. Kapag ang ibang tao ay itinalaga sa iyong tungkulin, sila ang gumaganap sa proseso ng handoff. </p><p>Narito ang ilang paraan para magawa ito nang epektibo:</p><ul><li>Maghanda ng checklist ng iyong pang-araw-araw na gawain at proseso</li><li>Magbigay ng ulat sa mga natapos at hamon na iyong kinakaharap</li><li>Magbigay ng ilang ideya kung paano malulutas ang mga hamon</li><li>I-link ang lahat ng kinakailangang materyal </li></ul></div><div class="bloc2"><img src=\'/humanDAO/lesson/pinakamahusay-na-kasanayan/3-sumunod-sa-pamamaraan-ng-handoff--a5ada672.png\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '48246119a5274f6b93189dc124a3953f',
        title: '#4: Manatiling updated sa mga anunsyo ',
        content: '<div class="bloc1"><p>Kadalasan, may nakalaang mga channel sa social media upang mag-post ng mga anunsyo para sa komunidad, habang ang mga miyembro ay may mga nakalaan channel sa Discord at Slack para sa mga update at handoff ng proyekto. Bukod pa rito, ang bawat application sa tech stack ng organisasyon ay mayroon ding mga update sa mga bagong feature, maintenance, at mga outage na makikita sa mga website at social channel.</p><p>Upang matiyak na ikaw ay nasa nakatutok ng mga anunsyo na ito, maaari mong subukang gamitin ang mga sumusunod na diskarte:</p><ul><li>Gumamit ng pribadong Discord server para sa iyong Community Support team para sundan ang mga update mula sa mga anunsyo ng Support Server ng iyong tech stack</li><li>I-on ang mga abiso sa email o SMS para sa mga tumugon sa form</li><li>Gumamit ng low-code sa no-code platform tulad ng Zapier o Pipedream para i-automate ang mga update</li></ul></div><div class="bloc2"><img src=\'/humanDAO/lesson/pinakamahusay-na-kasanayan/4-manatiling-updated-sa-mga-anunsyo--66366976.png\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '0983817761de4e84bd5d1a99a0596b5c',
        title: 'Pagsusulit',
        quiz: {
          question: 'Ano ang maaaring mangyari kung hindi ka nakapagbigay ng sapat na dokumentasyon pagdating ng handoff?',
          rightAnswerNumber: 4,
          answers: [
            'Pagkaantala ng proyekto',
            'Hindi pareho ang binigay na output sa goals ng isang organisasyon',
            'Kailangan pang linawin ng paulit-ulit bago maintindihan',
            'Lahat ng nabanggit'
          ],
          id: 'pinakamahusay-na-kasanayan-1'
        }
      },
      {
        type: 'QUIZ',
        notionId: '24a1518cfb784146a3290f85611f75bb',
        title: 'Pagsusulit',
        quiz: {
          question: 'Saan ka makakahanap ng dokumentasyon na kailangan para sa tech stack mo?',
          rightAnswerNumber: 1,
          answers: [
            'Magkaugnay na company websites ng web applications',
            'Wikipedia',
            'Quota',
            'Wala sa mga nabanggit'
          ],
          id: 'pinakamahusay-na-kasanayan-2'
        }
      },
      {
        type: 'QUIZ',
        notionId: '8158ec76116f48f8a2f150efe490e0f5',
        title: 'Pagsusulit',
        quiz: {
          question: 'Saan ka makakahanap ng mahalagang datos sa mga web application gaya ng demograpiko at rate of growth?',
          rightAnswerNumber: 2,
          answers: [
            'Homepage',
            'Platform analytics',
            'Settings',
            'All of the above'
          ],
          id: 'pinakamahusay-na-kasanayan-3'
        }
      },
      {
        type: 'END',
        title: 'End of lesson'
      }
    ]
  },
  {
    kudosImageLink: '/humanDAO/lesson/panghuling-pagsusulit/kudos-336e57db.png',
    lessonImageLink: '/humanDAO/lesson/panghuling-pagsusulit/lesson-bcc5f4f0.png',
    socialImageLink: '/humanDAO/lesson/panghuling-pagsusulit/social-ae2a2b05.png',
    learningActions: '',
    marketingDescription: 'Isang pagsusulit para maging kuwalipikado sa Community Support role',
    kudosId: null,
    duration: 10,
    learnings: '',
    difficulty: undefined,
    description: 'Isang pagsusulit para maging kuwalipikado sa Community Support role',
    name: 'Panghuling Pagsusulit',
    moduleId: '36835560ea344efea39d206b16821f53',
    quest: 'humanDAOPanghulingPagsusulit',
    publicationStatus: 'hidden',
    isFeaturedOnHomepage: false,
    isCommentsEnabled: true,
    endOfLessonRedirect: null,
    endOfLessonText: 'MAHALAGANG PAALALA: Makakatanggap ka ng non-transferrable NFT badge at trophy sa kada lesson na matatapos mo sa humanDAO Academy. Magsisilbi ang mga NFT na ito bilang patunay ng iyong kaalaman at karunungan sa humanDAO at web3. Sa susunod na pagkakataon, maaaring makatulong ito sa iyong paghahanap ng trabaho dahil taglay ng wallet mo ang pinaka resume o CV ng iyong mga natapos. Kaya hangga\'t maaari, isang wallet lang ang dapat mong gamitin at hindi iwawala kailanman.',
    notionId: '8000ee76f12047db928c106e28a14094',
    slug: 'panghuling-pagsusulit',
    imageLinks: [
      '/humanDAO/lesson/panghuling-pagsusulit/mahalagang-paalala-a27eea83.gif'
    ],
    slides: [
      {
        type: 'LEARN',
        notionId: 'd1256233a31245919697c06d87a4e782',
        title: 'Panimula',
        content: '<div class="bloc1"><p>Naabot mo na ngayon ang pinakahuling bahagi ng modyul ng Community Support, kung saan ilalapat mo ang iyong kaalaman sa mga online tool gaya ng Discord bots. </p><p>Ang pagkuha ng mataas na marka sa pagsusulit ang magpapatunay sa iyong pangunahing kaalaman sa Community Support role at kung paano mag setup ng server para sa isang web3 community.</p><p>Kung kailangan mo pa mag ensayo bago sumagot ng pagsusulit, huwag kang mag-alala! Maaari kang sumali sa isang server para masubukan ang iba’t-ibang commands at iba pang server settings.</p><p><strong><strong><strong><strong><strong><strong><strong><strong><strong><strong><strong><strong><strong><strong><strong><strong><strong><strong><strong><strong><strong><strong><strong><strong><strong><strong><strong><strong><strong>Ano ang mga kailangan ihanda?</strong></strong></strong></strong></strong></strong></strong></strong></strong></strong></strong></strong></strong></strong></strong></strong></strong></strong></strong></strong></strong></strong></strong></strong></strong></strong></strong></strong></strong></p><p>Bago tayo magsimula sa pagsusulit, kailangan mong tiyakin na mayroon kang:</p><ul><li>isang na-verify na Discord account</li><li>isang aktibong email address</li><li>natapos ang mga aralin 1-4 sa Community Support module</li></ul><p>Maaari kang sumali sa server ng pagsasanay anumang oras gamit ng link na ito: <a href=\'https://discord.gg/D4Tpg8uDuq\'>https://discord.gg/D4Tpg8uDuq</a>.</p></div>'
      },
      {
        type: 'LEARN',
        notionId: '321f3d1766cb468099f91993625f5f39',
        title: 'Mahalagang Paalala',
        content: '<div class="bloc1"><p>Pagpasok mo ng practice server, magkakaroon ka ng administrator role na magpapahintulot sayo na magdagdag o mag-invite ng bots na wala sa listahan. Sa madaling salita, pwede mo i-configure ang settings pagdating sa members, channels, at iba pang parte ng server.</p><p>Sundan ang mga hakbang na ito upang ligtas mong magamit ang mga bots</p><ol><li>Hanapin ang official website ng bot na nais mong idagdag.</li><li>Basahin ang documentation bago idagdag ang isang bot sa server.</li><li>Kumpirmahin ang mga permisyo na naka-tsek at i-authorize ito.</li><li>Tignan ng mabuti kung ang bot ay mayroong verified checkmark pagpasok ng sever bago gamitin ang mga commands nito.</li></ol></div><div class="bloc2"><img src=\'/humanDAO/lesson/panghuling-pagsusulit/mahalagang-paalala-a27eea83.gif\'></div>'
      },
      {
        type: 'LEARN',
        notionId: 'c4f9e21a1f4e4486b948252faca60c49',
        title: 'Istraktura ng Pagsusulit',
        content: '<div class="bloc1"><p>Ang pagsusulit ay may higit sa 22 katanungan na maaari lamang sagutan sa loob ng 60 minuto.</p><p>Binubuo ito ng mga sumusunod na bahagi:</p><ol><li>Matching type (Mga bahagi ng dashboard ng server/bot) - 25 puntos</li><li>Multiple choice (Pagpili ng tamang aksyon sa isang sitwasyon) - 15 puntos</li><li>Identification (Paggamit ng mga tamang command) - 20 puntos</li><li>Performance task (Paggawa ng mga roles/channel) - 40 puntos</li></ol><p>Upang maging kwalipikado para sa role na ito, kailangan mong maabot ang 80% passing score. Kung hindi, kailangan mong dumaan muli sa pagsusulit sa ibang pagkakataon.</p></div>'
      },
      {
        type: 'LEARN',
        notionId: '2b182568dc634a30965ae65c0e737537',
        title: 'Simulan na natin!',
        content: '<div class="bloc1"><p>Handa ka na ba ngayon?</p><p>Sagutan ang mga kailangang detalye at i-type ang code <strong>CSR2022</strong> sa field ng password upang ma-access ang pagsusulit.</p><p>Ito ang link ng pagsusulit: <a href=\'https://www.proprofs.com/quiz-school/ugc/story.php?title=community-support-role-exam\'>https://www.proprofs.com/quiz-school/ugc/story.php?title=community-support-role-exam</a></p></div>'
      },
      {
        type: 'END',
        title: 'End of lesson'
      }
    ]
  },
  {
    kudosImageLink: '/humanDAO/lesson/financial-literacy-101/kudos-e5316ff2.png',
    lessonImageLink: '/humanDAO/lesson/financial-literacy-101/lesson-baf38d68.png',
    socialImageLink: '/humanDAO/lesson/financial-literacy-101/social-c3051557.jpg',
    learningActions: '',
    marketingDescription: 'Mga pangunahing konsepto ng Financial Literacy',
    kudosId: null,
    duration: 15,
    learnings: '',
    difficulty: 'Easy',
    description: 'Mga pangunahing konsepto ng Financial Literacy',
    name: 'Financial Literacy 101',
    moduleId: '7b4ecd08259c4708aadcd4d76dd4707f',
    quest: 'humanDAOFinancialLiteracy101',
    publicationStatus: 'publish',
    isFeaturedOnHomepage: true,
    isCommentsEnabled: true,
    endOfLessonRedirect: null,
    endOfLessonText: 'MAHALAGANG PAALALA: Makakatanggap ka ng non-transferrable NFT badge at trophy sa kada lesson na matatapos mo sa humanDAO Academy. Magsisilbi ang mga NFT na ito bilang patunay ng iyong kaalaman at karunungan sa humanDAO at web3. Sa susunod na pagkakataon, maaaring makatulong ito sa iyong paghahanap ng trabaho dahil taglay ng wallet mo ang pinaka resume o CV ng iyong mga natapos. Kaya hangga\'t maaari, isang wallet lang ang dapat mong gamitin at hindi iwawala kailanman.',
    notionId: 'a22bc1027f1246b582689fe3ad6c0ac9',
    slug: 'financial-literacy-101',
    imageLinks: [
      '/humanDAO/lesson/financial-literacy-101/bakit-mahalagang-matutunan-ang-financial-literacy-d597cf9d.png',
      '/humanDAO/lesson/financial-literacy-101/bakit-mahalagang-pag-aralan-ang-financial-literacy-5e59148b.png',
      '/humanDAO/lesson/financial-literacy-101/ano-ang-nangyayari-kapag-may-kakulangan-sa-financial-literacy-ae082506.png',
      '/humanDAO/lesson/financial-literacy-101/major-pillars-of-financial-literacy-040f0c1e.png',
      '/humanDAO/lesson/financial-literacy-101/pillar-1-earn-3214f2cb.png',
      '/humanDAO/lesson/financial-literacy-101/pillar-3-save-and-invest-392f8515.png',
      '/humanDAO/lesson/financial-literacy-101/pillar-4-borrow-1c9e040e.png',
      '/humanDAO/lesson/financial-literacy-101/pillar-5-protect-9ad6c697.png',
      '/humanDAO/lesson/financial-literacy-101/financial-literacy-sa-humandao-4546c34c.png',
      '/humanDAO/lesson/financial-literacy-101/personal-na-pagsusulit-f1e39fe0.png'
    ],
    slides: [
      {
        type: 'LEARN',
        notionId: '7f006398aad44a298486d1858d899598',
        title: 'Bakit mahalagang matutunan ang Financial Literacy?',
        content: '<div class="bloc1"><p>Ang maligayang buhay ay maaaring makamit sa pagbabalanse ng pangangailangan.</p><p>Mahahati ang mga pangangailangan na ito sa tatlong pangkat:</p><ol><li>Physical well-being (Pisikal na kalagayan)</li><li>Emotional or mental well-being (Emosyonal na kalagayan)</li><li><strong>Financial well-being (Pinansyal na kalagayan)</strong></li></ol><p>Sa modyul na ito, susuriin natin ang paksa ng Financial Literacy.</p></div><div class="bloc2"><img src=\'/humanDAO/lesson/financial-literacy-101/bakit-mahalagang-matutunan-ang-financial-literacy-d597cf9d.png\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '9e46a95a69ac4d64a016134cb466f295',
        title: 'Bakit mahalagang<strong> pag-aralan ang Financial Literacy:</strong>',
        content: '<div class="bloc1"><p>Sa ating mga paaralan at kolehiyo, bihira ang mga kursong nagtuturo sa atin kung paano pangalagaan ang ating pinansyal na kalagayan.</p><p>Ang sining at agham ng epektibong pamamahala sa ating mga mapagkukunang pinansyal para magkaroon ng panghabambuhay na kagalingan sa pananalapi ay kilala bilang <strong>Financial Literacy.</strong></p><p>Kung naiintindihan natin ang mundo dahil sa ating kaalaman sa pagbabasa at pagsulat, mas magkakaroon tayo ng magandang pag-unawa sa pera at sa ekonomiya ng mundo kung tayo ay financially literate o may kaalaman kung paano maging wais sa paggamit ng pera.</p></div><div class="bloc2"><img src=\'/humanDAO/lesson/financial-literacy-101/bakit-mahalagang-pag-aralan-ang-financial-literacy-5e59148b.png\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '799bdada27d64153aa43a8c75a0f5bc9',
        title: 'Ano ang nangyayari kapag may kakulangan sa Financial Literacy?',
        content: '<div class="bloc1"><p>Ito ang mga panganib sa kakulangan ng kaalaman sa financial literacy:</p><ol><li>Hindi wastong paggamit ng pera</li><li>Pagkakabalisa sa pagretiro</li><li>Maling paggamit ng mga produkto tulad ng utang, bank account, at credit card</li><li>Mawalan ng oportunidad sa pagkamit ng mga pangarap sa buhay</li></ol></div><div class="bloc2"><img src=\'/humanDAO/lesson/financial-literacy-101/ano-ang-nangyayari-kapag-may-kakulangan-sa-financial-literacy-ae082506.png\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '2ab55c6fde1044388959fc0d3411d84c',
        title: 'Major <strong>Pillars of Financial Literacy</strong>',
        content: '<div class="bloc1"><p>Ito ang limang haligi ng konseptong ito:</p><ol><li>Earn (Kumita)</li><li>Spend (Gumastos)</li><li>Save/Invest (Mag-ipon at mamuhunan)</li><li>Borrow (Umutang)</li><li>Protect (Alagaan)</li></ol></div><div class="bloc2"><img src=\'/humanDAO/lesson/financial-literacy-101/major-pillars-of-financial-literacy-040f0c1e.png\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '5cca0e352d4b497ea163b637dd4ed8fa',
        title: 'Pagsusulit',
        quiz: {
          question: 'Ang kakulangan ng kaalaman sa Financial Literacy ay maaaring magdulot sa',
          rightAnswerNumber: 4,
          answers: [
            'Hindi wastong paggamit ng pera',
            'Maling paggamit ng mga produkto tulad ng utang, bank account, at credit card',
            'Mawalan ng oportunidad sa pagkamit ng mga pangarap sa buhay',
            'Lahat ng mga nabanggit'
          ],
          id: 'financial-literacy-101-1'
        }
      },
      {
        type: 'LEARN',
        notionId: '70eb8ac544f94bb0af6a6248377082c4',
        title: '<strong>Pillar 1: Earn</strong>',
        content: '<div class="bloc1"><p>Ang unang mahalagang bahagi ng Financial Literacy ay <strong>Earn (kumita)</strong>.</p><p>Ano ang ibig sabihin kapag ikaw ay kumikita?</p><ul><li>Pagkakaroon ng maayos na pag-unawa sa mga asset na pumapasok kada buwan.</li><li>Pagkakaroon ng iba’t-ibang paraan ng pagkita mula sa murang edad</li><li>Bagamat kumikita ka kapalit ng iyong oras, mahalagang maghanda ng isa pang paraan para lumago pa lalo ang iyong pera sa pamamaraan ng investing o pamumuhunan.</li></ul></div><div class="bloc2"><img src=\'/humanDAO/lesson/financial-literacy-101/pillar-1-earn-3214f2cb.png\'></div>'
      },
      {
        type: 'LEARN',
        notionId: 'fd914459b96847938f007ea20b37d495',
        title: '<strong>Pillar 2: Spend</strong>',
        content: '<div class="bloc1"><p>Ang pangalawang mahalagang bahagi ng Financial Literacy ay <strong>Spend (gumastos)</strong>.</p><p>Ano ang ibig sabihin kapag ikaw ay gumastos?</p><ul><li>Kapag malinaw ang pag-unawa mo sa pagkita, ang susunod mong kailangan tukuyin ay ang iyong buwanang badyet.</li><li>Kabilang dito ang pag-alam kung ano ang sapat—kung magkano kada buwan ang pera na makakapagpabuti sa kalidad ng iyong buhay.</li><li>Magandang pagsasanay ang pag-badyet ng iyong expenses upang malaman kung ano ang dapat <strong>hindi</strong> mo paggastusan.</li></ul></div>'
      },
      {
        type: 'LEARN',
        notionId: 'a221dee39bbc4f009228cd58c6d50045',
        title: '<strong>Pillar 3: Save and Invest</strong>',
        content: '<div class="bloc1"><p>Ang ikatlong bahagi ng Financial Literacy ay <strong>Save and Invest (Mag-ipon at mamuhunan)</strong></p><p>Ano ang ibig sabihin ng mag-ipon at mamuhunan?</p><ul><li>Kung mayroon kang datos sa iyong kinita at ginagastos, hindi ka na mahihirapan tukuyin kung magkano ang dapat ilagay sa ipon.</li><li> Sa madaling salita, ang iyong gastusin ay ang balanseng matitira <em>pagkatapos mag-ipon ng sapat na pera.</em></li><li>Ang mahalagang impormasyong kailangan dito ay: para saan tayo nagtitipid?</li></ul></div>'
      },
      {
        type: 'LEARN',
        notionId: 'd5370f5dc71949fe914d2b6f1f20429f',
        title: '<strong>Pillar 3: Save and Invest</strong>',
        content: '<div class="bloc1"><p>Sa ibaba nito ang <strong>4 na Big Bucket Items</strong> kung saan dapat nating i-save ang mga sumusunod:</p><ol><li>Emergency fund: maaari itong umabot ng tatlo hanggang anim (3-6) na buwan ng iyong basic income na tinukoy sa nakaraang slide.</li><li>Pagreretiro: para ang iyong buhay matapos ng trabaho ay hindi nakakaabala sa iyo.</li><li>Personal na utang: ito ay kailangang bayaran sa lalong madaling panahon.</li><li>Mga Pangarap sa buhay: Kung meron kang holiday na gusto mong maranasan, o gaming console na gusto mong bilhin - kailangan mong magkaroon ng plano sa pag-iipon para matupad mo ito.</li></ol></div><div class="bloc2"><img src=\'/humanDAO/lesson/financial-literacy-101/pillar-3-save-and-invest-392f8515.png\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '25ca24af6fc24c659524c1a2b8ca875d',
        title: 'Pagsusulit',
        quiz: {
          question: 'Piliin ang tamang equation',
          rightAnswerNumber: 2,
          answers: [
            'Income - Expense = Savings (Kita - Gastos = Ipon)',
            'Income - Savings = Expenses (Kita - Ipon = Gastos)',
            'Parehong mali',
            'Parehong tama'
          ],
          id: 'financial-literacy-101-2'
        }
      },
      {
        type: 'LEARN',
        notionId: 'b14ccfda2bcb4f0ea61f572b4ebb2344',
        title: '<strong>Pillar 4: Borrow</strong>',
        content: '<div class="bloc1"><p>Ang pang-apat na bahagi ng Financial Literacy ay <strong>Borrow (Umutang)</strong>.</p><p>Ano ang ibig sabihin kapag ikaw ay umutang?</p><ul><li>Hindi lahat ng plano ay maaaring matupad. Maaaring magkaroon ng sitwasyon na kailangan mong umutang ng pera.</li><li>Ang unang tugon sa sitwasyon na ito ay ang paggamit ng iyong emergency fund.</li><li>Kung may iba ka pang pangangailangan, ang pag-uutang ang susunod na gagawin hangga’t alam mo kung paano mag kumpara ng utang at mag-maintain ng magandang credit score.</li><li>Kapag mas mataas ang iyong credit score, mas mababa ang interes na ipapatong sa gastos. Sa madaling salita, kung hindi mo nababayaran ang utang mo sa tamang oras, maaaring maubos ang lahat ng kinita mo sa pagbayad ng interes.</li></ul><p>Dito natin malalaman na ang magandang credit score ay isa sa mga pinaka-importanteng hakbang tungo sa pagiging financially literate.</p></div><div class="bloc2"><img src=\'/humanDAO/lesson/financial-literacy-101/pillar-4-borrow-1c9e040e.png\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '9e73db90fa324f8f8741f61a2f7a469b',
        title: '<strong>Pillar 5: Protect</strong>',
        content: '<div class="bloc1"><p>Ang pang-lima na bahagi ng Financial Literacy ay <strong>Protect (Alagaan</strong>).</p><p>Ngayong alam na natin kung paano gumastos ng tama sa pagba-badyet at pamumuhunan, kailangan naman natin malaman kung paano alagaan ang ating kinita at kinikita ngayon.</p><p>Ano ibig sabihin kung ikaw ay nag-aalaga ng assets?</p><ul><li>Magandang kumuha ng isang Term Insurance. Dapat itong itinuturing na parte ng gastos at hindi parte ng puhunan. Ibig sabihin nito, ginagamit natin ang insurance para protektahan ang ating pamilya kung mangyari ang hindi inaasahang pagkamatay.</li><li>Maganda ring pagsasanay ang regular na pagsusuri ng bank account at credit card statement kung sakaling may maling transaksiyon o kahina-hinalang aktibidad.</li><li>Panghuli, mahalaga rin ang pagpapanatiling secure ng mga dokumento at password para maiwasan ang scam at identity theft.</li></ul></div><div class="bloc2"><img src=\'/humanDAO/lesson/financial-literacy-101/pillar-5-protect-9ad6c697.png\'></div>'
      },
      {
        type: 'LEARN',
        notionId: 'd0820866bdd44e2b8e7b88480d7ada91',
        title: 'Financial Literacy sa HumanDAO',
        content: '<div class="bloc1"><ul><li>Ang limang prinsipyo ng Financial Literacy are makakatulong satin magsimula sa ating lakbay sa pagkita.</li><li>May iba pang kaakit-akit na konsepto tulad ng compounding, at iba\'t ibang anyo ng mga instrumento sa pamumuhunan na maaaring makasama sa mga susunod na modyul ng Financial Literacy.</li><li>Ang pagiging bahagi ng komunidad ng humanDAO ay nagbibigay-daan sa pagiging wais sa paggamit ng pera, at ito ay ang pagbili o pagtanggap sa humanDAO token na tinatawag na $HDAO!</li><li>Magandang kumuha ng mga bounty para kumita ng $HDAO at i-stake sa mahabang panahon upang lumago ang puhunan.</li><li><strong>Habang lumalaki ang DAO, maaaring tumaas din ang halaga ng token. Dito maaaring magsimula ang paglalago ng iyong pera.</strong></li></ul></div><div class="bloc2"><img src=\'/humanDAO/lesson/financial-literacy-101/financial-literacy-sa-humandao-4546c34c.png\'></div>'
      },
      {
        type: 'LEARN',
        notionId: 'dbb98f20e987461da09744a0c9894c54',
        title: 'Personal na Pagsusulit',
        content: '<div class="bloc1"><p>Ang pagkakaroon ng mga konkretong sagot sa mga tanong sa ibaba ay magpapatunay na ikaw ay financially literate. Subukan mo sila!</p><ol><li>Alam mo ba kung paano gumawa ng personal na badyet?</li><li>Mayroon ka bang emergency fund na kakasya sa tatlong buwan para sa basic living expenses?</li><li>Mayroon ka bang plano para sa pagreretiro?</li><li>Kung may utang ka, may plano ka bang bayaran ito?</li><li>Alam mo ba ang iyong credit score at kung paano ito pagbutihin?</li></ol></div><div class="bloc2"><img src=\'/humanDAO/lesson/financial-literacy-101/personal-na-pagsusulit-f1e39fe0.png\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '51a9eded704141dd9c78056b629032f0',
        title: 'Pagsusulit',
        quiz: {
          question: 'Pagkatapos mong kumita ng $HDAO, isa sa mga madaling paraan upang mapalago ang iyong pera ay _______. ',
          rightAnswerNumber: 2,
          answers: [
            'Investing (pamumuhunan)',
            'Staking',
            'Exchanging (pakikipagpalit)',
            'Lahat ng mga nabanggit'
          ],
          id: 'financial-literacy-101-3'
        }
      },
      {
        type: 'END',
        title: 'End of lesson'
      }
    ]
  }
]

export default LESSONS
