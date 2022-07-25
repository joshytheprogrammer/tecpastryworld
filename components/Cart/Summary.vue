<template>
  <div class="labels">
    <div class="label">
      <span class="name">Subtotal ( {{cartNum}} item/s) :-</span>
      <span class="value"> {{formatData(subtotal, "price")}} </span>
    </div>
    <div class="label">
      <span class="name">Taxes :-</span>
      <span class="value">{{getTaxes(subtotal)}}</span>
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
import {mapGetters} from "vuex"

export default {
  computed: {
    ...mapGetters({
      'cartNum': 'global/cart/getCartNo',
      'subtotal': 'global/cart/getSubtotal'
    })
  },
  data() {
    return {

    }
  },
  methods: {
    formatData(value, type){
      if(type == "price") {
        let currency = '₦'
        var formatter = new Intl.NumberFormat('en-US');

        value = currency + formatter.format(value)
        return value
      }
    },
    getTaxes(value){
      let taxes = (value / 100) * 12
      taxes = this.formatData(taxes, "price")
      return taxes
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
    margin: 1rem 0;
    padding: 0.8rem 1rem;
    border-radius: 10px;
    border: 1px solid $primary;
    background: $secondary;
    color: $light;
    cursor: pointer;

    font-size: 16px;
    font-weight: 500;

    transition: box-shadow .2s ease-in-out;


    &:hover {
      box-shadow: 0px 4px 4px $primary;
    }

    &:disabled {
      background: $background;
      color: $primary;
      cursor: not-allowed;
    }
  }
}
</style>