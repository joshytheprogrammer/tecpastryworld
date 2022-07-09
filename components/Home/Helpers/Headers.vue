<template>
  <div class="header">
    <h2>
      <slot name="title" />
    </h2>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  padding: 40px 1rem;
  background: $light;
  border-bottom: 1px solid $primary;
  text-align: center;

  h2 {
    font-size: 36px;
    font-weight: 400;
  }
}
</style>