<template>
  <div class="info">
    <div class="_entry">
      <b>Customer Phone: </b>
      <span>{{order.customer_phone}}</span>
    </div>
    <div class="_entry">
      <b>Total: </b>
      <span>{{formatter("amount", order.amount)}}</span>
    </div>
    <div class="_entry">
      <b>Order Status: </b>
      <!-- Add click here to pay function -->
      <span v-if="loading">loading...</span>
      <span v-else>{{order.status}} (<a @click.prevent="getPaymentStatus" href="#">refresh</a>)</span>
    </div>
    <div class="_entry">
      <b>Payment Method: </b>
      <span>{{order.payment_mode}}</span>
    </div>
    <div class="_entry">
      <b>Fulfillment Method: </b>
      <span>{{order.fulfillment}}</span>
    </div>
    <div class="_entry time">
      <b>Placed: </b>
      <span title="Y/M/D">{{order.created_at}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["order"],
  data() {
    return {
      loading: false,
    }
  },
  methods: {
    formatter(type, value) {
      if(type == "amount") {
        let currency = '₦'
        var formatter = new Intl.NumberFormat('en-US');

        value = currency + formatter.format(value)
        return value
      }
    },
    getPaymentStatus() {
      this.loading = true
    }
  }
}
</script>

<style lang="scss" scoped>
.info {
  width: 100%;
  padding-right: 0.4rem;
  border-right: 1px solid $primary;
  
  ._entry {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 0;
    border-bottom: 0.5px solid $primary;

    span {
      a {
        color: $primary;
        padding: 0 4px;

        &:hover {
          color: $secondary;
        }
      }
    }
  }

  @media screen and (max-width: $medium) {
    border: none;

    ._entry {
      font-size: 14px;

      span {
        max-width: 120px;
      }
    }
  }
}
</style>