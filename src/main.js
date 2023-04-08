import { createApp } from "vue";
import App from "./App.vue";
import router from "./routes/router.js";
import "./style.css";
import 'mdb-vue-ui-kit/css/mdb.min.css';

let app = createApp(App);

import { createPinia } from "pinia";

const pinia = createPinia();
app.use(router);
app.use(pinia);


app.mount("#app");
