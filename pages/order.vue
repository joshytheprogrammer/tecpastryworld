<template>
  <div class="order">
    <Header v-show="$route.query.order_no">
      <template #title>Order "{{order_no}}" was successfully placed</template>
    </Header>
    <div class="content" v-show="$route.query.order_no">
      <div class="container payment"></div>
    </div>
    <Search />
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
  async fetch() {
    await axios.get(''+this.order_no).then((res) => {

    })
  },
  data() {
    return {
      order_no: this.$route.query.order_no
    }
  }
}
</script>

<style lang="scss" scoped>

</style>