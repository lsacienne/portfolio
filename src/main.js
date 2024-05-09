import { createApp } from 'vue'
import App from './App.vue'
import { createVuesticEssential, VaButton } from 'vuestic-ui'
import 'vuestic-ui/styles/essential.css'
import 'vuestic-ui/styles/reset.css'
import router from '@/router'

const app = createApp(App).use(router).use(createVuesticEssential({ components: { VaButton } })).mount('#app');
