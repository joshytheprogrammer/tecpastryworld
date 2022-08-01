<template>
  <div class="_search">
    <div class="_group">
      <label>Invalid Order ID</label>
      <input type="search" v-model="order_no" @keypress.enter="submitOrderNo" required placeholder="Enter your order id here">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      order_no: this.$route.query.order_no
    }
  },
  methods: {
    submitOrderNo() {
      if(this.order_no.length == 16) {
        this.$router.push({path: '/order', query: {order_no: this.order_no}})
      }

      return
    }
  }
}
</script>

<style lang="scss" scoped>
._search {
  padding: 1rem;
  display: block;
  margin: auto;

  ._group {
    width: 720px;


    label {
      display: inline-block;
      color: $danger;
      text-transform: uppercase;
      font-size: 12px;
      font-weight: 500;
    }

    input {
      @include input;
      display: block;
      border: 1px solid $primary;

      &:focus {
        border: 1px solid $secondary;
      }

      @include search-text;
    }
  } 
}
</style>