import React from "react";
import "i18n/config";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
// PAGES
// import "./components/Pages/Main/mainMenu.css";
import Login from "./components/Pages/Auth";
import Home from "./components/Pages/Home";
// import Store from "@/components/Pages/Store";
// import MainMenu from "@/components/Pages/Main";
// import PokemonPages from "@/components/Pages/PokemonPages";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />}>
            {/* <Route path="/" element={<MainMenu />} /> */}
            {/* <Route path="/store" element={<Store />} /> */}
            {/* <Route path="/pokemon" element={<PokemonPages />} /> */}
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
