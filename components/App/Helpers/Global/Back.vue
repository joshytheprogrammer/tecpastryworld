<template>
  <a class="back" href="#" @click.stop="$router.back(-1)">Back</a>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.back {
  display: block;
  text-decoration: none;
  margin: 1rem 0;
  color: $primary;
  font-size: 18px;
  font-weight: 400;

  &:hover {
    text-decoration: underline;
    text-underline-offset: 2px;
  }
}
</style>