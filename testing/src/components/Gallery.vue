<template>
  <div class="gallery">
    <!-- Gallery Pannel, V for to loop over photos and display the thumbnail version -->
    <!-- loop through all photos in photo.json and creates a div for each photo-->
    <div class="gallery-panel" v-for="photo in photos" :key="photo.id">
      <!--Router link to display full version of photo when clicked-->
      <router-link :to="`./Photo/${photo.id}`">
        <img :src="thumbUrl(photo.filename)" />
      </router-link>
    </div>
  </div>
</template>

<script>
import photos from "@/photos.json";
//export component as Gallery
export default {
  name: "Gallery",
  data() {
    return {
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
<!--Gallery styling-->
<style scoped  lang="scss">
.gallery {
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
/*Gallery pannels when image clicked */
.gallery-panel img {
  max-width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0.75rem;
  border: 2px #ffc107;
}
/*Gallery Styling mobile */
@media screen and (max-width: 759px) {
  .gallery {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
    max-width: 80%;
    height: 100%;
    grid-gap: 1rem;
    padding: 0 2rem;
    overflow-y: scroll;
  }
  /*Gallery pannels mobile  when image clicked */
  .gallery-panel img {
    object-fit: cover;
    border-radius: 0.75rem;
    height: auto;
    display: inline-block;
  }
}
</style>