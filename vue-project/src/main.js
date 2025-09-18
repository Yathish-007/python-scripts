// src/main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'

/* Import Font Awesome */
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faEnvelope, faDownload, faPrint } from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons' 

/* Add icons to the library */
library.add(faEnvelope, faLinkedinIn,faGithub,faDownload,faPrint)

const app = createApp(App)

app.use(router)

/* Register the component globally */
app.component('font-awesome-icon', FontAwesomeIcon)

router.isReady().then(() => {
  app.mount('#app')
})
