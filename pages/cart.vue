<template>
  <div class="cart">
    <div class="items">
      <h1>Shopping Cart</h1>
      <div v-for="item in cartItems" :key="item.id">
        <p> {{item.id}} </p>
        <p> {{item.img}} </p>
        <p> {{item.name}} </p>
        <p> {{item.data.size}} </p>
        <p> {{item.data.type}} </p>
        <p> {{item.data.price}} </p>
        <p> {{item.data.message}} </p>
        <hr><br>
      </div>
    </div>
    <div class="checkout">

    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex"
export default {
  computed: {
    ...mapGetters({
      'cartItems': 'global/cart/getCartItems',
    })
  },
  data() {
    return {
      
    }
  }
}
</script>

<style lang="scss" scoped>
.cart {
  display: grid;
  grid-template-columns: 2fr 1fr;

  h1 {
    width: 100%;
    padding: 40px 1rem;
    background: $light;
    border-bottom: 1px solid $primary;
    text-align: left;

    font-size: 36px;
    font-weight: 400;
  }
}
</style>