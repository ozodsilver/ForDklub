import { createApp } from "vue";
import App from "./App.vue";
import router from "./routes/router.js";
// import "././assets/index.css";
import 'mdb-vue-ui-kit/css/mdb.min.css';
import 'atropos/scss'
let app = createApp(App);

import { createPinia } from "pinia";

const pinia = createPinia();
app.use(router);
app.use(pinia);

app.mount("#app");
