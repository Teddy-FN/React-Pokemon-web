import React, { useEffect } from "react";
import Navigation from "../Navigation";
import Menu from "../Menu";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../../../actions";

import MainMenu from "../Main/MainMenu";
import { Routes, Route } from "react-router-dom";
import Store from "../Store";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.getAllDatasPokemon);
  }, []);
  return (
    <div className="layout">
      <Navigation />
      <Menu />
      <Routes>
        <Route path="/" element={<MainMenu />} />
        <Route path="/store" element={<Store />} />
      </Routes>
    </div>
  );
};

export default Home;
