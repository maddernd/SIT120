import Vue from 'vue'
import App from './App.vue'
import router from '/src/Config/router'
import store from '@/store/store'
import './Config/registerServiceWorker'
import GoogleAuth from '/src/Config/google_oAuth.js'
import * as VueGoogleMaps from "vue2-google-maps"

//import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";

//const app = initializeApp(firebaseConfig);
////const analytics = getAnalytics(app);

Vue.config.productionTip = false
//google maps API key
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyDarqxlDPzPxLj-wo-srCQptTO08-4nKV0",
    libraries: "places"
  }
});

const firebaseConfig = {
  apiKey: "AIzaSyBvRrqdjtmkU9zj4qSRgeRKr1eFAVwfC7s",
  authDomain: "sharpeifinalproject.firebaseapp.com",
  projectId: "sharpeifinalproject",
  storageBucket: "sharpeifinalproject.appspot.com",
  messagingSenderId: "787796110581",
  appId: "1:787796110581:web:17e621a550580fefcf69bc",
  measurementId: "G-21PV04Q78B"
};

//google auth connector

const gauthOption = {
  clientId: '361411819346-l2rgopmf1e7j0v0ev67sfcbrr33klueh.apps.googleusercontent.com',
  scope: 'profile email',
  prompt: 'select_account'
}
Vue.use(GoogleAuth, gauthOption)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
