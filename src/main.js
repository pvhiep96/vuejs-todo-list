import Vue from 'vue'
import App from './App.vue'
import store from './store'
import vuetify from './plugins/vuetify'
import {withAuth, withoutAuth} from './backend/axios'

Vue.config.productionTip = false
Vue.prototype.$withAuth = withAuth
Vue.prototype.$withoutAuth = withoutAuth
new Vue({
  render: h => h(App),
  vuetify,
  store,
}).$mount('#app')
