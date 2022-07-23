<template>
  <div class="cart">
    <div class="items">
      <h1>Shopping Cart</h1>
      <div class="Qmk">
        <Item v-for="item in cartItems" :key="item.id" :item="item" />
      </div>
    </div>
    <div class="checkout">
      <h1>Checkout</h1>
      <div class="Kzs">
        <div class="form">
          
        </div>
        <div class="quotes">

        </div>
      </div>
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
  grid-template-columns: 3fr 1fr;

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

    .Qmk {
      max-height: 600px;
      overflow-x: auto;
    }
  }

  .checkout {
    margin-left: 0.5rem;
    background: $light;
    
    h1 {
      border-bottom: 1px solid $primary;
      padding: 40px 1rem;
      text-align: left;
      font-size: 36px;
      font-weight: 400;
    }
  }

  @media screen and (max-width: $medium){
    width: 100%;
    display: flex;
    flex-direction: column-reverse;

    .items {
      border: none;

      h1 {
        font-size: 28px;
        padding: 20px 1rem;
      }

      .Qmk {
        max-height: fit-content;
        overflow-x: hidden;
      }
    }

    .checkout {
      margin-left: 0;

      h1 {
        font-size: 28px;
        padding: 20px 1rem;
      }
    }
  }
}
</style>