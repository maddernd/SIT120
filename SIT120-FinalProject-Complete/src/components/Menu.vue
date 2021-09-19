<template>
  <!--Main Navigation Menu HTML for the application, using some internal CSS and external CSS below -->
  <nav class="nav" fixed="top">
    <!--Here I set the back ground colour of the navigation click referecne -->
    <ul ref="nav">
      <figure class="Logo" @click="toggleNav">
        <img :src="imagePath" height="40px" width="40px" />
      </figure>
      <!-- v for statement and some listeners to change the background when you hover over the menu items-->
      <li
        v-for="(link, index) in navLinks"
        :key="index"
        @mouseenter="
          $event.currentTarget.style.background = hoverBackground || '#999'
        "
        @mouseleave="$event.currentTarget.style.background = background"
      >
        <!-- This is my router link to propergate our router links-->
        <router-link :to="link.path">
          {{ link.text }}
          <i :class="link.icon" />
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: [
    "navLinks",
    "background",
    "linkColor",
    "hoverBackground",
    "imagePath",
  ],
  //method to toggle navigation menu
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
  computed: {
    isLoggedIn() {
      return !!Window.localStorage.getItem("token");
    },
  },
};
</script>

<style scoped lang="scss">
//Chosen font
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap");
//This is the CSS (SCSS) for stylings of the menu section of the application
.nav {
  position: fixed;
  top: 0;
  height: 50px;
  width: 100%;
  z-index: 200;
  box-shadow: 2px 2px 2px #ccc;
  background: linear-gradient(45deg, #ffc107, #ff6f00);
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
    z-index: 400;

    figure {
      cursor: pointer;
      margin-right: 10px;
    }
    a {
      text-decoration: none;
      display: flex;
      flex-direction: row-reverse;
      align-items: right;
      z-index: 400;
    }
    //Icon CSS
    i {
      margin-right: 10px;
      font-size: 16px;
      z-index: 400;
    }
    li {
      list-style-type: none;
      padding: 10px 20px;
      font-size: 12px;
      font-family: "Montserrat", sans-serif;
      font-weight: bold;
    }
  }
}
//SCSS stylings for the mobile version of the site
@media screen and (max-width: 759px) {
  .nav {
    background: linear-gradient(to left, #ffc107, #ff6f00);

    ul {
      position: fixed;
      display: flow-root;
      width: 300px;
      max-height: 100%;
      flex-direction: column;
      max-height: 100%;
      left: -240px;
      transition: 300ms ease all;
      background: linear-gradient(45deg, #ffc107, #ff6f00);
      top: 50px;
      &.active {
        left: 0px;
      }

      figure {
        position: fixed;
        padding-top: 1%;
        top: 0;
        left: 0;
        z-index: 400;
      }
      li {
        width: 100%;
        padding-left: 0;
        padding-right: 0;
      }
      a {
        flex-direction: row;
        justify-content: space-between;
        margin-right: 13px;
      }
    }
  }
}
</style>