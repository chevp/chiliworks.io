import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import EventservicePage from '../pages/EventservicePage.vue'
import EventtechnikPage from '../pages/EventtechnikPage.vue'
import FestinstallationenPage from '../pages/FestinstallationenPage.vue'
import UeberUnsPage from '../pages/UeberUnsPage.vue'
import KontaktPage from '../pages/KontaktPage.vue'

const routes = [
  { path: '/', name: 'home', component: HomePage },
  { path: '/eventservice', name: 'eventservice', component: EventservicePage },
  { path: '/eventtechnik', name: 'eventtechnik', component: EventtechnikPage },
  { path: '/festinstallationen', name: 'festinstallationen', component: FestinstallationenPage },
  { path: '/ueber-uns', name: 'ueber-uns', component: UeberUnsPage },
  { path: '/kontakt', name: 'kontakt', component: KontaktPage },
]

export default createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() { return { top: 0 } },
})
