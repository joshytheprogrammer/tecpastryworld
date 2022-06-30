<template>
  <nav>
    <h2 class="logo">tec</h2>
    <div class="actions">
      <!-- Search -->
      <!-- Cart -->
      <!-- Menu -->
    </div>
  </nav>
</template>

<script>
export default {

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