import { createApp } from 'vue'
import App from './App.vue'
import store from './store/index'
import router from './router/router'



const app = createApp(App)

// Install the store instance as a plugin
app.use(store)
app.use(router)
app.mount('#app')
