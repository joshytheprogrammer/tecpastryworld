<template>
  <div class="labels">
    <div class="label">
      <span class="name">Subtotal (3 items) :-</span>
      <span class="value">₦20,500</span>
    </div>
    <div class="label">
      <span class="name">Taxes :-</span>
      <span class="value">₦2,460</span>
    </div>
    <div class="label">
      <span class="name">Total :-</span>
      <span class="value">₦22,960</span>
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
  margin: auto;

  .label {
    font-size: 16px;
  }
}
</style>