import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './assets/main.css'

import HomeView from './views/HomeView.vue'
import WorkView from './views/WorkView.vue'
import AboutView from './views/AboutView.vue'
import ContactView from './views/ContactView.vue'
import FondaAIView from './views/work/FondaAIView.vue'
import FoodAppView from './views/work/FoodAppView.vue'
import GHDView from './views/work/GHDView.vue'
import IKEAView from './views/work/IKEAView.vue'
import IntellectView from './views/work/IntellectView.vue'

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior() {
    return { top: 0 }
  },
  routes: [
    { path: '/', component: HomeView, meta: { title: 'Ivan Loyola — Frontend Developer & AI Builder' } },
    { path: '/work', component: WorkView, meta: { title: 'Work — Ivan Loyola' } },
    { path: '/work/fonda-ai', component: FondaAIView, meta: { title: 'Fonda AI — Ivan Loyola' } },
    { path: '/work/food-app', component: FoodAppView, meta: { title: 'Recipe & Food App — Ivan Loyola' } },
    { path: '/work/ghd', component: GHDView, meta: { title: 'GHD Govstack — Ivan Loyola' } },
    { path: '/work/ikea', component: IKEAView, meta: { title: 'IKEA Canada — Ivan Loyola' } },
    { path: '/work/intellect', component: IntellectView, meta: { title: 'Intellect Design Arena — Ivan Loyola' } },
    { path: '/about', component: AboutView, meta: { title: 'About — Ivan Loyola' } },
    { path: '/contact', component: ContactView, meta: { title: 'Contact — Ivan Loyola' } },
  ]
})

router.afterEach((to) => {
  const title = to.meta.title as string
  if (title) document.title = title
})

createApp(App).use(router).mount('#app')
