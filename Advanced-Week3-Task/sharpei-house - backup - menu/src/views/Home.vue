<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Menu msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Menu from '@/components/Menu.vue'

export default {
  name: 'Home',
  components: {
    Menu
  }
}
</script>
