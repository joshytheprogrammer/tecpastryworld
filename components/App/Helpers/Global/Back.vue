<template>
  <span class="back" @click.prevent="$router.back(-1)" >Back</span>
  <!-- -->
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.back {
  display: block;
  cursor: pointer;
  text-decoration: none;
  margin: 0.5rem 0;
  padding: 0.2rem 1rem;
  background: $light;
  border: 1px solid $primary;
  text-decoration: none;
  border-radius: 8px;
  color: $primary;
  font-size: 16px;
  font-weight: 400;

  &:hover {
    background: $primary;
    color: $light;
  }
}
</style>