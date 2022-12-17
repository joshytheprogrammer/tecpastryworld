<template>
  <div class="product">
    <Loader v-if="$fetchState.pending" type="clip" />
    <NetworkError v-else-if="$fetchState.error || error" :message="error" />
    <Item :item="product" v-else />
    <!-- <Gallery /> -->
    <!-- <Reviews /> -->
  </div>
</template>

<script>
import axios from "axios"
import Loader from "../../components/App/Helpers/Global/Loader.vue"
import NetworkError from "../../components/App/Helpers/Global/Error.vue"
import Item from "../../components/Shop/Item.vue"

export default {
  components: {
    Loader,
    NetworkError,
    Item
  },
  data() {
    return {
      product: '',
      error: '',
    }
  },
  head(){
    return {
      title: this.product.name + " tecpastryworld product " + this.product._id,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.product.name + " you can purchase this product from this site or call us using product id - "+ this.product._id
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.product.name + " tecpastryworld product " + this.product._id
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.product.name + " - you can purchase this product for " + this.product.price + " from this site or call us using product id - " + this.product._id
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.product.thumbnail
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://www.tecpastryworld.com/shop/'+this.product._slug
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.product.name + " tecpastryworld product " + this.product._id
        },
        { hid: 'twitter:description',
          name: "twitter:description",
          content: this.product.name + " - you can purchase this product for " + this.product.price + " from this site or call us using product id - " + this.product._id
        },
        {
          hid: 'twitter:image',
          name: "twitter:image",
          content: this.product.thumbnail
        },
        {
          hid: "twitter:card",
          name: "twitter:card",
          content: "summary_large_image"
        },
      ]
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
