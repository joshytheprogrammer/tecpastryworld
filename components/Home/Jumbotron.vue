<template>
  <section class="jumbotron"></section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.jumbotron {
  padding: 1rem;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-color: $secondary;
  object-fit: fill;
  height: 700px;
  max-width: 100%;
  color: $light;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  @media screen and (max-width: $medium) {
    background-color: $primary;
    padding-bottom: 2rem;
    height: 600px;
  }
}
</style>