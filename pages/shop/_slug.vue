<template>
  <div class="product">
    <Loader v-if="$fetchState.pending" type="clip" />
    <NetworkError v-else-if="$fetchState.error || error" :message="error" />
    <Product :item="product" v-else />
  </div>
</template>

<script>
import axios from "axios"
import Loader from "../../components/App/Helpers/Global/Loader.vue"
import NetworkError from "../../components/App/Helpers/Global/Error.vue"
import Product from "../../components/Shop/Slug.vue"

export default {
  components: {
    Loader,
    NetworkError,
    Product
  },
  data() {
    return {
      product: null,
      error: '',
    }
  },
  mounted(){
    this.$fetch()
  },
  async fetch() {
    await axios.get('http://127.0.0.1:8000/api/shop/'+this.$route.params.slug).then((response) => {
      this.product = response.data.data[0]
    }).catch((error) => {
      this.error = error.message
    })
  }
}
</script>

<style lang="scss" scoped>

</style>