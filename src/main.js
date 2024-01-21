import { createApp } from 'vue'
import App from './App.vue'
import { createVuesticEssential, VaButton } from 'vuestic-ui'
import 'vuestic-ui/styles/reset.css'
import router from './router'
import i18n from '@/i18n/index.js'

createApp(App)
    .use(router)
    .use(i18n)
    .use(createVuesticEssential({ components: { VaButton } }))
    .mount('#app')
