<template>
  <div class="results">
    <div class="products">
      <div class="product">
        <img src="https://res.cloudinary.com/dsgvwxygr/image/upload/v1658826487/tec/products/edited_image_with_label_vrbcdx-removebg-preview_in8nuc.png" alt="chococlate_cake">
        <div class="_right">
          <div class="_details">
            <a>10 Inch Double Layer Whipped Cream Cake With Chocolates On Top.</a>
            <p>[ ₦20,500 - ₦40,000 ]</p>
          </div>
          <div class="_actions">

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
    .product {
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