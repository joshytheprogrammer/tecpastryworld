<template>
  <div class="product">
    <div class="s">
      <img loading="lazy" :src="item.thumbnail" :alt="item.name">
      <div class="_details">
        <NuxtLink :to="'/shop/'+item._slug" :aria-label="item.name" :title="item.name">{{item.name}}</NuxtLink>
        <span class="prices"> {{formatter(item.price)}} </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['item'],
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
.product {
  padding: 1rem 0;

  .s {
    img {
      width: 100%;
      max-height: 100%;
      
      height: 300px;
      object-fit: contain;
      border-radius: 10px;
      transition: 0.5s all ease-in-out;
    }

    ._details {
      display: block;
      padding: 1rem 0.5rem;
      color: $primary;

      a {
        white-space: pre-line;
        overflow: hidden;
        height: 58.2px;
        text-overflow: ellipsis;

        padding: 0.2rem 0;
        text-transform: capitalize;
        display: inherit;
        color: inherit;
        text-decoration: none;
        font-size: 21px;
        font-weight: 600;

        &:hover {
          text-decoration: underline;
          text-decoration-color: $primary;
        }
      }

      span {
        font-size: 18px;
        font-weight: 400;
      }
    }
  }

  @media screen and (max-width: $s-medium) {
    padding: 0;
    margin: 1rem 0;
    width: 100%;

    .s {
      display: grid;
      grid-template-columns: 1fr 2fr;
      border: 1px solid $primary;
      
      height: 150px;
      border-radius: 10px;
      
      img {
        width: 100%;
        height: 150px;
        object-fit: contain;
        border-right: 1px solid $primary;
        border-radius: 10px 0px 0px 10px;
      }

      ._details {
        padding: 0.5rem;

        a {
          height: auto;
          font-size: 18px;
          font-weight: 600;
        }

        span {
          font-size: 16px;
        }
      }
    }
  }
}
</style>