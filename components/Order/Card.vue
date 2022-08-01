<template>
  <div class="product">
    <div class="thumb">
      <img src="" alt="">
    </div>
    <div class="_details">

    </div>
    <div class="_others">
      <span> <b>Size:</b>{{product.cake_size}}" inches</span>
      <span> <b>Type:</b>{{formatData(product.cake_type, "type")}}</span>
      <span> <b>Writing:</b>"{{product.writing}}"</span>
    </div>
  </div>
</template>

<script>
import axios from "axios"
export default {
  props: ["product"],
  data() {
    return {

    }
  },
  mounted(){
    this.fetchProduct()
  },
  methods: {
    formatData(value, type){
      if(type == "type") {
        if(value == "rv") {
          return "Red Velvet Cake"
        }else if(value == "sc") {
          return "Sponge Cake"
        }else if(value == "cc") {
          return "Chocolate Cake"
        }else if(value == "fc") {
          return "Fruit Cake"
        }
      }

      if(type == "price") {
        let currency = '₦'
        var formatter = new Intl.NumberFormat('en-US');

        value = currency + formatter.format(value)
        return value
      }
    },
    async fetchProduct() {
      await axios.get('http://127.0.0.1:8000/api/order/getProduct/'+this.roduct.product_id).then((res) => {
        console.log(res)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.product {
  .thumb {

  }

  ._details {

  }

  ._others {
    display: flex;
    justify-content: flex-start;

    span {
      font-size: 14px;
      padding-right: 0.5rem;

      b {
        padding-right: 0.2rem;
      }
    }
  }
}
</style>