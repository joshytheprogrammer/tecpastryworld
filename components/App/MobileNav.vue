<template>
  <div class="navbar">
    <nav>
      <NuxtLink to="/" class="logo" title="Go home">tec <sup>beta</sup></NuxtLink>
      <div class="actions">
        <!-- Search Icon with other functions-->
        <SearchIcon />
        <!-- Cart Icon-->
        <CartIcon />
        <!-- Menu Icon -->
        <MenuIcon />
      </div>
    </nav>
    <SearchBar />
    <Menu />
  </div>
</template>

<script>
import {Icon} from '@iconify/vue2'
import CartIcon from "./Helpers/Global/CartIcon.vue"
import SearchIcon from "./Helpers/Mobile/SearchIcon.vue"
import SearchBar from "./Helpers/Mobile/SearchBar.vue"
import Menu from "./Helpers/Mobile/Menu.vue"
import MenuIcon from "./Helpers/Mobile/MenuIcon.vue"

export default {
  components: {
    CartIcon,
    MenuIcon,
    Menu,
    SearchBar,
    SearchIcon,
    Icon
  },
}
</script>

<style lang="scss" scoped>
.navbar {
  position: fixed;
  top: 0;
  background: $light;
  width: 100%;

  nav {
    padding: 0 12px;
    border-bottom: 2px solid $primary;
    user-select: none;
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
}
</style>
