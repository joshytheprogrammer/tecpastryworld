<template>
  <div class="info">
    <div class="_entry">
      <b>Customer Phone: </b>
      <span>{{order.customer_phone}}</span>
    </div>
    <div class="_entry">
      <b>Total: </b>
      <span>{{order.amount}}</span>
    </div>
    <div class="_entry">
      <b>Order Status: </b>
      <span>{{order.status}}</span>
    </div>
    <div class="_entry">
      <b>Payment Method: </b>
      <span>{{order.payment_mode}}</span>
    </div>
    <div class="_entry">
      <b>Fulfillment Method: </b>
      <span>{{order.fulfillment}}</span>
    </div>
    <div class="_entry">
      <b>Placed: </b>
      <span>{{order.created_at}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["order"],
  methods: {
    formatter() {
      
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
  }

  @media screen and (max-width: $medium) {
    border: none;
  }
}
</style>