<template>
  <div class="bar">
    <input type="text" v-model="search_term" @keypress.enter="triggerSearch">
    <button @click="triggerSearch"><Icon icon="akar-icons:search" width="24" height="24" /></button>
  </div>
</template>

<script>
import {Icon} from '@iconify/vue2'
import {mapMutations} from "vuex"

export default {
  components: {
    Icon
  },
  data(){
    return {
      search_term: this.$route.query.k,
    }
  },
  methods: {
    ...mapMutations({
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
  display: inline-flex;
  justify-content: center;
  width:50%;

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