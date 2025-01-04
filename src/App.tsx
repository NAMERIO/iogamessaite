import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GameList from "./components/GameList";
import GameDetails from "./components/GameDetails";
import Account from "./components/Account";
import "./index.css";

const App: React.FC = () => {
  return (
    <Router>
      <Account />
      <Routes>
        <Route path="/" element={<GameList />} />
        <Route path="/games/:id" element={<GameDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
