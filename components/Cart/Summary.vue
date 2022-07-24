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
    <hr>
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
  margin: 1rem auto;

  .label {
    padding: 0.4rem 0;

    display: flex;
    justify-content: space-between;

    .name {
      font-size: 16px;
      font-weight: 400;
    }

    .value {
      font-size: 18px;
      font-weight: 500;
    }
  }

  button {
    width: 100%;
    padding: 0.6rem 1rem;
    border-radius: 10px;
    border: none;
    background: $secondary;

  }
}
</style>