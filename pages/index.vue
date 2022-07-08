<template>
  <div class="home">
    <Jumbotron />
    <Recommended />
  </div>
</template>

<script>
import Jumbotron from "../components/Home/Jumbotron.vue"
import Recommended from "../components/Home/Recommended.vue"
export default {
  components: {
    Jumbotron,
    Recommended
  }
}
</script>