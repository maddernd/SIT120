<template>
<div>
  <todo-item
      v-for="item in groceryList"
      v-bind:todo="item"
      v-bind:key="item.id"></todo-item>
</div>
</template>

<script>

import todoItem from './components/todo-item.vue'
export default {
  name: 'App',
  components: {
     todoitem 
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
