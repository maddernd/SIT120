<template>
  <!--calling Photo and Gallery Component in this view  -->
  <div>
    <Gallery />
    <Photo />
  </div>
</template>

<script>
//Import two components used in this view
import Gallery from "@/components/Gallery.vue";
import Photo from "@/components/Photo.vue";
//Component export as photo
export default {
  name: "photo",
  components: {
    Gallery,
    Photo,
  },
};
</script>
<style scoped>

</style>