<template>
  <div class="order">
    <Search />
    Your order {{$route.query.order_no}} was successfully placed.
  </div>
</template>

<script>
import Search from "../components/Order/Search.vue"
export default {
  components: {
    Search
  }
}
</script>

<style>

</style>