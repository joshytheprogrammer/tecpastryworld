<template>
  <div class="popular">
    <Headers>
      <template #title>Popular Categories</template>
    </Headers>
    <div class="categories">
      <Card v-for="item in categories" :key="item.id" :item="item" />
    </div>
  </div>
</template>

<script>
import axios from "axios"
import Headers from "./Helpers/Headers.vue"
import Card from "../App/Cards/Category.vue"

export default {
  components: {
    Headers,
    Card
  },
  data() {
    return {
      categories: []
    }
  },
  async fetch() {
    await axios.get('http://127.0.0.1:8000/api/home/categories').then((response) => {
      this.categories.push(...response.data.data)
    })
  }
}
</script>

<style lang="scss" scoped>
.popular {
  background: $light;

  .categories {
    margin: 2rem;

    display: grid;
    gap: 1rem;
    justify-items: center;
    grid-template-columns: repeat(3, 1fr);

    @media screen and (max-width: $m-large) {
      width: 100%;
      margin: 0;
      padding: 0.9rem;
      grid-template-columns: repeat(2,1fr);
    }

    @media screen and (max-width: $medium) {
      display: block;
    }
  }
}
</style>