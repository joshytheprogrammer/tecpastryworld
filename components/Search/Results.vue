<template>
  <div class="results">
    <div class="products">
      <div class="product">
        <img src="https://res.cloudinary.com/dsgvwxygr/image/upload/v1658826487/tec/products/edited_image_with_label_vrbcdx-removebg-preview_in8nuc.png" alt="chococlate_cake">
        <div class="_right">
          <div class="_details">
            <NuxtLink to="shop/10-inch-double-layer-whipped-cream-cake-with-chocolates-on-top-gwer435t">10 Inch Double Layer Whipped Cream Cake With Chocolates On Top.</NuxtLink>
            <p>[ ₦20,500 - ₦40,000 ]</p>
          </div>
          <div class="_actions">

          </div>
        </div>
      </div>
      <div class="product">
        <img src="https://res.cloudinary.com/dsgvwxygr/image/upload/v1658826830/tec/products/1D22D433-FA9A-43A8-B46B-7DB3715FE0C6_pv1wsw-removebg-preview_kexbzd.png" alt="chococlate_cake">
        <div class="_right">
          <div class="_details">
            <NuxtLink to="shop/10-inch-double-layer-butter-cream-cake-with-gold-coins-flr34tnb">10 Inch Double Layer Butter Cream Cake With Gold Coins.</NuxtLink>
            <p>[ ₦14,000 - ₦35,000 ]</p>
          </div>
          <div class="_actions">

          </div>
        </div>
      </div>
      <div class="product">
        <img src="https://res.cloudinary.com/dsgvwxygr/image/upload/v1658826345/tec/products/signal-2022-04-05-122625_001_zrzlp3-removebg-preview_d7zujj.png" alt="chococlate_cake">
        <div class="_right">
          <div class="_details">
            <NuxtLink to="shop/10-inch-double-layer-butter-cream-cake-with-chocolate-drip-and-gold-coins-f5643g0b">10 Inch Double Layer Butter Cream Cake With Chocolate Drip And Gold Coins.</NuxtLink>
            <p>[ ₦20,500 - ₦40,000 ]</p>
          </div>
          <div class="_actions">

          </div>
        </div>
      </div>
    </div>
    <div class="categories">
      <div class="category">
        <img loading="lazy" src="https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80" alt="'TEC product category - '+chocolate">
        <div class="_details">
          <NuxtLink to="/categories/5887782">Chocolate cakes</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["results"]
}
</script>

<style lang="scss" scoped>
.results {
  .products {
    margin: 1rem 0;

    .product {
      display: grid;
      grid-template-columns: 1fr 2fr;
      border: 1px solid $primary;
      margin: 1rem 0;
      
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
          display: block;
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
          font-size: 16px;
        }
      }
    }
  }

  .categories {
    margin: 1rem 0;
    width: 220px;

    .category {
      img {
        width: 100%;
        height: 378px;
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
}
</style>