<template>
  <div class="res">
    <p v-show="order_status == 'awaiting_payment'">If you haven't made payment, you can do so <a :href="url">here</a>. </p>
    <p>If you have made payment, we will reach out to you soon. </p>
    <p>If you want to talk to us, you can reach out to us <a :href="'https://api.whatsapp.com/send?phone=2347010718819&text=Hi, order inquiry for order ['+order_no+'] with status ['+order_status+']'">here</a>. </p>
    <p>Be sure to reach out to us with the <b :title="customer_phone">PHONE NUMBER</b> you used to order.</p>
    <p>Order Status and its meaning -> { <b>awaiting_payment</b> : Payment not yet verified }, { <b>pending</b> : Product is being prepared }, { <b>successful</b> : Customer satisifed }</p>
  </div>
</template>

<script>
import axios from "axios"

export default {
  props: ["order_no", "order_status", "customer_phone"],
  data() {
    return {
      url: ''
    }
  },
  async mounted () {
    await axios.get('http://127.0.0.1:8000/api/order/getPayment/'+this.order_no).then((res) => {
      this.url = res.data.url
    })
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
