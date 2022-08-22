<template>
  <div class="res">
    <p v-show="order_status == 'awaiting_status'">If you haven't made payment, you can do so <a href="#">here</a>. </p>
    <p>If you have made payment, we will reach out to you soon. If you want to talk to us, you can reach out to us <a :href="'https://api.whatsapp.com/send?phone=2347010718819&text=Hi, I placed the order ['+order_no+']. Whats wrong?'">here</a>. </p>
    <p>Be sure to reach out to us with the <b :title="customer_phone">PHONE NUMBER</b> you used to order.</p>
    <p>Order Status and its meaning -> <b>{ awaiting_payment : Payment not yet verified }</b>, <b>{ pending : Product is being prepared }</b>, <b>{ successful : Customer satisifed }</b></p>
  </div>
</template>

<script>
export default {
  props: ["order_no", "order_status", "customer_phone"],
  mounted () {

  }
}
</script>

<style lang="scss" scoped>
.res {
  p {
    line-height: 1.8;
    font-size: 18px;

    a {
      color: $primary;
    }
  }

  @media screen and (max-width: $medium){
    padding: 1.5rem 0.2rem;

    p {
      padding: 0.2rem 0;
      line-height: 2;
      font-size: 14px;
    }
  }
}
</style>