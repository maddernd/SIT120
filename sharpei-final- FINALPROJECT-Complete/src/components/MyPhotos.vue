<template>
  <!-- click event that pushes a route to router when someone clicks to go back -->
  <div class="lightbox" @click.self="closeLightbox">
    <img :src="photoUrl(photo.filename)" />

    <div class="lightbox-info">
      <div class="lightbox-info-inner">
        <!--If there is a title show it, if there is a location show it, if photographer show it -->
        <p v-if="photo.title">{{ photo.title }}</p>
        <p v-if="photo.location">{{ photo.location }}</p>
        <p v-if="photo.photographer">
          <a rel="nofollow" :href="photo.photographer.url">
            {{ photo.photographer.name }}
          </a>
        </p>
        <p v-if="photo.source">
          via
          <a rel="nofollow" :href="photo.source.url">
            {{ photo.source.name }}
          </a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
//read in photos from JSON file
import photos from "@/myphotos.json";
//export component as MyPhoto
export default {
  name: "MyPhoto",
  data() {
    return {
      photos,
    };
  },
  computed: {
    //Computed property to find photo ID specifed in the URL
    photo() {
      return this.photos.find((photo) => {
        return photo.id === Number(this.$route.params.id);
      });
    },
  },
  methods: {
    //Method to retreive the Photos base on file name
    photoUrl(filename) {
      return require(`../images/${filename}`);
    },
    //This Method closes the lightbox gallery
    closeLightbox() {
      this.$router.push("/mysharpei");
    },
  },
};
</script>

<style scoped lang="scss">
/* Styling of pop up image box*/
.lightbox {
  position: absolute;
  display: inline-flex;
  top: 15%;
  left: 25%;
  max-width: 40%;
  max-height: 60%;
  background: linear-gradient(45deg, #ffc107, #ff6f00);
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
}
/*image within the box after click styling*/
.lightbox img {
  margin: auto;
  max-width: 80%;
  max-height: 80%;
  padding-left: 5%;
  grid-column-start: 2;
}
/*image info styling*/
.lightbox-info {
  margin: auto 2rem auto 0;
  text-size-adjust: 50%;
  font-size: auto;
}
/*image inner info styling*/
.lightbox-info-inner {
  max-height: 30%;
  max-width: 50%;
  background-color: #faa73b;
  padding: 2rem;
  color: #212121;
}
/*All Mobile Stylings for My Gallery*/
@media screen and (max-width: 759px) {
  /*Mobile Styling for image pop up box*/
  .lightbox {
    display: inline-block;
    top: 15%;
    left: 25%;
    max-width: 50%;
    max-height: 70%;
    background: linear-gradient(45deg, #ffc107, #ff6f00);
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
  }
  /*Mobile Styling for the lightbox image*/
  .lightbox img {
    margin: auto;
    display: inline-block;
    max-width: 60%;
    max-height: 60%;
    padding-top: 5%;
    grid-column-start: 2;
  }
  /*Mobile Styling to arrange the photo information box*/
  .lightbox-info {
    display: inline-block;
    position: relative;
    margin: auto;
    margin-left: 5%;
    text-size-adjust: 10%;
    font-size: 12px;
    max-height: 10%;
    max-width: 50%;
  }
  /*Mobile Styling for the photo information*/
  .lightbox-info-inner {
    display: inline-block;
    max-height: 20%;
    max-width: 50%;
    background-color: #faa73b;
    padding: 2rem;
    color: #212121;
  }
}
</style>