<template>
  <div class="category-p">
    <!-- Display all products under specific category -->
    <Loader v-if="$fetchState.pending" type="clip" />
    <NetworkError v-else-if="$fetchState.error || error" :message="error" />
    <div v-else class="products">
      <Product v-for="item in products" :key="item.id" :item="item" />
    </div>
  </div>
</template>

<script>
import axios from "axios"
import NetworkError from "../../components/App/Helpers/Global/Error.vue"
import Loader from "../../components/App/Helpers/Global/Loader.vue"
import Product from "../../components/App/Cards/Product.vue"

export default {
  components: {
    NetworkError,
    Loader,
    Product
  },
  data() {
    return {
      products: [],
      error: '',
    }
  },
  mounted() {
    this.$fetch()
  },
  async fetch() {
    await axios.get('http://127.0.0.1:8000/api/categories/'+this.$route.params.id+'/products').then((response) => {
      this.products.push(...response.data.data)
    }).catch((error) => {
      this.error = error.message
    })
  },

}
</script>

<style lang="scss" scoped>
.category-p {
  background: $light;
  margin-bottom: 2rem;

  .products {
    margin: 2rem;

    display: grid;
    gap: 1rem;
    justify-items: center;
    grid-template-columns: repeat(5,1fr);

    @media screen and (max-width: $large) {
      width: 100%;
      margin: 0;
      padding: 0.9rem;
      grid-template-columns: repeat(4,1fr);
    }

    @media screen and (max-width: $m-large) {
      grid-template-columns: repeat(3,1fr);
    }

    @media screen and (max-width: $medium) {
      grid-template-columns: repeat(2,1fr);
    }

    @media screen and (max-width: $s-medium) {
      display: block;
    }
  }
}
</style>
