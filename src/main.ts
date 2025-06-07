import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import components from './components/index'

const app = createApp(App)
app.use(components)
app.mount('#app')
