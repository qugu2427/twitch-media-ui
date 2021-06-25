import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import VueSocketIOExt from 'vue-socket.io-extended';
import { io } from 'socket.io-client';
import VueYoutube from 'vue-youtube'

const socket = io('https://api.4weird.org');

Vue.use(VueSocketIOExt, socket);
Vue.use(VueYoutube)

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
