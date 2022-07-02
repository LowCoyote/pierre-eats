import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import VueGoogleMaps from '@fawmi/vue-google-maps'
import * as VueRouter from 'vue-router'
import Home from './views/Home.vue'
import Restaurant from './views/Restaurant.vue'
import Order from './views/Order.vue'
import Settings from './views/Settings.vue'
import Account from './views/Account.vue'
import TestPage from './views/TestPage.vue'

loadFonts()

const router = VueRouter.createRouter({
history: VueRouter.createWebHistory(),
routes: [
    {
    path: '/',
    name: 'Home',
    component: Home
    },
    {
      path: '/restaurant',
      name: 'Restaurant',
      component: Restaurant
    },
    {
      path: '/order',
      name: 'Order',
      component: Order
    },
    {
      path: '/settings',
      name: 'Settings',
      component: Settings
    },
    {
      path: '/account',
      name: 'Account',
      component: Account
    },
    {
      path: '/test',
      name: 'Test',
      component: TestPage
    }
  ]
})


createApp(App)
  .use(vuetify)
  .use(router)
  .use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyC7q-w1vneQg108GreyIY8gfLG6kwZ_tfE',
        libraries: "places"
    },
  })
  .mount('#app')
