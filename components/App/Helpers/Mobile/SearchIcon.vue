<template>
  <div class="search_icon" @click="toggleSearch">
    <Icon icon="akar-icons:search" width="24" height="24" />
  </div>
</template>

<script>
import {Icon} from '@iconify/vue2'
import {mapMutations} from "vuex"
export default {
  components: {
    Icon
  },
  methods: {
    ...mapMutations({
      toggleSearch: 'search/handleSearchBar'
    })
  }
}
</script>

<style lang="scss" scoped>
.search_icon {
  padding-left: 12px;
}
</style>