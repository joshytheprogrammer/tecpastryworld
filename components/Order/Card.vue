<template>
  <div class="product">
    <div class="thumb">
      <img :src="item.thumbnail" :alt="'Cart Item - '+item.name">
    </div>
    <div class="_details">
      <NuxtLink :to="'/shop/'+item._slug" :aria-label="item.name" :title="item.name">{{item.name}}</NuxtLink>
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
      item: ''
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
    },
    async fetchProduct() {
      await axios.get('http://127.0.0.1:8000/api/order/getProduct/'+this.product.product_id).then((res) => {
        this.item = res.data.data[0]
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.product {

  .thumb {
    img {
      width: 200px;
      height: 200px;
      border-radius: 10px;
      object-fit: cover;
    }
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