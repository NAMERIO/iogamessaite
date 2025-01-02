export interface Game {
  id: string;
  name: string;
  description: string;
  url: string;
  thumbnail: string;
  genre: string[];
  releaseDate: string;
  hot?: boolean;
}

const games: Game[] = [
  {
    id: "survev",
    name: "Survev.io",
    description: "Battle Royale game in 2D.",
    url: "https://survev.io",
    thumbnail: "/assets/survev-thumbnail.png",
    genre: ["Shooter", "Action"],
    releaseDate: "2025-01-01",
    hot: true,
  },
  {
    id: "battledudes",
    name: "BattleDudes.io",
    description: "Multiplayer tactical shooter.",
    url: "https://battledudes.io",
    thumbnail: "/assets/battledudes-thumbnail.png",
    genre: ["Shooter", "Action"],
    releaseDate: "2025-01-01",
  },
  {
    id: "suroi",
    name: "Suroi.io",
    description: "Battle Royale game in 2D.",
    url: "https://suroi.io",
    thumbnail: "/assets/suroi-thumbnail.png",
    genre: ["Shooter", "Action"],
    releaseDate: "2025-01-01",
    hot: true,
  },
  {
    id: "krunker",
    name: "Krunker.io",
    description: "Fast-paced multiplayer FPS game.",
    url: "https://krunker.io",
    thumbnail: "/assets/krunker-thumbnail.png",
    genre: ["Shooter", "Action"],
    releaseDate: "2025-01-01",
  },
  {
    id: "slither",
    name: "Slither.io",
    description: "Snake-based multiplayer arcade game.",
    url: "https://slither.io",
    thumbnail: "/assets/slither-thumbnail.png",
    genre: ["Casual","Strategy"],
    releaseDate: "2025-01-01",
  },
  {
    id: "arras",
    name: "Arras.io",
    description: "Multiplayer tank battle game.",
    url: "https://arras.io/",
    thumbnail: "/assets/arras-thumbnail.png",
    genre: ["Casual","Strategy"],
    releaseDate: "2025-01-01",
  },
  {
    id: "zomieroyal",
    name: "Zombsroyale.io",
    description: "Battle Royale game with zombie themes.",
    url: "https://zombsroyale.io/",
    thumbnail: "/assets/zombsroyale-thumbnail.png",
    genre: ["Shooter", "Action"],
    releaseDate: "2025-01-01",
  },
  {
    id: "taming",
    name: "Taming.io",
    description: "Survival and pet taming game.",
    url: "https://taming.io/",
    thumbnail: "/assets/taming-thumbnail.png",
    genre: ["Simulation","Strategy", "Action"],
    releaseDate: "2025-01-01",
  },
  {
    id: "starblast",
    name: "Starblast.io",
    description: "Survival and pet taming game.",
    url: "https://starblast.io/",
    thumbnail: "/assets/starblast-thumbnail.png",
    genre: ["Shooter", "Action"],
    releaseDate: "2025-02-01",
  },
  {
    id: "bloxd",
    name: "Bloxd.io",
    description: "Survival and pet taming game.",
    url: "https://bloxd.io/",
    thumbnail: "/assets/bloxd-thumbnail.png",
    genre: ["Adventure", "Strategy", "Action", "Simulation"],
    releaseDate: "2025-02-01",
  },
  {
    id: "kour",
    name: "Kour.io",
    description: "Survival and pet taming game.",
    url: "https://kour.io/",
    thumbnail: "/assets/kour-thumbnail.png",
    genre: ["Shooter", "Action"],
    releaseDate: "2025-02-01",
  },
  {
    id: "lolbeans",
    name: "Lolbeans.io",
    description: "Survival and pet taming game.",
    url: "https://lolbeans.io/",
    thumbnail: "/assets/lolbeans-thumbnail.png",
    genre: ["Race",],
    releaseDate: "2025-02-01",
  },
  // {
  //   id: "paper",
  //   name: "Paper.io",
  //   description: "Territory-conquering casual game.",
  //   url: "https://paper.io",
  //   thumbnail: "/assets/paper-thumbnail.png",
  //   genre: "Casual",
  //   releaseDate: "2018-01-15",
  // },
  // {
  //   id: "zombs",
  //   name: "Zombs.io",
  //   description: "Multiplayer base-building survival game.",
  //   url: "https://zombs.io/",
  //   thumbnail: "/assets/zombs-thumbnail.png",
  //   genre: "Survival",
  //   releaseDate: "2017-05-10",
  // },
];


export default games;
