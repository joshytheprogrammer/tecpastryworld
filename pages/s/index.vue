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
        <Results :results="search.results" />
      </section>
      <section class="other">
        coming soon...
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
export default {
  components: {
    FirstMessage,
    Results,
    Loader,
    NetworkError
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
      error: 'An error occurred'
    }
  },
  async fetch() {
    await axios.post('http://127.0.0.1:8000/api/search/', {
      'query': this.search.term
    }).then((res) => {
      this.error = ''

      if(res.data.data) {
        this.search.total = res.data.data.length
        this.search.results = res.data.data
      }

      if(res.data.error) {
        this.error = res.data.error
      }
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
