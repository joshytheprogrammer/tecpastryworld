<template>
  <div class="links">
    <NuxtLink to="/">Home</NuxtLink>
    <NuxtLink to="/shop">Shop</NuxtLink>
    <div class="cart" @click="$router.push('/shop')">
      <span>0</span>
      <Icon icon="akar-icons:cart" width="24" height="24" />
    </div>
  </div>
</template>

<script>
import {Icon} from '@iconify/vue2'
export default {
  components: {
    Icon
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
  }

  .cart {
    color: $light;
    cursor: pointer;
    padding: 0 12px 12px 12px;
    display: flex;
    flex-direction: column;

    span {
      font-size: 8px;
      text-align: center;
    }
  }
}
</style>