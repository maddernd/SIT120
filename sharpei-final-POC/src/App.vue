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
    <!--Main website footer with contact details -->
    <footer class="site-footer">
      <div class="container" background="#FFC107">
        <div class="row" background="#FFC107">
          <div class="footer">
            <p class="text-justify">
              <i>Contact - Daniel Maddern </i> Email: Maddernd@deakin.edu.au
            </p>
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
//CSS to display the routed component placement
.comproute {
  position: fixed;
  top: 15%;
  bottom: 15%;
}
//Footer contact info CSS
.site-footer {
  background-color: #ffc107;
  position: fixed;
  display: block;
  font-size: 6pt;
  left: 0;
  right: 0;
  bottom: 0;
  text-align: center;
  max-height: 5%;
  font-size: 1;
}
.container {
  background-color: "#FFC107";
  height: 2%;
  width: 100%;
  text-align: center;
}
.text-justify {
  font-size: 1;
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
  //overflow-clip-margin: hidden;
  overflow-y: hidden;
}
#app {
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow-y: hidden;
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
//Mobile CSS
@media screen and (max-width: 759px) {
  .comproute {
    position: relative;
    overscroll-behavior-x: hidden;
  }
  .site-footer {
    background-color: #ffc107;
    position: relative;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 2px 2px 2px #ccc;
    text-align: center;
  }
  .container {
    background-color: "#FFC107";
    height: 5%;
    width: 100%;
    box-shadow: 2px 2px 2px #ccc;
    text-align: center;
  }
}
</style>