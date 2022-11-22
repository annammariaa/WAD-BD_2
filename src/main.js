import { createApp } from 'vue'
import App from './App.vue'
import store from './store/index'



const app = createApp(App)

// Install the store instance as a plugin
app.use(store)
app.mount('#app')
