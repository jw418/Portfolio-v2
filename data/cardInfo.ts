export const data: {
  id: number;
  title: string;
  image: string;
  width: number;
  height: number;
  description: string;
  descriptionEN: string;
  tag: string[];
  github?: string;
  site?: string;
}[] = [
  {
    id: 1,
    title: "Cogito DAPP Demo",
    image: "screenshot-cogito.png",
    width: 1784,
    height: 965,
    description: "Un clone de la DAPP de Cogito. En cours de développement...",
    descriptionEN: "A clone of Cogito's DAPP. In development...",
    tag: [
      "Next.js",
      "Typescript",
      "Ethers.js",
      "Clerk",
      "Tailwind",
      "Schadcdn",
      "Emotion",
      "Radix",
    ],
    github: "https://github.com/jw418/cogito-dapp-example",
    site: "",
  },
  {
    id: 2,
    title: "Agixscan.io",
    image: "snetHubScreenshot.PNG",
    width: 773,
    height: 1255,
    description:
      "Agrégateur de données on-chain et off-chain pour l'écosystème SingularityNet(AGIX). Construit à partir de zéro avec Next.js",
    descriptionEN:
      "Is an unofficial website that provides general information and on-chain data about SingularityNET ecosystem. Built from scratch with Next.js",
    tag: ["Next.js", "Typescript", "Ethers.js", "Vercel", "API", "SEO"],
    github: "",
    site: "https://agixscan.io",
  },
  {
    id: 3,
    title: "Decentralized Hangman Game",
    image: "hangmanScreenshot.PNG",
    width: 1170,
    height: 1135,
    description:
      "C'est un jeu du pendu en duel décentralisé. Vous pouvez créer ou rejoindre une partie, le gagnant remporte le tout !",
    descriptionEN:
      "It's a Decentralized Hangman's Versus Game. You can create or join a game, the winner takes all!",
    tag: [
      "Truffle",
      "Chainlink_VRFv2",
      "Fleek",
      "IPFS",
      "React",
      "Bootstrap",
      "Slither",
      "Web3.js",
    ],
    github: "https://github.com/jw418/Penduel",
    site: "https://floral-darkness-8082.on.fleek.co/",
  },
  {
    id: 4,
    title: "Rat Race NFT",
    image: "mtsScreenshot.PNG",
    width: 1503,
    height: 813,
    description: "Cette DAPP lance une collection NFT.",
    descriptionEN: "This DAPP launches an NFT collection.",
    tag: [
      "Scrum",
      "Trello",
      "React",
      "HTML",
      "CSS",
      "OpenSea",
      "Hashlips",
      "truffle",
      "NFT",
      "ERC721",
    ],
    github: "https://github.com/jw418/Meta-Trader-Society",
    site: "https://mtsalyra.herokuapp.com/",
  },
  {
    id: 5,
    title: "Smart Wallet ERC6551 Demo",
    image: "smartWalletScreenshot.jpg",
    width: 503,
    height: 912,
    description:
      "Démo de l'ERC6551 sur le réseau de test Mumbay Polygon à l'aide de Thirdweb",
    descriptionEN:
      "Quick demo of the ERC6551 on Mumbay Polygon Testnet using Thirdweb",
    tag: ["Next.js", "Typescript", "ThirdWeb", "ERC6551", "ERC1155", "yarn"],
    github: "https://github.com/jw418/ERC6551-Demo",
    site: "https://profound-piroshki-b6b2f9.netlify.app",
  },

  {
    id: 6,
    title: "Portfolio Site",
    image: "portfolioScreenshot.PNG",
    width: 980,
    height: 406,
    description: "Ce portfolio a été construit à partir de zéro.",
    descriptionEN: "This portfolio site build from scratch.",
    tag: [
      "Typescript",
      "Tailwind",
      "React",
      "Next.js",
      "Netlify",
      "nodemailer",
    ],
    github: "https://github.com/jw418/Portfolio-Site",
    site: "https://www.jw-web3.com/",
  },

  {
    id: 7,
    title: "Crypto Price Bot",
    image: "discordBotScreenshot.PNG",
    width: 980,
    height: 406,
    description:
      "Un bot dicord qui peut donner le prix de différentes crypto-monnaies.",
    descriptionEN:
      "A dicord bot that can give the price of different crypto-currencies.",
    tag: ["Infura", "Node.js", "Web3.js", "discord.js", "Chainlink_PriceFeeds"],
    github: "https://github.com/jw418/Discord-Crypto-Price-Bot",
    site: "",
  },

  {
    id: 8,
    title: "Dyno Telegram Bot",
    image: "tgBotScreenshot.jpeg",
    width: 1242,
    height: 2131,
    description:
      "Un robot telegram qui envoie une alerte lorsqu'il détecte un swap sur le contrat DynBTC ou sur le contrat DynETH.",
    descriptionEN:
      "A telegram bot that sends an alert when it detects a swap on the DynBTC or on the DynETH contract.",
    tag: ["node-telegram-bot-api", "Node.js", "Alchemy", "Web3.js"],
    github: "https://github.com/Roro3831/Dyna-Bot-Telegram",
    site: "",
  },

  {
    id: 9,
    title: "Voting DAPP",
    image: "voteScreenshot.PNG",
    width: 1702,
    height: 1369,
    description:
      "Une DAPP qui permet  d'organiser un vote, avec une liste blanche et dépôt de proposition.",
    descriptionEN:
      "A DAPP that allows to organize a vote, with a whitelist and proposal deposit.",
    tag: ["Truffle-Test", "Infura", "HTML", "Withelist", "DAO"],
    github: "https://github.com/jw418/DAPP-Systeme-vote",
    site: "https://shielded-coast-24796.herokuapp.com/",
  },
];
