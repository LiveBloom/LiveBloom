import i18n, { Resource } from "i18next";
import { initReactI18next } from "react-i18next";

import enLocale from "../../../public/locales/en.json";

const resources: Resource = {
    en: {
        translation: enLocale
    }
}

i18n
    .use(initReactI18next)
    .init({
        lng: "en",
        resources,
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;