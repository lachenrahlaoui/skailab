import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

window.$ = window.jQuery = require('jquery');

//import $ from 'jquery';



createApp(App)
  .use(store)
  .use(router)
  .mount("#app");