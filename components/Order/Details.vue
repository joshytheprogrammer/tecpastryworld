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
      <span v-else><b>{{order.status}}</b> <a v-if="order.status == 'awaiting_payment'" @click="getPaymentStatus">(refresh)</a></span>
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
import axios from "axios"

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
    async getPaymentStatus() {
      this.loading = true
      await axios.post('http://127.0.0.1:8000/api/order/payment/verify', {
        'order_id': this.order.id 
      }).then((res) => {
        if(res.data.success) {
          this.$store.dispatch("global/notification/setNotification", {type: "success", message: res.data.success}, {root: true})
        }else if(res.data.error) {
          this.$store.dispatch("global/notification/setNotification", {type: "error", message: res.data.error}, {root: true})
        }
      })
      this.loading = false
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
        cursor: pointer;
        padding: 0 4px;

        &:hover {
          color: $dark;
          text-decoration: underline;
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