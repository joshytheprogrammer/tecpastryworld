<template>
  <nav>
    <h2 class="logo">tec</h2>
    <div class="actions">
      <!-- Search -->
      <!-- Cart -->
      <CartIcon />
      <!-- Menu -->
      <div class="menuIcon">

      </div>
    </div>
  </nav>
</template>

<script>
import CartIcon from "./Helpers/CartIcon.vue"
import {Icon} from '@iconify/vue2'
export default {
  components: {
    CartIcon,
    Icon
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
}
</style>