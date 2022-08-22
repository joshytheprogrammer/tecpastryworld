<template>
  <div class="search">
    <!-- Pass data down as props -->
    <FirstMessage :total="search.total" :term="search.term" />

    <!-- Display frequently searched terms if query is empty, if the search query is not there i,e /s insead of /s?k=search_term -->
    <div class="f_s" v-if="!search.term">
      <!-- Frequently Searched Queries Component -->
    </div>
    <!-- Search for cakes here, use the SearchCard component to render it here -->
    <div class="container" v-else>
      <section class="results">
        a
      </section>
      <section class="other">
        a
      </section>
    </div>
    
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

  .container {
    display: grid;
    grid-template-columns: 2fr 1fr;
  }
}
</style>