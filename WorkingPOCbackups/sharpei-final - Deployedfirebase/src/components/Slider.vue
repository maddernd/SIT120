<template>
    <div>
      <!--This HTML gives the basic elements for the My Sharpei Page, mainly the image reel, title, caption and Next/Previous elements. -->
      <!-- WE also include a take photo element -->
        <p class="title"> My Sharpei Pics<p/>
    <transition-group name="fade" tag="div">
      <div v-for="i in [currentIndex]" :key="i">
        <img :src="currentImg" />
        <p class="caption">A caption Goes Here<p/>
      </div>
    </transition-group>
    <a class="prev" @click="prev" href="#">&#10094; Previous</a>
    <a class="next" @click="next" href="#">&#10095; Next</a>
    
  </div>
</template>
<script>
//WE export this componenet as Slider to use in the main applicaiton
export default {
  name: "Slider",
  data() {
    return {
      //For now we are returning some local photos for testing
      images: [
        require("@/assets/myphoto1.jpg"),
        require("@/assets/myphoto2.jpg"),
        require("@/assets/Myphoto3.jpg"),
        require("@/assets/myphoto2.jpg"),
      ],
      timer: null,
      currentIndex: 0
    };
  },
//Calling the startSlide function to run through the images contionously
  mounted: function() {
    this.startSlide();
  },
 //3 main functions for this component at present, StartSlide, Next image and Previous image
  methods: {
    startSlide: function() {
      this.timer = setInterval(this.next, 4000);
    },

    next: function() {
      this.currentIndex += 1;
    },
    prev: function() {
      this.currentIndex -= 1;
    }
  },
 //Here we return the current image
  computed: {
    currentImg: function() {
      return this.images[Math.abs(this.currentIndex) % this.images.length];
    }
  }
};
</script>
<style scoped>
/* CSS styling for the slider component */
.title{
    position: center;
}
.caption{
    position: bottom;
}
/*Adds fade effect to image transition*/
.fade-enter-active,
.fade-leave-active {
  transition: all 2.9s ease;
  overflow: hidden;
  visibility: visible;
  position: absolute;
  width:100%;
  opacity: 1;
}

.fade-enter,
.fade-leave-to {
  visibility: hidden;
  width:100%;
  opacity: 0;
}
.container {
  padding-left: 50px;
  width: 500px;
  padding-bottom: 100px;
}
/*Setting size of image*/
img {
  height:25%;
  width:50%
  
}
/* Next and Previous button CSS */
.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 40%;
  width: auto;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.7s ease;
  border-radius: 0 4px 4px 0;
  text-decoration: none;
  user-select: none;
}

.next {
  right: 0;
}

.prev {
  left: 0;
}

.prev:hover, .next:hover {
  background-color: rgba(0,0,0,0.9);
}
/* CSS styling for mobile version - mainly we drop the prev and next buttons to be lower as to not interfer with the side menu */
@media screen and (max-width: 759px) {

.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 90%;
  width: auto;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.7s ease;
  border-radius: 0 4px 4px 0;
  text-decoration: none;
  user-select: none;
}

.next {
  right: 0;
}

.prev {
  left: 0;
}
}
</style>