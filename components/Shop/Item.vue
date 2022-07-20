<template>
  <div class="Qdw">
    <div class="_item">
      <img :src="item.thumbnail" :alt="'Image for '+item.name+ ' by tecpastryworld'">
      <div class="details">
        <div class="inherent">
          <h1 class="n"> {{item.name}}. </h1>
          <p class="p_r" title="the range of prices available">[ {{formatter(item.price)}} ]</p>
        </div>
        <Form :item="item" />
      </div> 
    </div>
  </div>
</template>

<script>
import Form from "./Form.vue"
export default {
  components: {
    Form,
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
  min-width: 90%;
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
      height: 100%;
      max-height: 700px;
      object-fit: cover;
      border-radius: 10px 0px 0px 10px;
      transition: 0.5s all ease-in-out;
    }

    .details {
      padding: 1rem;

      .inherent {
        text-align: left;

        .n {
          font-size: 36px;
          font-weight: 500;
          text-transform: capitalize;
        }

        .p_r {
          padding: 0.5rem 0;
          font-size: 24px;
          font-weight: 400;
        }
      }
    }
  }

  @media screen and (max-width: $large) {
    ._item {
      img {
        object-fit: fill;
      }
    }
  }

  @media screen and (max-width: $medium) {
    min-width: 80%;
    max-width: 80%;
    padding: 1rem;

    ._item {
      width: 100%;
      max-height: fit-content;
      display: block;

      img {
        max-height: 500px;
        border-radius: 10px 10px 0px 0px;
      }

      .details .inherent {
        .n {
          font-size: 24px;
        }

        .p_r {
          font-size: 18px;
        }
      }
    }
  }

  @media screen and (max-width: $s-medium) {
    min-width: 100%;
    max-width: 100%;

    img {
      max-height: 400px;
      object-fit: contain;
    }
  }
}
</style>