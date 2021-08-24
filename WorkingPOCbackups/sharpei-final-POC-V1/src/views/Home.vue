<template>
  <div class="home" style="padding-left: 16px">
    <h3>Welcome To Sharpei House</h3>
    <p>The App for all your Sharpei Needs.</p>
    <img
      class="sharpei"
      src="https://www.ctvsh.com/sites/default/files/styles/large/public/chinese-sharpei-dog-breed-info.jpg?itok=l4osr8eZ"
      alt="Sharpei"
    />
    <div>
      <button class="homebutton">Sharpei Of the Week</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
};
</script>
<style scoped>
.home {
  display: inline-block;
}
.homebutton {
  background-color: #ffc107;
  display: inline-block;
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
  max-width: 100%;
}
.sharpei {
  display: auto;
  max-width: 50%;
  max-height: 50%;
  align-items: center;
}
@media screen and (max-width: 759px) {
  .sharpei {
    display: auto;
    max-width: 50%;
    max-height: 50%;
    align-items: center;
  }
  .homebutton {
    max-width: 50%;
    font-size: 40%;
  }
  .home {
    display: inline-block;
    max-width: 50%;
    max-height: 60%;
  }
}
</style>