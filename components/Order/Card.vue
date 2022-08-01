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
export default {
  props: ["product"],
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
  }
}
</script>

<style>

</style>