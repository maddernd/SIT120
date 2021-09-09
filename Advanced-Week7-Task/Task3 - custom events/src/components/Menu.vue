<template>
  <!--Main Navigation Menu HTML for the application, using some internal CSS and external CSS below -->
  <nav fixed="top" :style="{ background: background || 'rgb(221, 136, 0)' }">
    <!--Here we set the back ground colour of the navigation click referecne -->
    <ul :style="{ background: background || '#dd8800' }" ref="nav">
      <figure class="image-logo" @click="toggleNav">
        <img :src="imagePath" height="40px" width="40px" />
      </figure>
      <!-- v for statement and some listeners to change the background when you hover over the menu items-->
      <li
        v-for="(link, index) in navLinks"
        :key="index"
        @mouseenter="
          $event.currentTarget.style.background = hoverBackground || '#999'
        "
        @mouseleave="
          $event.currentTarget.style.background = background || '#FFC107'
        "
      >
        <!-- This is our router link to propergate our router links-->
        <router-link :to="link.path" :style="{ color: linkColor || '#dd8800' }">
          {{ link.text }}
          <i :class="link.icon" />
        </router-link>
      </li>
      <!--Search Box for Photos from Menu only displayed on desktop In Final version this will be a dynamic component -->
      <input class="search" v-show="!mobile" type="text" placeholder="Search.." />
    </ul>
  </nav>
 
</template>

<script>
//Below we export hte component and its props and have a basic Method to toggle the Navigation
export default {
  props: [
    "navLinks",
    "background",
    "linkColor",
    "hoverBackground",
    "imagePath",
  ],
  methods: {
    toggleNav() {
      const nav = this.$refs.nav.classList;
      nav.contains("active") ? nav.remove("active") : nav.add("active");
    },
    //return mobile when certain window size limit is reached
    data() {
      return {
        mobile: window.innerWidth <= 759,
      };
    },
    created() {
      addEventListener("resize", () => {
        this.mobile = innerWidth <= 759;
      });
    },
  },
};
</script>

<style scoped lang="scss">
//Chosen font
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap");
//This is the CSS (SCSS) for stylings of the menu section of the application
nav {
  position: fixed;
  top: 0;
  height: 50px;
  width: 100%;
  box-shadow: 2px 2px 2px #ccc;
  .h1 {
    font-family: "Montserrat", sans-serif;
  }
  
  ul {
    //Lign up menu items and add shadowing to box
    display: flex;
    height: 100%;
    align-items: center;
    margin-block-start: 0;
    margin-block-end: 0;
    padding-inline-start: 0;
    box-shadow: 2px 2px 2px #ccc;

    figure {
      cursor: pointer;
      margin-right: 10px;
      
    }
    a {
      text-decoration: none;
      display: flex;
      flex-direction: row-reverse;
      align-items: right;
    }
    //Icon CSS
    i {
      margin-right: 10px;
      font-size: 16px;
    }
    li {
      list-style-type: none;
      padding: 10px 20px;
      font-size: 12px;
      font-family: "Montserrat", sans-serif;
    }
    //Search box css
    input {
      float: right;
      padding: 4px;
      border: none;
      position: relative;
      margin-top: 2px;
      margin-left: -60px;
      font-family: "Montserrat", sans-serif;
      font-size: 12px;
    }
  }
}
//SCSS stylings for the mobile version of the site
@media screen and (max-width: 759px) {
  nav {
    ul {
      position: absolute;
      width: 300px;
      flex-direction: column;
      max-height: 100%;
      left: -240px;
      transition: 300ms ease all;
      top: 50px;
      background-color:#FFC107;
      &.active {
        left: 0px;
      }
      figure {
        position: fixed;
        z-index: 1;
        top: 10px;
        left: 2px;
      }
      li {
        width: 100%;
        padding-left: 0;
        padding-right: 0;
        background-color:#FFC107;
      }
      a {
        flex-direction: row;
        margin-left: 20px;
        justify-content: space-between;
        margin-right: 13px;
      }
    }
  }
}
</style>