<template>
  <div class="recommended" id="recommended">
    <Headers>
      <template #title>Recommended this season</template>
    </Headers>
    <Loader v-if="$fetchState.pending" type="clip" />
    <NetworkError v-else-if="$fetchState.error || error" :message="error" />
    <div v-else class="products">
      <Card v-for="item in recommended" :key="item.id" :item="item" />
    </div>
  </div>
</template>

<script>
import axios from "axios"
import Headers from "./Helpers/Headers.vue"
import Card from "../App/Cards/Product.vue"

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
      recommended: [],
      error: '',
    }
  },
  async fetch() {
    await axios.get('http://127.0.0.1:8000/api/home/recommended').then((response) => {
      this.recommended.push(...response.data.data)
    }).catch((error) => {
      this.error = error.message
    })
  },
}
</script>

<style lang="scss" scoped>
.recommended {
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