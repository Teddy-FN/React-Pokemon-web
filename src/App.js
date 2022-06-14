import React from "react";
// PAGES
import "./components/Pages/Main/mainMenu.css";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Login from "./components/Pages/Login";
import Home from "./components/Pages/Home";
import Store from "./components/Pages/Store";
import MainMenu from "./components/Pages/Main/MainMenu";
import PokemonPages from "./components/Pages/PokemonPages";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} exact />
        <Route path="/" element={<Home />} exact>
          <Route path="/" element={<MainMenu />} />
          <Route path="/store" element={<Store />} />
          <Route path="/pokemon" element={<PokemonPages />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
