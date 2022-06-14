import React from "react";
import Navigation from "../Navigation";
import Menu from "../Menu";

import MainMenu from "../Main/MainMenu";
import { Routes, Route } from "react-router-dom";
import Store from "../Store";
import BottomMenu from "../BottomMenu";
import PokemonPages from "../PokemonPages";

const Home = () => {
  return (
    <div className="layout">
      <Navigation />
      <Menu />
      <BottomMenu />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainMenu />} />
          <Route path="/store" element={<Store />} />
          <Route path="/pokemon" element={<PokemonPages />} />
        </Routes>
      </div>
    </div>
  );
};

export default Home;
