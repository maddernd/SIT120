import Vue from 'vue'
import Router from 'vue-router'
import Home from '/src/views/Home.vue'
import Advice from '/src/views/Advice.vue'
import Photo from '/src/components/Photo.vue'
import gallery from '/src/views/Gallery.vue'
import MyPhoto from '/src/components/MyPhotos.vue'
import mysharpei from '/src/views/MySharpei.vue'
import Login from '/src/views/Login'
import SignUp from '/src/views/SignUp'
import PageNotFound from '/src/components/PageNotFound'
import SearchPage from '/src/views/SearchPage'

Vue.use(Router)
let baseRoutes = [
   {
        path: '/',
        name: 'base',
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
        component: Advice,
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
        component: () => { return import('/src/components/TakePhoto.vue') }
    },
    {
        path: '/Contact',
        name: 'Contact',
        component: () => { return import('/src/components/Contact.vue') }
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
      },
      {
        path: '/signup',
        name: 'SignUp',
        component: SignUp
      },
      {
        path: '/Search',
        name: 'Search',
        component: SearchPage
      },
      {
        path: '*',
        name: 'PageNotFound',
        component: PageNotFound
      }
]

//Router file for setting the app routes to various URL paths and pages
const router =  new Router({
    mode: 'history',
    linkExactActiveClass: 'active',
    base: process.env.BASE_URL,
    routes: baseRoutes,
    //Here we say base URL redirects to Home, later this will redirect to login

})

router.beforeEach((to, from, next) => {
    // redirect to login page if not logged in and trying to access a restricted page
    const publicPages = ['/login', '/signup']
    const authRequired = !publicPages.includes(to.path)
    const loggedIn = localStorage.getItem('user')
    if (authRequired && !loggedIn) {
      return next('/login')
    }
    next()
  })
export default router


