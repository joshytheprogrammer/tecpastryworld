<template>
  <div class="price">
    <div class="loader" v-if="loading"></div>
    <p v-if="price"> {{price}} </p>
  </div>
</template>

<script>
export default {
  props: ['loading', 'price']
}
</script>

<style lang="scss" scoped>
.price {
  background: $primary;
  border-radius: 10px;
  border: 1px solid $primary;
  min-width: 150px;
  width: 150px;
  margin: 0.5rem 0;
  font-size: 24px;
  font-weight: 400;
  color: $background;

  p {
    user-select: none;
    padding: 0.6rem 1rem;
    text-align: center;
  }

  .loader {
    margin: 0.6rem auto;
    border: 8px solid $light;
    border-top: 8px solid $primary;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    animation: spin .5s linear infinite;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  @media screen and (max-width: $medium) {
    font-size: 20px;
    width: fit-content;
  }
}
</style>