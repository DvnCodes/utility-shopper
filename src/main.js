import Vue from "vue";
// import router from "./router";
import App from "./Components/App.vue";
import Vuex from "vuex";
import "es6-promise/auto";

Vue.use(Vuex);

new Vue({
  el: "#app",
  render: (h) => h(App),
  template: "<App/>",
  components: { App },
});

new Vuex.Store({});
