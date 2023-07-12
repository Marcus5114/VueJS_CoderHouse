import { createApp } from 'vue'
import { plugin, defaultConfig } from '@formkit/vue'
import '@formkit/themes/genesis'
import App from './App.vue'

createApp(App).use(plugin, defaultConfig).mount('#app')
