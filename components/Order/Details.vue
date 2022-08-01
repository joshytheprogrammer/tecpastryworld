<template>
  <div class="info">
    <p>Customer Phone: {{order.customer_phone}}</p>
    <p>Total: {{order.amount}}</p>
    <p>Order Status: {{order.status}}</p>
    <p>Payment Method: {{order.mode}}</p>
    <p>Fulfillment Method: {{order.fulfillment}}</p>
    <p>Placed: {{order.created_at}}</p>
  </div>
</template>

<script>
export default {
  props: ["order"]
}
</script>

<style>

</style>