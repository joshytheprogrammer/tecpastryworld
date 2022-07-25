<template>
  <div class="app" ontouchstart="">
    <MNavigation v-if="mobile" />
    <DNavigation v-else />
    <div class="body">
      <Notification v-if="notyExists.message" />
      <Nuxt keep-alive :keep-alive-props="{ max: 10 }" />
    </div>
  </div>
</template>

<script>
import DNavigation from "../components/App/Nav.vue" // Desktop Navbar
import MNavigation from "../components/App/MobileNav.vue" // Mobile Navbar
import Notification from "../components/App/Helpers/Global/Notification.vue"

import { mapMutations, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      mobile: 'mobile/mobile',
      notyExists: 'global/notification/notyData'
    }),
  },
  components: {
    DNavigation,
    MNavigation,
    Notification
  },
  beforeMount() {
    this.$store.dispatch("global/cart/initializeCart")
  },
  mounted() {
    this.isMobile()

    // Watch for window size change
    window.addEventListener("resize", this.isMobile);
  },
  unmounted() {
    window.removeEventListener("resize", this.isMobile);
  },
  methods: {
    ...mapMutations({
      isMobile: 'mobile/checkWidth',
    }),
  },
  
}
</script>

<style lang="scss">
.body {
  // min-height: 100vh;
  margin-top: 70px;
}
</style>