import { createApp } from "vue";
import App from "./App.vue";

import router from "./router/index";
import store from "./store/index";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

import formCreate from "@form-create/element-ui";
import install from "@form-create/element-ui/auto-import";
formCreate.use(install);

createApp(App).use(router).use(store).use(ElementPlus).mount("#app");
