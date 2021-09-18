<template>
  <div class="advice" style="padding-left: 16px">
    <!--When button clicked the title and header are hidden-->
    <h3 v-show="!showModal">Welcome To Sharpei House</h3>
    <p v-show="!showModal">The App for all your Sharpei Needs.</p>
    <!--Button to search for Vets via Google MAPS API when clicked display MAP via API connection -->
    <button class="VetsnearYou" @click="showDetails()">
      Vets Close to you
    </button>
    <!--Button to search for Sharpei Fever links via Google API -->
    <button class="SharpeiFever" @click="showModal = false">
      Sharpei Fever Help
    </button>
    <!--While map not showing display help links-->
    <div class="helplinks" v-show="!showModal">
      <a href="https://thehappypuppysite.com/shar-pei/" target="_blank"
        >Breed Guide</a
      >
      <a
        href="https://www.marvistavet.com/shar-pei-special-concerns-cautions.pml"
        target="_blank"
        >Concerns and Cautions</a
      >
      <a
        href="https://www.pdsa.org.uk/taking-care-of-your-pet/looking-after-your-pet/puppies-dogs/medium-dogs/shar-pei"
        target="_blank"
        >Sharpei Information</a
      >
      <a
        href="https://www.northshorespecialist.com.au/articles/familial-sharpei-fever/"
        target="_blank"
        >Sharpei Fever</a
      >
    </div>
    <div>
      <b-modal ref="map-component" v-show="showModal">
        <AddGoogleMap />
      </b-modal>
    </div>
  </div>
</template>

<script>
//import map component
import AddGoogleMap from "@/components/AddGoogleMap";
export default {
  name: "Advice",
  components: {
    AddGoogleMap,
  },
  //v show for the Maps after click
  data() {
    return {
      showModal: false,
      html: "<p>Loading...</p>",
    };
  },
  //Method to set show modal to true when clicked
  methods: {
    showDetails() {
      this.showModal = true;
    },
    ready() {
      this.$http.get("google.com").then((response) => {
        this.html = response.data;
      });
    },
  },
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
.tempmap {
  max-height: 25%;
  max-width: 25%;
}
//Creating responsive buttons for mobile and desktop + button styling
.VetsnearYou {
  background: linear-gradient(to left, #ffc107, #ff6f00);
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
  background-color: #dbdad6;
}
.SharpeiFever {
  background: linear-gradient(to left, #ffc107, #ff6f00);
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
.helplinks {
  display: grid;
  line-height: 30pt;
  padding-top: 20pt;
}
//Mobile settings to shrink text
@media screen and (max-width: 759px) {
  .advice {
    display: inline-block;
    max-width: 50%;
    max-height: 60%;
    position: absolute;
    left: 70px;
  }
}
</style>
