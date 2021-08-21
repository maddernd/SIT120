<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
      <!--Search Box for Photos from Menu only displayed on desktop  -->
      <input v-show="!mobile" type="text" placeholder="Search.." />
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
     //return mobile when certain window size limit is reached
    data() {
      return {
        mobile: window.innerWidth <= 759,
      };
    },
    created() {
      addEventListener("resize", () => {
        this.mobile = innerWidth <= 759;
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
