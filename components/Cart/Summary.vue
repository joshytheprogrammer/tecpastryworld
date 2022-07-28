<template>
  <div class="labels">
    <div class="label">
      <span class="name">Subtotal ( {{cartNum}} item/s) :-</span>
      <span class="value"> {{formatData(summary.subtotal, "price")}} </span>
    </div>
    <div class="label">
      <span class="name">V.A.T :-</span>
      <span class="value"> {{formatData(summary.taxes, "price")}} </span>
    </div>
    <hr>
    <div class="label">
      <span class="name">Total :-</span>
      <span class="value"> {{formatData(summary.total, "price")}} </span>
    </div>
    <p class="error" v-show="process.error"> {{process.error}}... </p>
    <button @click="handleOrder" :disabled="process.loading">{{process.message}}</button>
    {{orderDetails}}
  </div>
</template>

<script>
import {mapGetters, mapActions} from "vuex"

export default {
  computed: {
    ...mapGetters({
      'cartNum': 'global/cart/getCartNo',
      'summary': 'global/cart/getSummary',
      'process': 'global/checkout/returnProcess',
      'orderDetails': 'global/checkout/returnOrder'
    })
  },
  data() {
    return {

    }
  },
  methods: {
    ...mapActions({
      'order': 'global/checkout/handleOrder'
    }),
    handleOrder() {
      this.order()
    },
    formatData(value, type){
      if(type == "price") {
        let currency = '₦'
        var formatter = new Intl.NumberFormat('en-US');

        value = currency + formatter.format(value)
        return value
      }
    },
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

  .error {
    width: 100%;
    padding: 0.8rem 1rem;
    text-align: center;
    border-radius: 10px;
    background: $danger;
    color: $light;
    font-size: 14px;
    font-weight: 400;
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
      box-shadow: none;
    }
  }
}
</style>