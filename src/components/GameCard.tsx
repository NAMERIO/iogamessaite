import React from "react";
import { Link } from "react-router-dom";

interface GameCardProps {
  game: {
    id: string;
    name: string;
    thumbnail: string;
    hot?: boolean;
  };
}

const GameCard: React.FC<GameCardProps> = ({ game }) => {
  return (
    <div className="game-card" style={{ position: "relative" }}>
      {game.hot && (
        <img
          src="/assets/icons/ui/fire.png"
          alt="Hot game"
          style={{
            position: "absolute",
            top: "10px",
            left: "10px",
            width: "40px",
            height: "40px",
            zIndex: 10,
          }}
        />
      )}
      <img
        src={game.thumbnail}
        alt={`${game.name} thumbnail`}
        style={{ width: "100%", borderRadius: "8px" }}
      />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          marginTop: "8px",
        }}
      >
        <h3>{game.name}</h3>
      </div>
      <Link to={`/games/${game.id}`}>
        <button>Play Now</button>
      </Link>
    </div>
  );
};

export default GameCard;
