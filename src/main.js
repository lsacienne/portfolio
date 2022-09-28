import { createApp } from 'vue'
import App from './App.vue'
import { createVuesticEssential, VaButton } from 'vuestic-ui'
import 'vuestic-ui/styles/essential.css'
import 'vuestic-ui/styles/reset.css'

createApp(App).use(createVuesticEssential({ components: { VaButton } })).mount('#app')
