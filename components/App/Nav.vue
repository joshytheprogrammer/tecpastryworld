<template>
  <nav>
    <h2 class="logo" title="Go home" @click="$router.push('/')">tec</h2>
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
  background: $primary;
  width: 100%;
  padding: 0 12px;
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