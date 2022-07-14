<template>
  <div class="product">
    <Loader v-if="$fetchState.pending" type="clip" />
    <NetworkError v-else-if="$fetchState.error || error" :message="error" />
    <div v-else>{{this.product}}</div>
  </div>
</template>

<script>
import axios from "axios"
import Loader from "../../components/App/Helpers/Global/Loader.vue"
import NetworkError from "../../components/App/Helpers/Global/Error.vue"
export default {
  components: {
    Loader,
    NetworkError
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