<template>
  <div class="bar">
    <input type="text" v-model="search_term">
    <button><Icon icon="akar-icons:search" width="24" height="24" /></button>
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
  }
}
</script>

<style lang="scss" scoped>
.bar {
  display: inline-flex;
  justify-content: center;
  width:50%;

  input {
    width: 100%;
    height: 36px;
    border: none;
    outline: none;
    padding: 0 8px;
    background: $light;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    @include search-text;
  }

  input:focus {
    outline: 1px solid $secondary;
  }

  button {
    border: none;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    padding: 0 8px;
    height: inherit;

    background: $secondary;
    color: $light;
    cursor: pointer;
  }
}
</style>