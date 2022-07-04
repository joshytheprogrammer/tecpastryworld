<template>
  <div class="bar">
    <input type="text" v-model="search_term" @keypress.enter="search">
    <button @click="search"><Icon icon="akar-icons:search" width="24" height="24" /></button>
  </div>
</template>

<script>
import {Icon} from '@iconify/vue2'
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
    search(){
      if(this.search_term.length > 2) {
        this.$router.push({path: 's', query: {k: this.search_term}})
      }
    }
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