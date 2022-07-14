<template>
  <div class="price">
    <div class="loader"></div>
    <!-- <p>₦14,000</p> -->
  </div>
</template>

<script>
export default {
  components: {
    
  }
}
</script>

<style lang="scss" scoped>
.price {
  background: $background;
  border-radius: 10px;
  border: 1px solid $dark;
  width: 150px;
  margin: 0.5rem 0;
  font-size: 28px;
  font-weight: 400;
  color: $primary;

  p {
    user-select: none;
    padding: 0.6rem 1rem;
  }

  .loader {
    margin: 0.6rem auto;
    border: 8px solid $light;
    border-top: 8px solid $secondary;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    animation: spin .5s linear infinite;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
}
</style>