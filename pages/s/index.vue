<template>
  <div class="search">
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