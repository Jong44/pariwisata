import './assets/main.css'
import '@/assets/iconsax/style.css'

import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab} from '@fortawesome/free-brands-svg-icons'
import { far} from '@fortawesome/free-regular-svg-icons'

import VueGoogleMaps from '@fawmi/vue-google-maps'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

library.add(fas)
library.add(fab)
library.add(far)
dom.watch()

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(VueGoogleMaps, {
    load:{
        key: "AIzaSyBEIDtDEJ7rU8xnMBjNH2_D2D-2lc_bmS8",
        libraries: "places"
    }
})

app.use(router)

app.mount('#app')
