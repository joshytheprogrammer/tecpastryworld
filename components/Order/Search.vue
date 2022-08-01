<template>
  <div class="_search">
    <input type="search" v-model="order_no" @keypress.enter="submitOrderNo" required placeholder="Enter your order id here">
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
      if(this.order_no < 14) {
        return
      }

      this.$router.push({path: '/order', query: {order_no: this.order_no}})
    }
  }
}
</script>

<style lang="scss" scoped>
._search {
  padding: 2rem 1rem;

  input {
    @include input;
    margin: auto;
    display: block;
    width: 50%;
    border: 1px solid $primary;

    &:focus {
      border: 1px solid $secondary;
    }

    @include search-text;
  }
}
</style>