import Vue from 'vue'
import App from './app'
import router from './router/router'

new Vue({
  el: '#app',
  components:{
    App
  },
  template:'<App/>',
  /*render: h => h(app),*/
  router,
})
