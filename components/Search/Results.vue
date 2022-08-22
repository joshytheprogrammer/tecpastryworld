<template>
  <div class="results">
    <div class="products">
      <div class="product">
        <div class="s">
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
      </div>
      <div class="product">
        <div class="s">
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
      </div>
      <div class="product">
        <div class="s">
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
      </div>
    </div>
    <div class="categories">
      <div class="category">
        <div class="s">
          <img loading="lazy" src="https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80" alt="'TEC product category - '+chocolate">
          <div class="_details">
            <NuxtLink to="/categories/5887782">Chocolate cakes</NuxtLink>
          </div>
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
      
      .s {
        display: grid;
        grid-template-columns: 1fr 2fr;
        border: 1px solid $primary;
        margin: 1rem 0;
        
        height: 150px;
        border-radius: 10px;

        img {
          width: 100%;
          height: 140px;
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
  }

  .categories {
    margin: 1rem 0;

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
    //   display: flex;
    //   overflow: auto;
    // }
  }
}
</style>