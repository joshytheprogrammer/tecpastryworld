<template>
  <nav>
    <h2 class="logo" @click="$router.push('/')">tec</h2>
    <div class="actions">
      <!-- Search Icon with other functions-->
      <SearchIcon />
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
import SearchIcon from "./Helpers/Mobile/SearchIcon.vue"
import MenuIcon from "./Helpers/Mobile/MenuIcon.vue"

export default {
  components: {
    CartIcon,
    MenuIcon,
    SearchIcon,
    Icon
  },
}
</script>

<style lang="scss" scoped>
nav {
  background: $light;
  width: 100%;
  padding: 0 12px;
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
  }
}
</style>