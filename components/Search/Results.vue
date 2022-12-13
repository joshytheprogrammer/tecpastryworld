<template>
  <div class="results">
    <div class="products">
      <Product v-for="item in results.products" :key="item._id" :item="item" />
    </div>
    <div class="categories">
      <Category v-for="item in results.categories" :key="item.id" :item="item" />
    </div>
  </div>
</template>

<script>
import Product from "../App/Cards/Product.vue"
import Category from "../App/Cards/Category.vue"
export default {
  props: ["results"],
  components: {
    Product,
    Category
  },
  methods: {
    formatter(price) {
      price = JSON.parse(price)

      let lowest = price.lowest
      let highest = price.highest

      let currency = '₦'

      var formatter = new Intl.NumberFormat('en-US');
      price = currency + formatter.format(lowest) + ' - ' + currency + formatter.format(highest)

      return price
    }
  }
}
</script>

<style lang="scss" scoped>
.results {
  padding: 1rem;
  border-radius: 8px;
  background: $light;

  .products {
    margin: 2rem 0;
    display: grid;
    justify-items: center;
    grid-template-columns: repeat(5, 1fr);

    @media screen and (max-width: $large) {
      width: 100%;
      padding: 0;
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

  .categories {
    margin: 2rem 0;
    display: flex;
    overflow: auto;
  }
}
</style>
