import i18next from "i18next";
import resourcesToBackend from "i18next-resources-to-backend";
import { initReactI18next } from "react-i18next";

const savedLang = localStorage.getItem("lang") || "ru";

i18next
  .use(initReactI18next)
  .use(resourcesToBackend((language: string, namespace: string) => import(`../public/locales/${language}/${namespace}.json`)))
  .init({
    defaultNS: "translation",
    fallbackLng: "ru",
    lng: savedLang,
    returnEmptyString: false,
  });

export default i18next;
