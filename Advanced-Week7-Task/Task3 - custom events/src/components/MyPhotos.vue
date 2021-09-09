<template>
  <!-- click event that pushes a route to router when someone clicks to go back -->
  <div class="lightbox" @click.self="closeLightbox">
    <img :src="photoUrl(photo.filename)" />

    <div class="lightbox-info">
      <div class="lightbox-info-inner">
        <!--If ther eis a title show it, if there is a location show it, if photographer show it -->
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

<style>
/* Styling of pop up image box*/
.lightbox {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
}
/*image within the box after click styling*/
.lightbox img {
  margin: auto;
  width: 100%;
  grid-column-start: 2;
}
/*image info styling*/
.lightbox-info {
  margin: auto 2rem auto 0;
}
/*image inner info styling*/
.lightbox-info-inner {
  background-color: #ffffff;
  display: inline-block;
  padding: 2rem;
}
</style>