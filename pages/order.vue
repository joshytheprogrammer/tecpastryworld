<template>
  <div class="order">
    <Header v-show="$route.query.order_no">
      <template #title>Order "{{order_no}}" was successfully placed</template>
    </Header>
    <div class="content" v-show="$route.query.order_no">
      <div class="container details">
        <h2>Order Details</h2>
        <div class="data">
          <Details :order="order" />
          <div class="res">
            a
          </div>
        </div>
      </div>
      <div class="container products">
        <h2>Products Ordered</h2>
        {{order}}
      </div>
    </div>
    <Search />
  </div>
</template>

<script>
import axios from "axios"
import Details from "../components/Order/Details.vue"
import Header from "../components/Home/Helpers/Headers.vue"
import Search from "../components/Order/Search.vue"
export default {
  components: {
    Search,
    Header,
    Details
  },
  watch: {
    '$route.query.order_no': function (no){
      this.order_no = no
    }
  },
  data() {
    return {
      order_no: this.$route.query.order_no,
      order: {}
    }
  },
  async fetch() {
    await axios.get('http://127.0.0.1:8000/api/order/'+this.order_no).then((res) => {
      this.order = res.data
    })
  },
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

        .res {
          padding: 1.5rem 0.8rem;
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