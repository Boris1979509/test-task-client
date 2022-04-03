import { createApp } from "vue";
import App from "@/App.vue";
import "@/assets/css/index.css";
import i18n from "@/plugins/i18n";
import router from "@/router";
import store from "@/store";
import components from "@/components/ui";

const app = createApp(App);

app.use(i18n).use(store).use(router);

// load components UI
components.forEach((component) => {
  app.component(component.name, component);
});

app.mount("#app");
