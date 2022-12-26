import { createApp } from 'vue'
import './style.css'
import 'mdb-vue-ui-kit/css/mdb.min.css';
import router from './routes/router'
import App from './App.vue'
let app = createApp(App)
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})


app.use(vuetify)
app.use(router)
app.mount('#app')
