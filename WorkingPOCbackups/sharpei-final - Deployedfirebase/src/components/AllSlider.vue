<template>
    <div>
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
export default {
  name: "AllSlider",
  data() {
    return {
      images: [
        require("@/assets/allsharpei.jpg"),
        require("@/assets/allsharpei2.jpg"),
        require("@/assets/allsharpei3.jpg"),
        require("@/assets/allsharpei4.jpg"),
        require("@/assets/allsharpei5.jpg"),
        require("@/assets/allsharpei.jpg"),
      ],
      timer: null,
      currentIndex: 0
    };
  },

  mounted: function() {
    this.startSlide();
  },

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

  computed: {
    currentImg: function() {
      return this.images[Math.abs(this.currentIndex) % this.images.length];
    }
  }
};
</script>
<style scoped>
.title{
    position: center;
}
.caption{
    position: bottom;
}
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
img {
  height:25%;
  width:50%
  
}

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