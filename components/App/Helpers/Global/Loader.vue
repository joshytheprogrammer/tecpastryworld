<template>
  <div>
    <grid-loader v-if="type == 'grid'" :color="styles.color" :size="styles.size"></grid-loader>
    <clip-loader v-if="type == 'clip'" :color="styles.color" :size="styles.size"></clip-loader>
    <fade-loader v-if="type == 'fade'" :color="styles.color" :size="styles.size"></fade-loader>
    <bounce-loader v-if="type == 'bounce'" :color="styles.color" :size="styles.size"></bounce-loader>
    <scale-loader v-if="type == 'scale'" :color="styles.color" :size="styles.size"></scale-loader>
    <pacman-loader v-if="type == 'pacman'" :color="styles.color" :size="styles.size"></pacman-loader>
  </div>
</template>

<script>
// docs @ https://greyby.github.io/vue-spinner/
import GridLoader from 'vue-spinner/src/GridLoader.vue'
import ClipLoader from 'vue-spinner/src/ClipLoader.vue'
import FadeLoader from 'vue-spinner/src/FadeLoader.vue'
import BounceLoader from 'vue-spinner/src/BounceLoader.vue'
import ScaleLoader from 'vue-spinner/src/ScaleLoader.vue'
import PacmanLoader from 'vue-spinner/src/PacmanLoader.vue'

export default {
  components: {
    GridLoader,
    ClipLoader,
    FadeLoader,
    BounceLoader,
    ScaleLoader,
    PacmanLoader
  },
  props: ['type'],
  data() {
    return {
      styles: {
        color: '#0A0908',
        size: '64px'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.v-spinner {
  margin: auto;
  padding: 2rem 0;
}
</style>