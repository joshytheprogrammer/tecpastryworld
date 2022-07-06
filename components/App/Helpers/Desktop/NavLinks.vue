<template>
  <div class="links">
    <NuxtLink to="/">Home</NuxtLink>
    <NuxtLink to="/shop">Shop</NuxtLink>
    <CartIcon />
  </div>
</template>

<script>
import CartIcon from "../CartIcon.vue"
export default {
  components: {
    CartIcon
  }
}
</script>

<style lang="scss" scoped>
.links {
  display: inline-flex;
  align-items: center;

  a {
    text-decoration: none;
    padding: 0 12px;
    color: $light;
    cursor: pointer;

    font-weight: 400;
    font-size: 16px;

    &:hover {
      text-decoration: underline;
      text-decoration-color: $light;
      text-underline-offset: 9px; 
    }

    &.nuxt-link-exact-active {
      text-decoration: underline;
      text-decoration-color: $light;
      text-underline-offset: 9px; 
      color: $light;
    }
  }
}
</style>