<template>
  <div class="m" v-if="id">
    <qrcode class="qr" :value="value" :size="size" level="H" foreground="#001021" />
    <p class="warn">Product not eligible for online purchase. </p>
    <p class="inform">Scan the code <b>OR</b> click the button below to order through Whatsapp.</p>
    
    <a :href="value" target="_blank" class="btn">Whatsapp to Order</a>
  </div>
</template>

<script>
import Qrcode from 'qrcode.vue'

export default {
  props: ["id", "img"],
  data() {
    return {
      value: '',
      size: '300',
    }
  },
  components: {
    Qrcode
  },
  mounted() {
    this.generateLink()
  },
  methods: {
    generateLink() {
      let base = "https://api.whatsapp.com/send?phone=2347010718819&text=Hi there I would like to order the product < "+this.id+" >. It looks like "+this.img+""

      this.value = base
    }
  }
}
</script>

<style lang="scss" scoped>
.m {
  max-width: 300px;

  .qr {
    margin: 1rem 0;
  }

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

  @media screen and (max-width: $large) {
    .qr {
      margin: 0.1rem 0;
    }

    .btn {
      margin: 0.5rem 0;
    }
  }
}
</style>