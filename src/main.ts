import { createApp } from "vue";
import App from "./App.vue";

import router from "./router/index";
import store from "./store/index";
import ElementPlus from "element-plus";
createApp(App)
    .use(router)
    .use(ElementPlus)

    .use(store)
    .mount("#app");
