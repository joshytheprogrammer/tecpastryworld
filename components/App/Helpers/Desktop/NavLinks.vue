<template>
  <div class="links">
    <NuxtLink to="/">Home</NuxtLink>
    <NuxtLink to="/shop">Shop</NuxtLink>
    <a target="_blank" href="https://forms.gle/KEWgwDrad4EnVCGF7">Report</a>
    <CartIcon />
  </div>
</template>

<script>
import CartIcon from "../Global/CartIcon.vue"
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
    padding: 0 8px;
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
