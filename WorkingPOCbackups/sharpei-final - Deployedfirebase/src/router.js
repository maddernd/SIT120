import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import advice from './views/Advice.vue'
import Slider from './components/Slider.vue'
import AllSlider from './components/AllSlider.vue'
import mysharpei from './views/MySharpei.vue'
import allsharpeis from './views/AllSharpeis.vue'
import forum from './views/Forum.vue'

Vue.use(Router)
//Router file for setting the app routes to various URL paths and pages
export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    //Here we say base URL redirects to Home, later this will redirect to login
    routes: [{
            path: '/',
            name: 'home',
            component: Home
        },
        // the /home path also views the home page
        {
            path: '/home',
            name: 'home',
            component: Home
        },
        //myshaprei path returns the slider component created
        {
            path: '/mysharpei',
            name: 'mysharpei',
            component: () => { return import ('./components/Slider.vue') }
        },
        //advice path returns the advice view with links to various medical information
        {
            path: '/advice',
            name: 'advice',
            component: advice
        },
        //All sharpeis returns the thumbnail gallery component
        {
            path: '/allsharpeis',
            name: 'allsharpeis',
            component: () => { return import ('./components/AllSlider.vue') }
        },
        {
            path: '/forum',
            name: 'forum',
            component: () => { return import ('./views/Forum.vue') }
        }
    ]
})