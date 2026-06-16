import { createApp } from "vue";
import App from "./App.vue";

import { createVuesticEssential, VaButton } from "vuestic-ui";
import "vuestic-ui/styles/essential.css";
import "vuestic-ui/styles/reset.css";

import router from "@/router";

import { createI18n } from "vue-i18n";
import { fr } from "./i18n/fr-FR";
import { en } from "./i18n/en-US";

const i18n = createI18n({
  locale: "fr",
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
