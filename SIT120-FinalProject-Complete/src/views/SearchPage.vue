 <!--This page is the display port for the search filter --> 
<template>
  <div>
    <div class="page">
      <h1>Search Page</h1>
      <!--Here we push through the search bar component --> 
      </div>
      <SearchBar @set-keyword="setSearchData" />
      <div class="result-container">
        <div v-for="(item, index) in filteredList" :key="index">
          <item :title="item.title" :img="item.img" />
      </div>
    </div>
  </div>
</template>

<script>
import SearchBar from "@/components/SearchBar";
import Item from "@/components/SearchList";
import { _sharpeisearch } from "../Data/_sharpeisearch";
export default {
  name: "SearchPage",
  components: {
    SearchBar,
    Item,
  },
  data() {
    return {
      items: _sharpeisearch,
      keyword: "",
    };
  },
  //convert to lower case and match filter
  computed: {
    filteredList() {
      return this.items.filter((item) =>
        item.title.toLowerCase().includes(this.keyword.toLowerCase())
      );
    },
  },
  //method to set the search data
  methods: {
    setSearchData(keyword) {
      this.keyword = keyword;
    },
  },
  created() {
    console.log("query: ", this.$route.query);
  },
};
</script>

<style scoped>
/*CSS for results container */
.result-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 2fr));
  justify-content: center;
  align-items: center;
  gap: 5rem;
  margin-top: 2rem;
  max-height: 100%;
  margin-left: 5rem;
  overflow-y: scroll;
}
@media screen and (max-width: 759px) {
  .result-container {
    display: grid;
    align-content: center;
    grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr));
    gap: 5rem;
    margin-top: 5rem;
    margin-left: 5rem;
    overflow-y: scroll;
    max-height: 100%;
  }
}
</style>