<template>
  <div class="cart">
    <div class="items">
      <h1>Shopping Cart</h1>
      <div class="Qmk" v-if="cartItems.length">
        <Item v-for="item in cartItems" :key="item.id" :item="item" />
      </div>
      <div class="not-showing" v-else>
        <span>No items in cart</span>
      </div>
    </div>
    <div class="checkout">
      <h1>Checkout</h1>
      <div class="Kzs">
        <div class="form">
          <Form />
        </div>
        <div class="summary" v-show="cartNum">
          <Summary />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Item from "../components/Cart/Item.vue"
import Form from "../components/Cart/Form.vue"
import Summary from "../components/Cart/Summary.vue"
import {mapGetters} from "vuex"

export default {
  computed: {
    ...mapGetters({
      'cartItems': 'global/cart/getCartItems',
      'cartNum': 'global/cart/getCartNo'
    })
  },
  components: {
    Item,
    Form,
    Summary
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

      p {
        padding: 20px 1rem;
      }
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
      margin: 1rem 0;

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