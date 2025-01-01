export interface Game {
  id: string;
  name: string;
  description: string;
  url: string;
  thumbnail: string;
  genre: string;
  releaseDate: string;
}

const games: Game[] = [
  {
    id: "survev",
    name: "Survev.io",
    description: "Battle Royale game in 2D.",
    url: "https://survev.io",
    thumbnail: "/assets/surviv-thumbnail.png",
    genre: "Shooter",
    releaseDate: "2017-10-01",
  },
  {
    id: "battledudes",
    name: "BattleDudes.io",
    description: "Multiplayer tactical shooter.",
    url: "https://battledudes.io",
    thumbnail: "/assets/battledudes-thumbnail.png",
    genre: "Shooter",
    releaseDate: "2020-05-15",
  },
  {
    id: "suroi",
    name: "Suroi.io",
    description: "Battle Royale game in 2D.",
    url: "https://suroi.io",
    thumbnail: "/assets/suroi-thumbnail.png",
    genre: "Shooter",
    releaseDate: "2020-05-15",
  },

  // refuse to connect error
  // {
  //   id: "agar",
  //   name: "Agar.io",
  //   description: "Massive online multiplayer game.",
  //   url: "https://agar.io/",
  //   thumbnail: "/assets/agar-thumbnail.png",
  //   genre: "Casual",
  //   releaseDate: "2015-04-28",
  // },
];

export default games;
