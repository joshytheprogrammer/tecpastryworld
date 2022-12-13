<template>
  <div class="search">
    <FirstMessage :total="search.total" :term="search.term" />
    <div class="f_s" v-if="!search.term">
      <!-- Frequently Searched Queries Component -->
    </div>
    <!-- Search for cakes here, use the SearchCard component to render it here -->
    <Loader v-if="$fetchState.pending" type="clip" />
    <NetworkError v-else-if="$fetchState.error || error" :message="error" />
    <div class="container" v-else>
      <section class="BfoxW" v-if="search.term">
        <Results v-if="search.total" :results="search.results" />
        <p v-else>
          Sorry we could not find what you were looking for. Try being more generic.
        </p>
        <!-- <Empty v-else /> -->
      </section>
      <section class="other">
        <!--  -->
      </section>
    </div>
  </div>
</template>

<script>
import axios from "axios"
import NetworkError from "../../components/App/Helpers/Global/Error.vue"
import Loader from "../../components/App/Helpers/Global/Loader.vue"
import FirstMessage from "~/components/Search/Message.vue"
import Results from "~/components/Search/Results.vue"
// import EmptyMessage from "~/components/Search/Empty.vue"
export default {
  components: {
    FirstMessage,
    Results,
    Loader,
    NetworkError,
  },
  watch: {
    '$route.query.k': function (k){
      this.search.term = k
      this.$fetch()
    }
  },
  data(){
    return {
      search: {
        total: 0,
        term: this.$route.query.k,
        results: [],
      },
      error: ''
    }
  },
  async fetch() {
    await axios.post('http://127.0.0.1:8000/api/search/', {
      'query': this.search.term
    }).then((res) => {
      let results = res.data

      this.search.total = results.products.length + results.categories.length

      this.search.results = results
    }).catch((e) => {
      this.error = e.message
    })
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
