<template>
  <!--Call the Gallery Component from componenets have a view of images  -->
  <div>
    <Gallery />
  </div>
</template>

<script>
import Gallery from "@/components/Gallery.vue";

export default {
  name: "gallery",
  components: {
    Gallery,
  },
};
</script>