<template>
  <div class="m">
    <p class="warn">Product not eligible for online purchase. </p>
    <p class="inform">Scan the code <b>OR</b> the click the button below to Order.</p>
    <qrcode class="qr" :value="value" :size="size" level="H" foreground="#001021" />
    <a href="#" class="btn">Whatsapp to Order</a>
  </div>
</template>

<script>
import Qrcode from 'qrcode.vue'

export default {
  data() {
    return {
      value: '',
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
    color: $primary;
    padding: 0.5rem 1rem;
    margin: 1rem 0;
    font-size: 16px;
    font-weight: 400;
    border-radius: 4px;
    width: fit-content;

    &.warn {
      background: $warning;
    }

    &.inform {
      background: $primary;
      color: $light;
    }
  }

  .qr {
    
  }

  .btn {
    display: inline-block;
    text-decoration: none;
    text-align: center;
    background: $success;
    color: $primary;
    border: none;
    font-size: 16px;
    font-weight: 400;
    border-radius: 8px;
    height: 45px;
    padding: 12px 24px;
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