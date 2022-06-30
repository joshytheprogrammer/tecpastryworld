<template>
  <!-- Menu Icon-->
  <div class="menu_icons" @click="toggleMenu">
    <Icon icon="eva:menu-arrow-fill" width="24" height="24" v-if="!isOpen" />

    <Icon icon="ep:circle-close" width="24" height="24" v-else />
  </div>
</template>

<script>
import {mapMutations, mapGetters} from "vuex"
import {Icon} from '@iconify/vue2'
export default {
  computed: {
    ...mapGetters({
      isOpen: 'mobile/isOpen'
    })
  },
  components: {
    Icon
  },
  methods: {
    ...mapMutations({
      toggleMenu: 'mobile/toggleMenu'
    })
  }
}
</script>

<style lang="scss" scoped>
.menu_icons {
  padding-left: 12px;
}
</style>