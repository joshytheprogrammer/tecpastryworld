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
      <!-- Menu Icon -->
      <MenuIcon />
    </div>
  </nav>
</template>

<script>
import {Icon} from '@iconify/vue2'
import CartIcon from "./Helpers/CartIcon.vue"
import MenuIcon from "./Helpers/Mobile/MenuIcon.vue"

export default {
  components: {
    CartIcon,
    MenuIcon,
    Icon
  },
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
  }
}
</style>