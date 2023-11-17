import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import english from "../locales/en/translation.json";
import polish from "../locales/pl/translation.json";

const resources = {
  en: {
    translation: english,
  },
  pl: {
    translation: polish,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  debug: true,
  fallbackLng: "pl",
  interpolation: {
    escapeValue: false,
  },
  ns: "translation",
  defaultNS: "translation",
});

export default i18n;
