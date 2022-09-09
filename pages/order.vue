<template>
  <div class="order">
    <Header v-show="$route.query.order_no">
      <template #title>Thank you for choosing tecpastryworld 🙏</template>
    </Header>
    <div class="content" v-show="$route.query.order_no">
      <div class="container details">
        <h2>Order Details</h2>
        <div class="data">
          <Details :order="order" />
          <Message :customer_phone="order.customer_phone" :order_no="order_no" :order_status="order.status" />
        </div>
      </div>
      <div class="container products">
        <h2>Products Ordered</h2>
        <div class="data">
          <Card v-for="product in products" :key="product.id" :product="product" />
        </div>
      </div>
    </div>
    <Search />
  </div>
</template>

<script>
import axios from "axios"
import Details from "../components/Order/Details.vue"
import Search from "../components/Order/Search.vue"
import Card from "../components/Order/Card.vue"
import Message from "../components/Order/Message.vue"
import Header from "../components/App/Helpers/Global/Headers.vue"

export default {
  components: {
    Search,
    Header,
    Message,
    Details,
    Card,
  },
  watch: {
    '$route.query.order_no': function (no){
      this.order_no = no
      this.$fetch()
    },
    '$route.query.reference': function (ref) {
      this.ref = ref
    }
  },
  data() {
    return {
      order_no: this.$route.query.order_no,
      ref: this.$route.query.reference ? this.$route.query.reference : '',
      order: {},
      products: ''
    }
  },
  async fetch() {
    await axios.get('http://127.0.0.1:8000/api/order/'+this.order_no).then((res) => {
      this.order = res.data
    })

    await this.getProducts()
  },
  async mounted() {
    if (this.ref.length && this.order_no.length && this.order.status == 'awaiting_payment') {
      await axios.post('http://127.0.0.1:8000/api/order/payment/verify/', {
        'reference' : this.ref,
        'order_id' : this.order_no
      }).then((res) => {
        this.order.status = "pending"
        this.$store.dispatch("global/notification/setNotification", {type: "success", message: res.data.success}, {root: true})
      })
    }
  },
  methods: {
    async getProducts() {
      await axios.get('http://127.0.0.1:8000/api/order/getProducts/'+this.order_no).then((res) => {
        this.products = res.data
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.order {
  .content {
    .container {
      width: 90%;
      margin: 1rem auto;
      min-height: 300px;
      border-radius: 12px;
      background: $light;

      h2 {
        text-align: center;
        font-size: 28px;
        font-weight: 500;
        padding: 1rem 0.4rem;
        border-bottom: 1px solid $primary;
      }

      &.details {
        .data {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          padding: 1.5rem 0.8rem;
        }
      }

      &.products {
        .data {
          // cursor: grab;
          display: flex;
          overflow-x: auto;
        }
      }
    }
  }

  @media screen and (max-width: $medium) {
    .content .container {
      &.details {
        .data {
          display: block;
        }
      }
    }
  }
}
</style>
