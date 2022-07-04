<template>
  <div class="bar" v-if="isSearching">
    <input type="text">
    <button @click="search"><Icon icon="akar-icons:search" width="24" height="24" /></button>
  </div>
</template>

<script>
import {Icon} from '@iconify/vue2'
import {mapGetters} from "vuex"
export default {
  computed: {
    ...mapGetters({
      isSearching: 'search/isSearchOpen'
    })
  },
  components: {
    Icon
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