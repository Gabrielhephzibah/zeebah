import Vue from 'vue';
import VueResource from 'vue-resource'
import App from './App.vue';
import router from './router';
// import store from './store';


Vue.config.productionTip = false
 Vue.use(VueResource);


 //global config
 Vue.http.headers.common['X-Requested-With'] = 'XMLHttpRequest';
 Vue.http.headers.common['Access-Control-Allow-Origin'] = '*';


new Vue({
	// store,
  router,
  render: h => h(App)
}).$mount('#app');
