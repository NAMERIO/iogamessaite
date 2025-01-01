import React from "react";
import { useParams } from "react-router-dom";
import games from "../data/gamesData";

const GameDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const game = games.find((g) => g.id === id);

  if (!game) {
    return <p>Game not found!</p>;
  }

  const goFullScreen = () => {
    const iframe = document.getElementById("game-frame") as HTMLIFrameElement;
    if (iframe.requestFullscreen) {
      iframe.requestFullscreen();
    }
  };

  return (
    <div className="game-details">
      <h1 className="game-title">{game.name}</h1>
      <div className="iframe-container">
        <iframe
          id="game-frame"
          src={game.url}
          title={game.name}
          style={{
            width: "90%",
            maxWidth: "800px",
            height: "450px",
            border: "none",
            display: "block",
            margin: "0 auto",
            borderRadius: "8px",
          }}
        ></iframe>
        <img
          src="/assets/icons/ui/fullscreen.png"
          alt="Fullscreen"
          className="fullscreen-button"
          onClick={goFullScreen}
        />
      </div>
    </div>
  );
};

export default GameDetails;
