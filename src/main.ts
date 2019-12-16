import Vue from 'vue'
import VueRouter from 'vue-router'
import { router } from './router/router'

import vuetify from './plugins/vuetify'

import App from './App.vue'

Vue.config.productionTip = false

Vue.use(VueRouter);

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
