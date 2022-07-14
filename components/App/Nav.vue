<template>
  <nav>
    <NuxtLink to="/" class="logo" title="Go home">tec</NuxtLink>
    <Bar />
    <Links />
  </nav>
</template>

<script>
import Bar from "./Helpers/Desktop/SearchBar.vue"
import Links from "./Helpers/Desktop/NavLinks.vue"
export default {
  components: {
    Bar,
    Links
  }
}
</script>

<style lang="scss" scoped>
nav {
  padding: 14px 16px;
  position: fixed;
  top: 0;
  user-select: none;
  background: $primary;
  width: 100%;
  height: 72px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    @include logo-styles;
    color: $light;
  }
}
</style>