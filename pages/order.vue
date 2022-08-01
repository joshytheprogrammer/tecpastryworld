<template>
  <div class="order">
    <Search />
    <Header v-show="$route.query.order_no">
      <template #title>Order "{{order_no}}" was successfully placed</template>
    </Header>
    <div class="content" v-show="$route.query.order_no">
      This was here {{order_no}}
    </div>
  </div>
</template>

<script>
import Header from "../components/Home/Helpers/Headers.vue"
import Search from "../components/Order/Search.vue"
export default {
  components: {
    Search,
    Header
  },
  watch: {
    '$route.query.order_no': function (no){
      this.order_no = no
    }
  },
  mounted() {
    
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