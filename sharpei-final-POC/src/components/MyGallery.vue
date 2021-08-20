<template>
  <div class="gallery">
    <!-- Gallery Pannel, V for to loop over photos and display the thumbnail version -->
    <div class="gallery-panel" v-for="photo in photos" :key="photo.id">
      <!--Router link to display full version of photo when clicked-->
      <router-link :to="`./myphoto/${photo.id}`">
        <img :src="thumbUrl(photo.filename)" />
      </router-link>
    </div>
  </div>
</template>

<script>
import photos from "@/myphotos.json";

export default {
  name: "MyGallery",
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

<style>
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
  grid-gap: 1rem;
  max-width: 80rem;
  margin: 1rem auto;
  padding: 0 5rem;
}

.gallery-panel img {
  width: 100%;
  height: 10vw;
  object-fit: cover;
  border-radius: 0.75rem;
}

@media screen and (max-width: 759px) {
  .gallery {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
    grid-gap: 1%;
    max-width: 60%;
    margin: auto;
    padding: 0 5rem;
  }

  .gallery-panel img {
    width: 60%;
    height: 20vw;
    object-fit: cover;
    border-radius: 0.75rem;
  }
}
</style>