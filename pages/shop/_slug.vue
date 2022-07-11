<template>
  <div class="">
    Hello World
    {{this.$route.params.slug}}
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: null,
    }
  },
  // async fetch() {
  //   await axios.get('http://127.0.0.1:8000/api/shop/'+this.$route.params.slug).then((response) => {
  //     this.product = response.data
  //   })
  // }
}
</script>

<style lang="scss" scoped>

</style>