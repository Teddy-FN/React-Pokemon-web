import React from "react";
// PAGES
import "./components/Pages/Main/mainMenu.css";
import Store from "./components/Pages/Store";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Login from "./components/Pages/Login";
import Home from "./components/Pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/login" element={<Login />} exact />
        <Route path="/store" element={<Store />} exact />
      </Routes>
    </Router>
  );
}

export default App;
