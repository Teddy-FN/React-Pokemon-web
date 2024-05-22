import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import detector from "i18next-browser-languagedetector";
import backend from "i18next-http-backend";
import translationEn from "./en/translation.json";
import translationId from "./id/translation.json";

i18next
  .use(backend)
  .use(detector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    detection: {
      order: ["querystring", "navigator"],
      lookupQuerystring: "lng",
    },
    supportedLngs: ["en", "id"],
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: translationEn,
      },
      id: {
        translation: translationId,
      },
    },
  });
