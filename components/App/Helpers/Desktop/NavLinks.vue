<template>
  <div class="links">
    <NuxtLink to="/">Home</NuxtLink>
    <NuxtLink to="/">Shop</NuxtLink>
    <NuxtLink to="/">Gallery</NuxtLink>
    <NuxtLink to="/">Community</NuxtLink>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.links {
  // padding: 0.5rem 12px;

  a {
    padding: 4px;
    color: $light;
    text-decoration: none;
  }
}
</style>