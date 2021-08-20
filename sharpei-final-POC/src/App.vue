<template>
  <!--Main Entry point for Application, we call the Menu component and some basic menu items -->
  <div id="app">
    <!--Here we call the menu component from components folder with its settings -->
    <Menu
      :nav-links="navLinks"
      :image-path="require('./assets/newlogo.png')"
      background="#FFC107"
      link-color="#212121"
      hoverBackground="#FFECB3"
    />
    <router-view class="comproute" />
     <footer class="site-footer">
      <div class="container" background="#FFC107">
        <div class="row" background="#FFC107">
          <div class="col-sm-12 col-md-6">
            <h6>Contact</h6>
            <p class="text-justify"><i>Daniel Maddern </i> Email: Maddernd@deakin.edu.au</p>
         </div>
        </div>
      </div>
        </footer>
     
  </div>
  
</template>

<script>
import Menu from "@/components/Menu";

export default {
  components: {
    Menu,
  },
  //Add the nav Link items for my menu with a small Icon for each menu item
  data: () => ({
    navLinks: [
      {
        text: "Home",
        path: "/home",
        icon: "ion-ios-contact",
      },
      {
        text: "My Sharpei",
        path: "/mysharpei",
        icon: "ion-ios-heart-empty",
      },
      {
        text: "All Sharpeis",
        path: "/gallery",
        icon: "ion-ios-photos",
      },
      {
        text: "Take/Upload Photo",
        path: "/upload",
        icon: "ion-ios-camera",
      },
      {
        text: "Sharpei Advice",
        path: "/advice",
        icon: "ion-ios-medkit",
      },
      {
        text: "",
        path: "/home",
        icon: "ion-ios-search",
      },
    ],
  }),
  methods: {
    //handleScroll(event) {
    // Any code to be executed when the window is scrolled
    // this.isUserScrolling = (window.scrollY > 0);
    // this(vuePositionSticky)
    // },
  },
};
</script>

<style lang="scss">
//Import the icons for unpkg that we use above
@import "https://unpkg.com/ionicons@4.2.2/dist/css/ionicons.min.css";
.comproute {
  position: relative;
  top: 20px;
  overflow: hidden;
}
.site-footer{
  background-color:"#FFC107";
}

figure {
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 8px;
  margin-inline-end: 0;
}

body {
  margin: 0;
  position: flex;
  padding-top: 50px;
  overflow-clip-margin: hidden;
}
#app {
  font-family: "Montserrat", sans-serif;
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
      color: #b9b142;
    }
  }
}
@media screen and (max-width: 759px) {
  .comproute {
    position: relative;
  }
}
</style>