<template>
  <div class="bar" v-if="isSearching">
    <input type="text" v-model="search_term" @keypress.enter="triggerSearch">
    <button @click="triggerSearch"><Icon icon="akar-icons:search" width="24" height="24" /></button>
  </div>
</template>

<script>
import {Icon} from '@iconify/vue2'
import {mapGetters, mapActions} from "vuex"

export default {
  components: {
    Icon
  },
  computed: {
    ...mapGetters({
      isSearching: 'search/isSearchOpen'
    }),
  },
  data(){
    return {
      search_term: this.$route.query.k,
    }
  },
  methods: {
    ...mapActions({
      'search': 'search/search'
    }),
    triggerSearch(){
      this.search(this.search_term)
    },
  }
}
</script>

<style lang="scss" scoped>
.bar {
  background: $primary;
  padding: 12px;
  display: inline-flex;
  justify-content: center;
  width: 100%;

  input {
    @include search-bar;
    @include search-text;
  }

  button {
    @include search-btn;
    background: $secondary;
    color: $light;
  }
}
</style>