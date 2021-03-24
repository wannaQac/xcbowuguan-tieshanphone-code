import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import VideoPlayer from 'vue-video-player'
import 'lib-flexible/flexible'
Vue.use(VideoPlayer);

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  if(to.meta.title){
    document.title=to.meta.title
  }
  next()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
