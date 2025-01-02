import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import DATA_EN from "@/locales/en.json"
import DATA_AR from "@/locales/ar.json"

const resources = {
  en: {
    translation: DATA_EN
  },
  ar: {
    translation: DATA_AR
  },
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  // .use(HttpApi)
  .init({
    resources,
    fallbackLng: "en",
    detection: {
      order: [
        "cookie",
        "localStorage",
        "htmlTag",
      ],
      cache: "cookie",
    },
    // backend: {
    //   loadPath: '/locales/{{lng}}/translation.json',
    // }
  });

export default i18n;
