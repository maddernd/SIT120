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
<!--Photos columns will reduce as we change to a smaller screen -->
<style>
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  grid-gap: 1rem;
  max-width: 100%;
  max-height: 100%;
  margin: 0 0;
  padding: 0 0rem;
  overflow-y: scroll;
  padding-bottom: 150rem;
  
}

.gallery-panel img {
  width: 100%;
  height: 22vw;
  object-fit: cover;
  border-radius: 0.75rem;
}
@media screen and (max-width: 759px) {
  .gallery {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
    grid-gap: 0.5rem;
    max-width: 100%;
    margin: auto auto;
    padding: 0 2rem;
    overflow-y: overlay;
  }

  .gallery-panel img {
    width: 100%;
    height: 22vw;
    object-fit: cover;
    border-radius: 0.75rem;
  }
}
</style>