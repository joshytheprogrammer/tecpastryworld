<template>
  <div class="cart">
    <div class="items">
      <h1>Shopping Cart</h1>
      <div class="item" v-for="item in cartItems" :key="item.id">
        <div class="_thumbnail">
          <img width="120px" height="120px" :src="item.img" :alt="'Cart Item - '+item.name">
        </div>
        <div class="_details">
          <p> {{item.name}} </p>
          <p> {{item.data.size}} </p>
          <p> {{item.data.type}} </p>
          <p> {{item.data.message}} </p>
        </div>
        <div class="_price">
          <p> {{item.data.price}} </p>
        </div>
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

  .items {
    background: $light;
    border-right: 1px solid $primary;
    width: 100%;
    
    h1 {
      border-bottom: 1px solid $primary;
      padding: 40px 1rem;
      
      text-align: left;

      font-size: 36px;
      font-weight: 400;
    }

    .item {
      display: grid;
      grid-template-columns: 1fr 2fr 1fr;
    }
  }

  .checkout {
    margin-left: 0.5rem;
    background: $light;
  }
}
</style>