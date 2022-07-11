<template>
  <div class="recommended">
    <Headers>
      <template #title>Recommended this season</template>
    </Headers>
    <div class="products">
      <Card v-for="item in recommended" :key="item.id" :item="item" />
    </div>
  </div>
</template>

<script>
import axios from "axios"
import Headers from "./Helpers/Headers.vue"
import Card from "../App/Cards/Product.vue"
export default {
  components: {
    Headers,
    Card
  },
  data() {
    return {
      recommended: []
    }
  },
  async fetch() {
    await axios.get('http://127.0.0.1:8000/api/home/recommended').then((response) => {
      this.recommended.push(...response.data.data)
    })
  },
}
</script>

<style lang="scss" scoped>
.recommended {
  background: $light;

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
      width: 100%;
      margin: 0;
      padding: 0.9rem;
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