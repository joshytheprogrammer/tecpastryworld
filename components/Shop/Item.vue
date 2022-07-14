<template>
  <div class="Qdw">
    <div class="_item">
      <img :src="item.thumbnail" :alt="'Image for '+item.name">
      <div class="details">
        <div class="inherant">
          <span class="n"> {{item.name}} </span>
          <span class="p_r">[ {{formatter(item.price)}} ]</span>
        </div>
        <!-- <Price /> -->
        <!-- <Fo -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["item"],
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
.Qdw {
  max-width: 90%;
  margin: 0 auto;
  padding: 2rem 0;
  
  ._item {
    background: $light;

    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 2rem;

    img {
      width: 300px;
      height: 300px;
    }
  }
}
</style>