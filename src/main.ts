import { createApp } from "vue";
import App from "./App.vue";

import { usePreferredLanguages } from "@vueuse/core";
import { createVuesticEssential, VaButton } from "vuestic-ui";
// @ts-ignore
import "vuestic-ui/styles/essential.css";
// @ts-ignore
import "vuestic-ui/styles/reset.css";

import router from "@/router";

import {
  createI18n,
  DefaultDateTimeFormatSchema,
  IntlDateTimeFormat,
} from "vue-i18n";
import { fr } from "./i18n/fr-FR";
import { en } from "./i18n/en-US";

type MessageSchema = typeof en.translations;

const i18n = createI18n<[MessageSchema], "en" | "fr">({
  locale: usePreferredLanguages().value.at(0),
  fallbackLocale: "en",
  messages: {
    fr: fr.translations,
    en: en.translations,
  },
  datetimeFormats: {
    fr: fr.datetimeFormats,
    en: en.datetimeFormats,
  },
});

const app = createApp(App)
  .use(i18n)
  .use(router)
  .use(createVuesticEssential({ components: { VaButton } }))
  .mount("#app");
