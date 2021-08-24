<template>
  <div>
    <!--Call the MyGallery Component to display my sharpei photos  -->
    <MyGallery />
  </div>
</template>

<script>
import MyGallery from "@/components/MyGallery.vue";

export default {
  name: "mysharpei",
  components: {
    MyGallery,
  },
};
</script>