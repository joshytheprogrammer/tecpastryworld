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
  }
}
</script>

<style lang="scss" scoped>
nav {

  .logo {
    @include logo-styles;
  }
}
</style>