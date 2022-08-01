<template>
  <div class="product" v-show="item">
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
  width: 220px;
  padding: 1rem;
  
  .thumb {
    img {
      width: 100%;
      max-height: 100%;
      
      height: 150px;
      object-fit: contain;
      border-radius: 10px;
      transition: 0.5s all ease-in-out;
    }
  }

  ._details {
    display: block;
    padding: 0.4rem 0;
    color: $primary;

    a {
      white-space: pre-line;
      overflow: hidden;
      height: 40.8px;
      text-overflow: ellipsis;

      text-transform: capitalize;
      display: inherit;
      color: inherit;
      text-decoration: none;
      font-size: 16px;
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
      font-size: 12px;
      padding-right: 0.2rem;

      b {
        padding-right: 0.2rem;
      }
    }
  }
}
</style>