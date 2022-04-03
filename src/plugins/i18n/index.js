import { createI18n } from "vue-i18n";
import ru from "@/lang/ru.json";
import en from "@/lang/en.json";

/** Translate */
const i18n = createI18n({
  messages: {
    ru,
    en,
  },
  legacy: false,
  fallbackLocale: "en",
  locale: "ru", // default locale
  globalInjection: true,
});
export default i18n;
