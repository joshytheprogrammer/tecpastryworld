<template>
  <div class="popular" id="categories">
    <Headers>
      <template #title>Popular Categories</template>
    </Headers>
    <Loader v-if="$fetchState.pending" type="clip" />
    <NetworkError v-else-if="$fetchState.error || error" :message="error" />
    <div v-else class="categories">
      <Card v-for="item in categories" :key="item.id" :item="item" />
    </div>
  </div>
</template>

<script>
import axios from "axios"
import Headers from "../App/Helpers/Global/Headers.vue"
import Card from "../App/Cards/Category.vue"

import Loader from "../App/Helpers/Global/Loader.vue"
import NetworkError from "../App/Helpers/Global/Error.vue"
export default {
  components: {
    Headers,
    Card,
    Loader,
    NetworkError
  },
  data() {
    return {
      categories: [],
      error: '',
    }
  },
  async fetch() {
    await axios.get('http://127.0.0.1:8000/api/home/categories').then((response) => {
      this.categories.push(...response.data.data)
    }).catch((error) => {
      this.error = error.message
    })
  }
}
</script>

<style lang="scss" scoped>
.popular {
  background: $light;
  margin-bottom: 2rem;

  .categories {
    padding: 2rem 12px;
    display: flex;
    // justif
    overflow: auto;
    // margin: 2rem;

    // display: grid;
    // gap: 1rem;
    // justify-items: center;
    // grid-template-columns: repeat(5, 1fr);

    // @media screen and (max-width: $m-large) {
    //   grid-template-columns: repeat(3,1fr);
    // }

    // @media screen and (max-width: $medium) {
    //   width: 100%;
    //   margin: 0;
    //   padding: 0.9rem;
    //   grid-template-columns: repeat(2,1fr);
    // }
  }
}
</style>
