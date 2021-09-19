<template>
  <!--Call the MyGallery Component and MyPhoto Component to display my sharpei photos  -->
  <div>
    <MyGallery />
    <MyPhoto />
    <p>test</p>
  </div>
</template>

<script>
//import components used in this view
import MyGallery from "@/components/MyGallery.vue";
import MyPhoto from "@/components/MyPhotos.vue";
//export view as myphoto
export default {
  name: "myphoto",
  components: {
    MyGallery,
    MyPhoto,
  },
};
</script>