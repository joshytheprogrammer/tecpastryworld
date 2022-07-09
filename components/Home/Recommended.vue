<template>
  <div class="recommended">
    <Headers>
      <template #title>Recommended this season</template>
    </Headers>
    <Card />
    <!-- <div v-for="item in recommended" :key="item.id">
      <img :src="item.thumbnail" width="250px" height="250px" alt="">
      <p>{{item._id}}</p>
      <p>{{item._slug}}</p>
      <p>{{item.name}}</p>
      <p>{{JSON.parse(item.price).lowest + "-" + JSON.parse(item.price).highest}}</p>
    </div> -->
  </div>
</template>

<script>
import axios from "axios"
import Headers from "./Helpers/Headers.vue"
import Card from "../App/Cards/Product.vue"
export default {
  components: {
    Headers,
    Card
  },
  data() {
    return {
      recommended: []
    }
  },
  // async fetch() {
  //   await axios.get('http://127.0.0.1:8000/api/home/recommended').then((response) => {
  //     this.recommended.push(...response.data.data)
  //   })
  // },
}
</script>

<style lang="scss" scoped>

</style>