<template>
  <div>
    <!--Call the MyGallery Component to display my sharpei photos  -->
    <MyGallery />
  </div>
</template>

<script>
//import component used in this view
import MyGallery from "@/components/MyGallery.vue";
//export mysharpei
export default {
  name: "mysharpei",
  components: {
    MyGallery,
  },
};
</script>