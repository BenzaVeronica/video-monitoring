import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import * as enData from "./translations/en.json";
import * as ruData from "./translations/ru.json";

export const resources = {
	"en-US": {
		translation: enData,
	},
	"ru-RU": {
		translation: ruData,
	},
};

i18n.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		resources,
		lng: "ru-RU",
		fallbackLng: ["en-US", "ru-RU"],
		// debug: true,
		interpolation: {
			escapeValue: false,
		},
	});

export default i18n;
