<template>
  <div class="cart">
    <div class="items">
      <h1>Shopping Cart</h1>
      <div class="Qmk">
        <Item v-for="item in cartItems" :key="item.id" :item="item" />
      </div>
    </div>
    <div class="checkout">

    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex"
import Item from "../components/Cart/Item.vue"
export default {
  computed: {
    ...mapGetters({
      'cartItems': 'global/cart/getCartItems',
    })
  },
  components: {
    Item
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

    .QmK {
      max-height: 700px;
      overflow-x: auto;
    }
  }

  .checkout {
    margin-left: 0.5rem;
    background: $light;
  }
}
</style>