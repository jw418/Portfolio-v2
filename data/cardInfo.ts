export const data: {
  id: number;
  title: string;
  image: string;
  width: number;
  height: number;
  description: string;
  descriptionEN: string;
  tags: [string, string][];
  github?: string;
  site?: string;
}[] = [
  // purple = framework
  // green = method
  // pink = language
  // orange = hosting
  // blue = front-end
  // yellow = depandencies
  // red = blockchain

  {
    id: 1,
    title: "ASI-Scan",
    image: "asi-scan-screenshot.png",
    width: 773,
    height: 1255,
    description:
      "Un site web non officiel à propos de la superintelligence alliance(ASI). La beta arrive bientôt !",
    descriptionEN:
      "An unofficial website about the superintelligence alliance(ASI). Beta coming soon!",
    tags: [
      ["Next.js", "purple"],
      ["Typescript", "pink"],
      ["Vercel", "orange"],
      ["Shadcn", "blue"],
      ["Tailwind", "blue"],
      ["Aceternity UI", "blue"],
      ["Ethers.js", "red"],
    ],
    github: "",
    site: "https://www.asi-scan.com",
  },
  {
    id: 2,
    title: "Flip Wallet",
    image: "flipWalletScreenshot.png",
    width: 321,
    height: 449,
    description:
      "Réalisé dans le cadre du Hackathon Constelation Chianlink 2023, Flip: un portefeuille cross-chain user-friendly grâce à CCIP",
    descriptionEN:
      "Produced as part of the Chianlink 2023 Constellation Hackathon, Flip: a user-friendly cross-chain wallet powered by CCIP",
    tags: [
      ["Vite", "purple"],
      ["CI/CD", "green"],
      ["React", "pink"],
      ["Typescript", "pink"],
      ["Material-UI", "blue"],
      ["CRXJS", "yellow"],
      ["Ethers.js", "red"],
      ["Hardhat", "red"],
      ["Chainlink CCIP", "red"],
    ],
    github: "https://github.com/mrlucciola/link-hack-ccip",
    site: "",
  },
  {
    id: 3,
    title: "Web3 Hangman Game",
    image: "hangmanScreenshot.PNG",
    width: 1170,
    height: 1135,
    description:
      "C'est un jeu du pendu en duel décentralisé. Vous pouvez créer ou rejoindre une partie, le gagnant remporte le tout !",
    descriptionEN:
      "It's a Decentralized Hangman's Versus Game. You can create or join a game, the winner takes all!",
    tags: [
      ["React", "pink"],
      ["Fleek", "orange"],
      ["IPFS", "orange"],
      ["Truffle", "red"],
      ["Bootstrap", "blue"],
      ["Chainlink_VRFv2", "red"],
      ["Slither", "red"],
      ["Web3.js", "red"],
    ],
    github: "https://github.com/jw418/Penduel",
    site: "https://floral-darkness-8082.on.fleek.co/",
  },

  {
    id: 4,
    title: "Cogito DAPP Demo",
    image: "screenshot-cogito.png",
    width: 1784,
    height: 965,
    description: "Un clone de la DAPP de Cogito.",
    descriptionEN: "A clone of Cogito's DAPP.",
    tags: [
      ["Next.js", "purple"],
      ["Typescript", "pink"],
      ["TailwindCSS", "blue"],
      ["Shadcn", "blue"],
      ["Clerk", "yellow"],
      ["Ethers.js", "red"],
    ],
    github: "https://github.com/jw418/cogito-dapp-example",
    site: "",
  },
  {
    id: 5,
    title: "Agixscan.io",
    image: "snetHubScreenshot.PNG",
    width: 773,
    height: 1255,
    description:
      "Agrégateur de données on-chain et off-chain pour l'écosystème SingularityNet(AGIX). Construit à partir de zéro avec Next.js",
    descriptionEN:
      "Is an unofficial website that provides general information and on-chain data about SingularityNET ecosystem. Built from scratch with Next.js",
    tags: [
      ["Next.js", "purple"],
      ["API", "green"],
      ["SEO", "green"],
      ["Typescript", "pink"],
      ["Vercel", "orange"],
      ["Ethers.js", "red"],
    ],
    github: "",
    site: "https://agixscan.io",
  },
  {
    id: 6,
    title: "BC-Transition website",
    image: "bc-transition-Screenshot.png",
    width: 1061,
    height: 942,
    description: "Ce site a été conçu et développé en freelance.",
    descriptionEN: "This site was designed and developed on a freelance basis.",
    tags: [
      ["Next.js", "purple"],
      ["SEO", "green"],
      ["Typescript", "pink"],
      ["Vercel", "orange"],
      ["Tailwind", "blue"],
      ["Framer Motion", "blue"],
      ["Resend", "yellow"],
    ],
    github: "",
    site: "https://www.bc-transition.com/",
  },
  {
    id: 7,
    title: "Epaviste website",
    image: "GBepavisteScreenshot.png",
    width: 1061,
    height: 942,
    description: "Ce site a été conçu et développé en freelance.",
    descriptionEN: "This site was designed and developed on a freelance basis.",
    tags: [
      ["Next.js", "purple"],
      ["SEO", "green"],
      ["Typescript", "pink"],
      ["Vercel", "orange"],
      ["Tailwind", "blue"],
      ["Resend", "yellow"],
    ],
    github: "",
    site: "https://www.epaviste-nord-isere.fr/",
  },

  {
    id: 8,
    title: "Rat Race NFT",
    image: "mtsScreenshot.PNG",
    width: 1503,
    height: 813,
    description: "Cette DAPP lance une collection NFT.",
    descriptionEN: "This DAPP launches an NFT collection.",
    tags: [
      ["Scrum", "green"],
      ["Trello", "green"],
      ["React", "pink"],
      ["HTML", "pink"],
      ["CSS", "blue"],
      ["Hashlips", "yellow"],
      ["OpenSea", "red"],
      ["truffle", "red"],
      ["NFT", "red"],
      ["ERC721", "red"],
    ],
    github: "https://github.com/jw418/Meta-Trader-Society",
    site: "https://mtsalyra.herokuapp.com/",
  },
  {
    id: 9,
    title: "Smart Wallet ERC6551 Demo",
    image: "smartWalletScreenshot.jpg",
    width: 503,
    height: 912,
    description:
      "Démo de l'ERC6551 sur le réseau de test Mumbay Polygon à l'aide de Thirdweb",
    descriptionEN:
      "Quick demo of the ERC6551 on Mumbay Polygon Testnet using Thirdweb",
    tags: [
      ["Next.js", "purple"],
      ["Typescript", "pink"],
      ["yarn", "yellow"],
      ["ThirdWeb", "red"],
      ["ERC6551", "red"],
      ["ERC1155", "red"],
    ],
    github: "https://github.com/jw418/ERC6551-Demo",
    site: "https://profound-piroshki-b6b2f9.netlify.app",
  },

  {
    id: 10,
    title: "Portfolio Site",
    image: "portfolioScreenshot.PNG",
    width: 980,
    height: 406,
    description: "Ce portfolio a été construit à partir de zéro.",
    descriptionEN: "This portfolio site build from scratch.",
    tags: [
      ["Next.js", "purple"],
      ["Typescript", "pink"],
      ["React", "pink"],
      ["Netlify", "orange"],
      ["Tailwind", "blue"],
      ["nodemailer", "yellow"],
    ],
    github: "https://github.com/jw418/Portfolio-v2",
    site: "https://www.jw-web3.com/",
  },

  {
    id: 11,
    title: "Voting DAPP",
    image: "voteScreenshot.PNG",
    width: 1702,
    height: 1369,
    description:
      "Une DAPP qui permet  d'organiser un vote, avec une liste blanche et dépôt de proposition.",
    descriptionEN:
      "A DAPP that allows to organize a vote, with a whitelist and proposal deposit.",
    tags: [
      ["HTML", "pink"],
      ["Infura", "red"],
      ["Truffle-Test", "red"],
      ["Withelist", "red"],
      ["DAO", "red"],
    ],
    github: "https://github.com/jw418/DAPP-Systeme-vote",
    site: "https://shielded-coast-24796.herokuapp.com/",
  },
  {
    id: 12,
    title: "Crypto Price Bot",
    image: "discordBotScreenshot.PNG",
    width: 980,
    height: 406,
    description:
      "Un bot dicord qui peut donner le prix de différentes crypto-monnaies.",
    descriptionEN:
      "A dicord bot that can give the price of different crypto-currencies.",
    tags: [
      ["Node.js", "pink"],
      ["discord.js", "yellow"],
      ["Infura", "red"],
      ["Chainlink_PriceFeeds", "red"],
      ["Web3.js", "red"],
    ],
    github: "https://github.com/jw418/Discord-Crypto-Price-Bot",
    site: "",
  },
  {
    id: 13,
    title: "Dyno Telegram Bot",
    image: "tgBotScreenshot.jpeg",
    width: 1242,
    height: 2131,
    description:
      "Un robot telegram qui envoie une alerte lorsqu'il détecte un swap sur le contrat DynBTC ou sur le contrat DynETH.",
    descriptionEN:
      "A telegram bot that sends an alert when it detects a swap on the DynBTC or on the DynETH contract.",
    tags: [
      ["Node.js", "pink"],
      ["node-telegram-bot-api", "yellow"],
      ["Alchemy", "red"],
      ["Web3.js", "red"],
    ],
    github: "https://github.com/Roro3831/Dyna-Bot-Telegram",
    site: "",
  },
];
