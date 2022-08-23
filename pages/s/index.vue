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
      <section class="BfoxW">
        <Results :results="search.results" />
      </section>
      <section class="other">
        coming soon...
      </section>
    </div>
  </div>
</template>

<script>
import FirstMessage from "~/components/Search/Message.vue"
import Results from "~/components/Search/Results.vue"
export default {
  components: {
    FirstMessage,
    Results
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
        total: 0,
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
    display: flex;
    flex-direction: column;

    .BfoxW {
      margin: 1rem 0;
      padding: 1rem;
    }

    @media screen and (max-width: $m-large) {
      display: block;

      .BfoxW {
        max-width: 100%;
      }
    }
  }
}
</style>