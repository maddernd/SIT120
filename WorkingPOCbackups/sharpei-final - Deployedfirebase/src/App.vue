<template>
<!--Main Entry point for Application, we call the Menu component and some basic menu items -->
  <div id="app">
    <Menu
		:nav-links="navLinks"
		:image-path="require('./assets/logo.png')"
		background="#FFC107"
		link-color="#212121"
		hoverBackground="#FFECB3"
    />
    <router-view/>
  </div>
</template>

<script>
import Menu from '@/components/Menu'
export default {
  components: {
    Menu
  },
  //Add the nav Link items for my menu with a small Icon for each menu item
  data: () => ({
    navLinks: [
      {
        text: 'Home',
		path: '/home',
		icon: 'ion-ios-contact'
      },
      {
        text: 'My Sharpei',
		path: '/mysharpei',
		icon: 'ion-ios-camera'
      },
      {
        text: 'All Sharpeis',
		path: '/allsharpeis',
		icon: 'ion-ios-contacts'
      },
      {
        text: 'Forum',
		path: '/forum',
		icon: 'ion-ios-list-box'
      },
        {
        text: 'Sharpei Advice',
		path: '/advice',
		icon: 'ion-ios-medkit'
      }
    ]
  })
}
</script>

<style lang="scss">
//Import the icons for unpkg that we use above
@import 'https://unpkg.com/ionicons@4.2.2/dist/css/ionicons.min.css';
figure {
	margin-block-start: 0;
	margin-block-end: 0;
	margin-inline-start: 10px;
	margin-inline-end: 0;
}
body {
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

</style>