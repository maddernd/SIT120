<template>
  <div class="mygallery">
    <!-- Gallery Pannel, V for to loop over photos and display the thumbnail version -->
    <div class="mygallery-panel" v-for="photo in photos" :key="photo.id">
      <!--Router link to display full version of photo when clicked-->
      <router-link :to="`./myphoto/${photo.id}`">
        <img :src="thumbUrl(photo.filename)" />
      </router-link>
    </div>
  </div>
</template>

<script>
import photos from "@/myphotos.json"
//export myGallery as component
export default {
  name: "MyGallery",
  data() {
    return {
      //return the variable photos for use in html
      photos,
    };
  },
  //Retreive thumbnail photo
  methods: {
    thumbUrl(filename) {
      return require(`../images/thumbnails/${filename}`);
    },
  },
};
</script>

<style scoped lang="scss">
/*Gallery configuartion */
.mygallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(12rem, 2fr));
  grid-gap: 1rem;
  padding-right: 5%;
  padding-left: 5%;
  margin-bottom: 15%;
  max-height: 100%;
  max-width: 100%;
  overflow-y: scroll;
}
/*Gallery clicked configuartion */
.mygallery-panel img {
  max-width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0.75rem;
  border: 2px #ffc107;
}

@media screen and (max-width: 759px) {
  /*Gallery mobile configuartion */
  .mygallery {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
    max-width: 80%;
    height: 100%;
    grid-gap: 1rem;
    padding: 0 2rem;
    overflow-y: scroll;
  }

  /*Gallery clicked mobile configuartion */
  .mygallery-panel img {
    object-fit: cover;
    border-radius: 0.75rem;
    height: auto;
    display: inline-block;
  }
}
</style>