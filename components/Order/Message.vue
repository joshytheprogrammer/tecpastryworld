<template>
  <div class="res">
    <p>If you have made payment, we will reach out to you soon. If you want to talk to us, you can reach out to us <a :href="'https://api.whatsapp.com/send?phone=2347010718819&text=Hi, I placed the order ['+order_no+']. How far?'">here</a>. </p>
    <p>Be sure to reach out to us with the <b :title="order.customer_phone">PHONE NUMBER</b> you used to order.</p>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>