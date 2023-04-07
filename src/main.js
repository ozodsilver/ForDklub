import { createApp } from "vue";
import "./style.css";
import 'mdb-vue-ui-kit/css/mdb.min.css';
import router from "./routes/router.js";
import App from "./App.vue";
let app = createApp(App);

import { createPinia } from "pinia";

const pinia = createPinia();

app.use(pinia);

app.use(router);
app.mount("#app");
