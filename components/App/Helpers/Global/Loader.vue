<template>
  <div>
    <grid-loader v-if="type == 'grid'" :color="styles.color" :size="styles.size"></grid-loader>
    <clip-loader v-if="type == 'clip'" :color="styles.color" :size="styles.size"></clip-loader>
    <bounce-loader v-if="type == 'bounce'" :color="styles.color" :size="styles.size"></bounce-loader>
    <scale-loader v-if="type == 'scale'" :color="styles.color" :size="styles.size"></scale-loader>
  </div>
</template>

<script>
// docs @ https://greyby.github.io/vue-spinner/
import GridLoader from 'vue-spinner/src/GridLoader.vue'
import ClipLoader from 'vue-spinner/src/ClipLoader.vue'
import BounceLoader from 'vue-spinner/src/BounceLoader.vue'
import ScaleLoader from 'vue-spinner/src/ScaleLoader.vue'

export default {
  components: {
    GridLoader,
    ClipLoader,
    BounceLoader,
    ScaleLoader,
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