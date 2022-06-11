import React, { useEffect } from "react";
import Navigation from "../Navigation";
import Menu from "../Menu";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../../../actions";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.getAllDatasPokemon);
  }, []);
  return (
    <div className="layout">
      <Navigation />
      <Menu />
    </div>
  );
};

export default Home;
