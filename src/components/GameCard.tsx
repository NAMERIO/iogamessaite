import React from "react";
import { Link } from "react-router-dom";

interface GameCardProps {
  game: {
    id: string;
    name: string;
    thumbnail: string;
  };
}

const GameCard: React.FC<GameCardProps> = ({ game }) => {
  return (
    <div className="game-card">
      <img
        src={game.thumbnail}
        alt={`${game.name} thumbnail`}
        style={{ width: "100%", borderRadius: "8px" }}
      />
      <h3>{game.name}</h3>
      <Link to={`/games/${game.id}`}>
        <button>Play Now</button>
      </Link>
    </div>
  );
};

export default GameCard;
