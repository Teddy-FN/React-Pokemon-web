import React, { useEffect } from "react";
import "i18n/config";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { useTranslation } from "react-i18next";

// Pages
const Login = React.lazy(() => import("components/Pages/Auth"));
const PokemonList = React.lazy(() => import("components/Pages/Pokemon"));
const PokemonDetail = React.lazy(
  () => import("components/Pages/Pokemon/PokemonDetail"),
);
const Location = React.lazy(() => import("components/Pages/Location"));
const Games = React.lazy(() => import("components/Pages/Games"));
const Berry = React.lazy(() => import("components/Pages/Berry"));

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
          <Route index path="/" element={<PokemonList />} />
          <Route path="/login" element={<Login />} />
          <Route path="/pokemon/:name/:id" element={<PokemonDetail />} />

          <Route path="/games" element={<Games />} />
          <Route path="/location" element={<Location />} />
          <Route path="/berry" element={<Berry />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
