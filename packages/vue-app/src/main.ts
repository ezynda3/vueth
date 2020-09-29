import Vue from 'vue'
import VueTailwind from 'vue-tailwind'
import App from './App.vue'
import router from './router'
import store from './store'
import tailwindSettings from './vue-tailwind-settings'

Vue.config.productionTip = false
Vue.use(VueTailwind, tailwindSettings)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
