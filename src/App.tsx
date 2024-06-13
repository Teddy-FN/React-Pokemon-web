import React, { useEffect } from "react";
import "i18n/config";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

// PAGES
import Login from "./components/Pages/Auth";
import Home from "./components/Pages/Home";
import Location from "components/Pages/Location";
import Games from "components/Pages/Games";
import Berry from "components/Pages/Berry";
import { useTranslation } from "react-i18next";

// State
import useStoreLanguage from "state/language";
import useStoreTheme from "state/theme";

function App() {
  const { i18n } = useTranslation();
  const language = useStoreLanguage();
  const theme = useStoreTheme();

  useEffect(() => {
    if (language.value) {
      i18n.changeLanguage(language.value);
    }
  }, [language.value]);

  useEffect(() => {
    if (theme.theme) {
      document.querySelector("html")?.classList.add("dark");
    } else {
      document.querySelector("html")?.classList.remove("dark");
    }
  }, [theme.theme]);

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

          <Route path="/games" element={<Games />} />
          <Route path="/location" element={<Location />} />
          <Route path="/berry" element={<Berry />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
