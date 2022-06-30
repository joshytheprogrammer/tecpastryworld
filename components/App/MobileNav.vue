<template>
  <nav>
    <h2 class="logo">tec</h2>
    <div class="actions">
      <!-- Search Icon with other functions-->
      <div class="search_icon">
        <Icon icon="akar-icons:search" width="24" height="24" />
      </div>
      <!-- Cart Icon-->
      <CartIcon />

      <!-- Menu Icon-->
      <div class="menu_icons" @click="toggleMenu">
        <Icon icon="eva:menu-arrow-fill" width="24" height="24" v-if="!isOpen" />

        <Icon icon="ep:circle-close" width="24" height="24" v-else />
      </div>
    </div>
  </nav>
</template>

<script>
import {mapMutations, mapGetters} from "vuex"
import {Icon} from '@iconify/vue2'
import CartIcon from "./Helpers/CartIcon.vue"

export default {
  computed: {
    ...mapGetters({
      isOpen: 'mobile/isOpen'
    })
  },
  components: {
    CartIcon,
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
nav {
  background: $light;
  width: 100%;
  padding: 0 1rem;
  height: 72px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    @include logo-styles;
    color: $primary;
  }

  .actions {
    display: inline-flex;
    justify-content: space-between;
    align-items: center;

    .search_icon {
      padding: 0 12px;
    }

    .menu_icons {
      padding: 0 12px;
    }
  }
}
</style>