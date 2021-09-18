<template>
  <!--Call the Gallery Component from componenets have a view of images  -->
  <div>
    <Gallery />
  </div>
</template>

<script>
//Import Gallery component into this view
import Gallery from "@/components/Gallery.vue";
//export view as gallery component
export default {
  name: "gallery",
  components: {
    Gallery,
  },
};
</script>