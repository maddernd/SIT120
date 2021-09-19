<template>
  <!--Main Entry point for Application, we call the Menu component and some basic menu items -->
  <div id="app">
    <!--Here we call the menu component from components folder with its settings -->
    <Menu
      :nav-links="navLinks"
      :image-path="require('./assets/Logo.jpg')"
      link-color="#212121"
      hoverBackground="#FFECB3"
      background="transparent"
    />
    <div>
      <!--This is the login button pushes login route and hides once logged in - only working with refresh currently-->
      <button
        class="Login"
        v-show="!loggedin"
        @click="$router.push('login')"
        @change="$emit('loggedin')"
      >
        Login/Register
      </button>
    </div>
    
    <!--Search bar only shows once logged in-->
    <div class="Searchboxmain" >
      <SearchBar
      v-show="loggedin" />
      <button
      class="searchnow"
      v-show="loggedin"
      @click="$router.push('search')"
      >
      Search
      </button>
    </div>
     
    <!--Here we push in the router view of any components or views we need -->
    <router-view class="comproute" />
    <!--Main website footer with contact details -->
    <footer class="site-footer">
      <div class="container" background="#FFC107">
        <div class="row" background="#FFC107">
          <div class="footer">
            <p>powered by sharpei love</p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
//import
import Menu from "@/components/Menu";
import SearchBar from "@/components/SearchBar"

export default {
  components: {
    Menu,
    SearchBar,
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
        text: "Contact",
        path: "/Contact",
        icon: "ion-ios-call",
      },
    ],
    data: {
      loggedin: false
    },
  }),
  methods: {
    update(){
      this.$forceUpdate();
    }
  },
 
  //Computed property to get the logged in user, used for v-show directive of log in button
  computed: {
    loggedin() {
      if (localStorage.getItem("user"))
        return true;
      else 
        return false;
    },
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
  width: 100%;
}
//Footer contact info CSS
.site-footer {
  background: linear-gradient(45deg, #ffc107, #ff6f00);
  position: fixed;
  display: block;
  font-size: 6pt;
  left: 0;
  right: 0;
  bottom: 0;
  text-align: center;
  max-height: 5%;
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
  opacity: 50%;
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
  text-align: center;
  color: #2c3e50;
  max-width: 100%;
}
.Login {
  position: absolute;
  top: 1%;
  right: 2%;
  background: linear-gradient(45deg, #ffc107, #ff6f00);
  padding: 0.35em 1.2em;
  border: 0.1em solid #ffffff;
  margin: 0 0.3em 0.3em 0;
  box-sizing: border-box;
  text-decoration: none;
  font-family: "Montserrat", sans-serif;
  font-weight: 300;
  text-align: center;
  transition: all 0.2s;
  border-radius: 0.12em;
  max-width: 90%;
  z-index:500;
}
.Login:hover {
  color: #000000;
  background-color: #ffc107;
}
.searchnow{
  position: flex;
  background: linear-gradient(45deg, #ffc107, #ff6f00);
  padding: 0.35em 1.2em;
  border: 0.1em solid #ffffff;
  margin: 0 0.3em 0.3em 0;
  box-sizing: border-box;
  text-decoration: none;
  font-family: "Montserrat", sans-serif;
  font-weight: 300;
  text-align: center;
  transition: all 0.2s;
  border-radius: 0.12em;
  max-width: 50%;
  height: 25px;
}

#nav {
  padding: 30px;
  a {
    color: #2c3e50;
    &.router-link-exact-active {
      color: linear-gradient(45deg, #ffc107, #ff6f00);
    }
  }
}

.Searchboxmain {
  position: absolute;
  display: flex;
  z-index:300;
  top: 1%;
  right: 2%;
  margin: 0 0.3em 0.3em 0;
  box-sizing: border-box;
  text-decoration: none;
  font-family: "Montserrat", sans-serif;
  font-weight: 300;
  text-align: center;
  transition: all 0.2s;
  border-radius: 0.12em;
  width: 10%;
}
//Mobile CSS for the punch through area for the app
@media screen and (max-width: 759px) {
  .comproute {
    margin-left: 10%;
    margin-right: 10%;
    max-width: 100%;
    height: 80%;
  }
  .site-footer {
    background: linear-gradient(45deg, #ffc107, #ff6f00);
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 2px 2px 2px #ccc;
    text-align: center;
    max-width: 100%;
  }
  
  .container {
    background-color: "#FFC107";
    height: 5%;
    width: 100%;
    box-shadow: 2px 2px 2px #ccc;
    text-align: center;
  }
  #app {
    font-family: "Montserrat", sans-serif;
    text-align: center;
    color: #2c3e50;
    max-width: 90%;
  }
 
   .Searchboxmain {
    position: absolute;
    z-index:300;
    height : auto;
    display : flex;
    left: 40px;
    padding: 0.35em 1.2em;
    margin: 0 0.3em 0.3em 0;
    box-sizing: border-box;
    text-decoration: none;
    font-family: "Montserrat", sans-serif;
    font-weight: 300;
    text-align: center;
    transition: all 0.2s;
    border-radius: 0.12em;
    width : 270px;
  } 
};
</style>