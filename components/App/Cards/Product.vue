<template>
  <div class="product">
    <img loading="lazy" :src="item.thumbnail" :alt="item.name">
    <div class="_details">
      <NuxtLink :to="'/shop/'+item._slug">{{item.name}}</NuxtLink>
      <span class="prices">{{JSON.parse(item.price).lowest + "-" + JSON.parse(item.price).highest}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['item']
}
</script>

<style lang="scss" scoped>
.product {
  padding: 1rem 0;

  img {
    width: 100%;
    max-height: 100%;
    object-fit: cover;
    border-radius: 10px;
    transition: 0.5s all ease-in-out;

    // &:hover {
    //   // Make image zoom properly later
    //   transform: scale(1.5);
    // }
  }

  ._details {
    display: block;
    padding: 1rem 0.5rem;
    color: $primary;

    a {
      padding: 0.2rem 0;
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

  @media screen and (max-width: $s-medium) {
    display: inline-flex;
    border: 1px solid $primary;
    width: 100%;
    height: 150px;
    border-radius: 10px;
    margin: 1rem 0;
    padding: 0;

    img {
      width: 40%;
      height: 150px;
      border-right: 1px solid $primary;
      border-radius: 10px 0px 0px 10px;
    }

    ._details {
      padding: 0.5rem;

      a {
        font-size: 18px;
        font-weight: 600;
      }

      span {
        font-size: 16px;
      }
    }
  }
}
</style>