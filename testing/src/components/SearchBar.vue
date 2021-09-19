<!--This is the search bar component for filtering images-->
<template>
  <div class="search-container">
<!--<input type="text" placeholder="Search Keyword" ref="keywordRef" v-bind:value="keyword" v-on:input="searchResult"/>-->
    <input type="text" placeholder="Search Keyword" v-model="keyword" @input="searchResult"/>
    <div>{{keyword}}</div>
  </div>
</template>

<script>
export default {
  emits: ['set-keyword'],
  name: "SearchBar",
  data() {
    return {
      keyword: ''
    }
  },
  methods: {
    searchResult() {
      // this.$emit('set-keyword', this.$refs.keywordRef.value)
      this.$emit('set-keyword', this.keyword);
    }
  }
}
</script>

<style scoped>
</style>