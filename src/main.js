// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// 导入路由包
import router from './router'
import 'mint-ui/lib/style.css'
import { Header, Swipe, SwipeItem } from 'mint-ui';
import '../lib/MUI/css/mui.min.css'
import '../lib/MUI/css/icons-extra.css'
// 注册轮播图
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
// 注册顶部
Vue.component(Header.name, Header);

// 导入vue-resource
import VueResource from 'vue-resource'
// 安装vue-resource
Vue.use(VueResource)


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
