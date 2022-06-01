import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Icons, Images } from "./assets";
// PAGES
import MainMenu from "./components/Pages/Main/MainMenu";
import Login from "./components/Pages/Login";

function App() {
  return (
    <Routes>
      <Route path="/home" element={<MainMenu />} exact />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
