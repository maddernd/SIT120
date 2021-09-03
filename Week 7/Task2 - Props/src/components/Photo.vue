<template>
  <!-- click event that pushes a route to router when someone clicks to go back -->
  <div class="lightbox" @click.self="closeLightbox">
    <img :src="photoUrl(photo.filename)" />

    <div class="lightbox-info">
      <div class="lightbox-info-inner">
        <!--If there is a titel show it, if there is a location show it, if photographer show it -->
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
import photos from "@/photos.json";

export default {
  name: "Photo",
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
    //This Method closes the lightbox gallery and redirects back to thumbnails
    closeLightbox() {
      this.$router.push("/gallery");
    },
  },
};
</script>

<style>
/*CSS for boxes to contain the iamges once clicked on desktop and mobile version */
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
  max-width: 70%;
  max-height: 70%;
  grid-column-start: 2;
}

.lightbox-info {
  margin: auto 2rem auto 0;
}

.lightbox-info-inner {
  background-color: #ffc107;
  display: inline-block;
  padding: 2rem;
}
/*This needs more work and is not quite right yet */
@media screen and (max-width: 759px) {
  /*pop up box mobile  after click styling*/
  .lightbox {
    position: fixed;
    top: 0;
    left: 0;
    max-width: 70%;
    max-height: 70%;
    background-color: #ffc107;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
  }
  /*image mobile within the box after click styling*/
  .lightbox img {
    margin: auto;
    max-height: 100%;
    max-width: 100%;
    grid-column-start: 2;
  }
  /*infomraiton about photo*/
  .lightbox-info {
    margin: auto 2rem auto 0;
  }

  .lightbox-info-inner {
    background-color: #ffc107;
    display: flex;
    padding: 2rem;
    max-height: 50%;
    max-width: 50%;
    text-size-adjust: 10%;
  }
}
</style>