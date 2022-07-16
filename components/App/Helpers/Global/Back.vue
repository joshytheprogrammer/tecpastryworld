<template>
  <button class="back" href="#" @click.stop="$router.back(-1)">Back</button>
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
  background: $primary;
  border-radius: 8px;
  color: $light;
  font-size: 18px;
  font-weight: 400;

  &:hover {
    box-shadow: 0px 4px 4px $dark;
  }
}
</style>