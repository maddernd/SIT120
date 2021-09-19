<template>
  <div class="home" style="padding-left: 16px">
    <h3 class="header" >Welcome To Sharpei House</h3>
    <p class="para">The App for all your Sharpei Needs.</p>
    <!--Sharpei of the week image -->
    <img class="sharpei" :src="require('../images/myphoto.jpg')">
    
    <div class="but">
      <!--Sharpei of the week button with on click event using v-on directive -->
      <button class="homebutton" v-on:click="greet('This is Po She is 3 years old')">Sharpei Of the Week</button>
    </div>
  </div>
</template>

<script>
//export home as home for routing
export default {
  name: "Home",
     methods: {
       //This method pops up with a message about the sharpei of the week
    greet: function(message, event) {
      // `event` is the native DOM event
       if (event) {
      event.preventDefault()
    }
    alert(message)
    }
  }
    
};
</script>

<style scoped lang="scss">
/*CSS for home page*/
.home {
  display: inline-block;
  position: relative;
  max-width: 80%;
   color: #2c3e50;
}
.header{
  color: #2c3e50;
}
.para{
  color: #2c3e50;
}
.homebutton {
  background: linear-gradient(45deg, #ffc107, #ff6f00);
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
  max-width: 90%;
}
.sharpei {
  display: auto;
  max-width: 50%;
  max-height: 50%;
  align-items: center;
   color: #2c3e50;
}
/*Mobile config to adjust sizes for mobile */
@media screen and (max-width: 759px) {
  .sharpei {
    display: auto;
    max-width: 100%;
    max-height: 100%;
    align-items: center;
    padding-left: 35px;
  }
  .homebutton {
    align-items: center;
    position: flex;
    display: inline-block;
    
  }
  .home {
    display: block;
    position: flex;
  }
  .header{
  color: #2c3e50;
  position: relative;
  display: block;
  padding-left: 50px;
}
.para{
  color: #2c3e50;
  padding-left: 50px;
}
.but{
  color: #2c3e50;
  padding-left: 50px;
}
}
</style>