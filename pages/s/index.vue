<template>
  <div class="search">
    <!-- Display frequently searched terms if query is empty, if the search query is not there i,e /s insead of /s?k=search_term -->
    <!-- Pass data down as props -->
    <FirstMessage :total="search.total" :term="search.term" />
    <!-- Search for cakes here, use the SearchCard component to render it here -->
  </div>
</template>

<script>
import FirstMessage from "~/components/Search/Message.vue"
export default {
  components: {
    FirstMessage
  },
  watch: {
    '$route.query.k': function (k){
      this.search.term = k
      // To refetch data on route search, simply call the function name
    }
  },
  data(){
    return {
      search: {
        total: 130,
        term: this.$route.query.k,
        results: [],
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.search {
  padding: 0.5rem;
}
</style>