<template>
  <div class="m">
    <p>Product not eligible for online purchase. </p>
    <p>Scan the code OR the click the button below to Order.</p>
    <qrcode :value="value" :size="size" level="H" />
    <button>Whatsapp to Order</button>
  </div>
</template>

<script>
import Qrcode from 'qrcode.vue'

export default {
  data() {
    return {
      value: 'https://example.com',
      size: 300,
    }
  },
  components: {
    Qrcode
  }
}
</script>

<style lang="scss" scoped>
.m {

  p {
    background: $warning;
    color: $primary;
    padding: 0.5rem 1rem;
    margin: 1rem 0;
    font-size: 16px;
    font-weight: 400;
    border-radius: 4px;
    width: fit-content;
  }

  button {
    background: $success;
    color: $primary;
    border: none;
    font-size: 16px;
    font-weight: 400;
    border-radius: 8px;
    height: 45px;
    padding: 4px 24px;
    margin: 1rem 0;
    cursor: pointer;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    transition: box-shadow 0.4s ease-in-out;

    &:hover {
      box-shadow: 0px 4px 4px $dark;
    }
  }
}
</style>