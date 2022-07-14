<template>
  <div class="product">
    <div class="item" v-if="product">
      {{this.product}}
    </div>
    <div v-else>
      <Loader type="clip" />
    </div>
  </div>
</template>

<script>
import axios from "axios"
import Loader from "../../components/App/Helpers/Global/Loader.vue"
export default {
  components: {
    Loader
  },
  data() {
    return {
      product: null
    }
  },
  mounted(){
    this.$fetch()
  },
  async fetch() {
    await axios.get('http://127.0.0.1:8000/api/shop/'+this.$route.params.slug).then((response) => {
      this.product = response.data.data[0]
    })
  }
}
</script>

<style lang="scss" scoped>

</style>