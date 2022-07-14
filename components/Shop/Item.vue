<template>
  <div class="Qdw">
    <div class="_item">
      <img :src="item.thumbnail" :alt="'Image for '+item.name+ ' by tecpastryworld'">
      <div class="details">
        <div class="inherent">
          <h1 class="n"> {{item.name}}. </h1>
          <p class="p_r" title="the range of prices available">[ {{formatter(item.price)}} ]</p>
        </div>
        <Price />
        <Form />
      </div>
    </div>
  </div>
</template>

<script>
import Price from "./Price.vue"
import Form from "./Form.vue"
export default {
  components: {
    Price,
    Form
  },
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
    border-radius: 10px;
    width: fit-content;
    max-height: 700px;
    color: $primary;
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    gap: 1rem;

    img {
      width: 100%;
      height: auto;
      max-height: 700px;
      object-fit: contain;
      border-radius: 10px 0px 0px 10px;
      transition: 0.5s all ease-in-out;
    }

    .details {
      padding: 1rem 0;

      .inherent {
        text-align: left;

        .n {
          font-size: 36px;
          font-weight: 500;
        }

        .p_r {
          padding: 0.5rem 0;
          font-size: 24px;
          font-weight: 400;
        }
      }
    }
  }
}
</style>