<template>
  <div>
    <div v-for="item in cartItems" :key="item.id">
      <p> {{item.id}} </p>
      <p> {{item.img}} </p>
      <p> {{item.name}} </p>
      <p> {{item.data.size}} </p>
      <p> {{item.data.type}} </p>
      <p> {{item.data.price}} </p>
      <p> {{item.data.message}} </p>
      <hr><br>
    </div>
  </div>  
</template>

<script>
import {mapGetters} from "vuex"
export default {
  computed: {
    ...mapGetters({
      'cartItems': 'global/cart/getCartItems',
    })
  }
}
</script>

<style lang="scss" scoped>

</style>