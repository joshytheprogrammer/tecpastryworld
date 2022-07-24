<template>
  <div class="labels">
    <div class="label">
      <span class="name">Subtotal (3 items)</span>
      <h6 class="value">₦20,500</h6>
    </div>
    <button>Proceed to checkout</button>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.labels {
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  .label {
    font-size: 16px;
  }
}
</style>