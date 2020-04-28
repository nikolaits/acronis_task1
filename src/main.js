import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowRight, faNewspaper, faArchive, faBook, faBriefcase, faCalendar, faCartArrowDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faArrowRight)
library.add(faNewspaper)
library.add(faArchive)
library.add(faBook)
library.add(faBriefcase)
library.add(faCalendar)
library.add(faCartArrowDown)


Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
