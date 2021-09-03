import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import advice from './views/Advice.vue'
import Photo from './components/Photo.vue'
import gallery from './views/Gallery.vue'
import MyPhoto from './components/MyPhotos.vue'
import MyGallery from './components/MyGallery.vue'
import myphoto from './views/MyPhoto.vue'
import mysharpei from './views/MySharpei.vue'

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
    // redirect home to home
    {
        path: '/home',
        name: 'home',
        component: Home
    },
    //route for mysharpei gallery
    {
        path: '/mysharpei',
        name: 'mysharpei',
        component: mysharpei
    },
    {
        path: '/myphoto/:id',
        name: 'myphoto',
        component: MyPhoto
    },
    //Route for Advice Page
    {
        path: '/advice',
        name: 'advice',
        component: advice,
    },
    //Route for gallery page to display the gallery of all images
    {
        path: '/gallery',
        name: 'gallery',
        component: gallery,
    },
    //Route for Photo ID to enlarge thumbnail photos
    {
        path: '/photo/:id',
        name: 'photo',
        component: Photo,
    },
    //Route for Uploads to take photo or upload photo
    {
        path: '/upload',
        name: 'uploadphoto',
        component: () => { return import('./components/TakePhoto.vue') }
    },
    {
        path: '/Contact',
        name: 'Contact',
        component: () => { return import('./components/Contact.vue') }
    }
    ]
})