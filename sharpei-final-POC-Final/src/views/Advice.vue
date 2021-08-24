<template>
  <div class="advice" style="padding-left: 16px">
    <h3>Welcome To Sharpei House</h3>
    <p>The App for all your Sharpei Needs.</p>
    <!--Button to search for Vets via Google MAPS API -->
    <button class="VetsnearYou">Vets Close to you</button>
    <!--Button to search for Sharpei Fever links via Google API -->
    <button class="SharpeiFever">Sharpei Fever Help</button>
    <div>
        <img class="tempmap" src="../assets/MapDemo.jpg">
    </div>
  </div>
</template>

<script>
export default {
  name: "advice",
};
</script>
<style scoped lang="scss">
//Creating responsive buttons for mobile and desktop + button styling
.vetmap {
  border-radius: 8px;
  max-width: 80%;
  height: auto;
  display: inline-block;
  max-width: 50%;
  max-height: 60%;
}
.tempmap{
  max-height: 25%;
  max-width: 25%;
}
//Creating responsive buttons for mobile and desktop + button styling
.VetsnearYou {
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
}
//Hover over button feature
.VetsnearYou:hover {
  color: #000000;
  background-color: #ffc107;
}
.SharpeiFever {
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
}
.SharpeiFever:hover {
  color: #000000;
  background-color: #ffc107;
}
//Mobile settings to shrink text
@media screen and (max-width: 759px) {
  .advice {
    display: inline-block;
    max-width: 50%;
    max-height: 60%;
  }
}
</style>
