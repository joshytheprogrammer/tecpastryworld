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
      <span>{{order.mode}}</span>
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
  props: ["order"]
}
</script>

<style>

</style>