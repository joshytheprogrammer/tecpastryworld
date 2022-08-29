<template>
  <div class="results">
    <div class="products">
      <div class="product" v-for="item in results.products" :key="item._id">
        <div class="s">
          <img loading="lazy" :src="item.thumbnail" :alt="item.name">
          <div class="_details">
            <NuxtLink :to="'/shop/'+item._slug" :aria-label="item.name" :title="item.name">{{item.name}}</NuxtLink>
            <span class="prices"> [ {{formatter(item.price)}} ] </span>
          </div>
        </div>
      </div>
    </div>
    <div class="categories">
      <div class="category" v-for="item in results.categories" :key="item.id">
        <div class="s">
          <img loading="lazy" :src="'item.thumbnail'" :alt="'TEC product category - '+item.name">
          <div class="_details">
            <NuxtLink to="/categories/5887782">{{item.name}}</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["results"],
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
    margin: 1rem 0;
    display: grid;
    justify-items: center;
    grid-template-columns: repeat(4, 1fr);


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
    margin: 1rem 0;
    display: flex;
    overflow: auto;

    .category {

      .s {
        max-width: 220px;
        margin-right: 1rem;

        img {
          width: 220px;
          height: 328px;
          object-fit: cover;
          border-radius: 10px;
          transition: 0.5s all ease-in-out;
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
        }
      }
    }

    // .s {

    // }
  }
}
</style>
