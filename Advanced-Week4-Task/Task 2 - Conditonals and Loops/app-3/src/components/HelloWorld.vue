<template>
  <div class="hello">
    <!--ViF & else statment -->
    <h1 v-if="awesome">awesome</h1>
    <h1 v-else>Oh no 😢</h1>
    <!--V else if  statment -->
     <h2 v-if="john">if</h2>
    <h2 v-else-if="elsey">else if 😢</h2>
    <h2 v-else-if="fred">fred 😢</h2>
    <!--Vshow  statment -->
    <h3 v-show="ok">Hello! can you hear me?</h3>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
  
   
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  data(){
    return{
    
    }
  },
  props: {
    msg: String,
    awesome: {
    type: Boolean,
    default: true
  },
    elsey: {
    type: Boolean,
    default: false
  },
    fred: {
    type: Boolean,
    default: true
  },
    ok: {
    type: Boolean,
    default: true
  },
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
