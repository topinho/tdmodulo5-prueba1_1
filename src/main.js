import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import Util from './util.js'

import ClienteConP from './components/ClienteConP'
import ClienteSinP from './components/ClienteSinP'

Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(Util)
Vue.prototype.$util = Util
Vue.config.productionTip = false

const router = new VueRouter({
  routes: [
    { path: '/clientes-con-p', component: ClienteConP },
    { path: '/clientes-sin-p', component: ClienteSinP }
  ]
})

const store = new Vuex.Store({
  state: {
    lista: Util.clientes,
    color: Util.generar_color()
  },
  mutations: {
    DAME_COLOR (state) {
      state.color = Util.generar_color()
    }
  }
})
new Vue({
  render: h => h(App),
  router: router,
  store: store
}).$mount('#app')
