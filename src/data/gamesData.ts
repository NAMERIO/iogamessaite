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
    releaseDate: "2025-03-01",
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
    description: "A multiplayer obstacle course racing game inspired by Fall Guys.",
    url: "https://lolbeans.io/",
    thumbnail: "/assets/lolbeans-thumbnail.png",
    genre: ["Race", "Casual"],
    releaseDate: "2025-02-01",
  },
  {
    id: "defly",
    name: "defly.io",
    description: "A tactical shooter game with territorial control and upgrades.",
    url: "https://defly.io/",
    thumbnail: "/assets/defly-thumbnail.png",
    genre: ["Strategy", "Shooter"],
    releaseDate: "2025-02-01",
  },
  {
    id: "digdig",
    name: "digdig.io",
    description: "A survival and mining game where players dig to grow larger and avoid enemies.",
    url: "https://digdig.io/",
    thumbnail: "/assets/digdig-thumbnail.png",
    genre: ["Simulation", "Casual"],
    releaseDate: "2025-02-01",
  },
  {
    id: "shellshock",
    name: "Shellshock.io",
    description: "A multiplayer shooter game with eggs as characters in a free-for-all mode.",
    url: "https://shellshock.io/",
    thumbnail: "/assets/shellshock-thumbnail.png",
    genre: ["Shooter", "Action"],
    releaseDate: "2025-03-01",
  },
  {
    id: "copter",
    name: "Copter.io",
    description: "A multiplayer game where you control helicopters and battle other players.",
    url: "https://copter.io/",
    thumbnail: "/assets/copter-thumbnail.png",
    genre: ["Shooter", "Action"],
    releaseDate: "2025-02-01",
  },
  
];


export default games;
