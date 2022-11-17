<template>
  <div class="home">
    <Jumbotron />
    <Recommended />
    <Categories />
    
  </div>
</template>

<script>
import Jumbotron from "../components/Home/Jumbotron.vue"
import Recommended from "../components/Home/Recommended.vue"
import Categories from "../components/Home/Categories.vue"
export default {
  components: {
    Jumbotron,
    Recommended,
    Categories
  }
}
</script>
