<template>
  <div class="order">
    <Search />
    <div class="content" v-show="$route.query.order_no">

    </div>
    Your order {{order_no}} was successfully placed.
  </div>
</template>

<script>
import Search from "../components/Order/Search.vue"
export default {
  components: {
    Search
  },
  watch: {
    '$route.query.order_no': function (no){
      this.order_no = no
    }
  },
  data() {
    return {
      order_no: this.$route.query.order_no
    }
  }
}
</script>

<style>

</style>