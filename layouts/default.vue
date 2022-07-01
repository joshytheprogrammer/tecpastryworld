<template>
  <div class="app">
    <MNavigation v-if="mobile" />
    <DNavigation v-else />
    <div class="body">
      <Nuxt />
    </div>
    
  </div>
</template>

<script>
import DNavigation from "../components/App/Nav.vue" // Desktop Navbar
import MNavigation from "../components/App/MobileNav.vue" // Mobile Navbar

import { mapMutations, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      mobile: 'mobile/mobile',
    }),
  },
  components: {
    DNavigation,
    MNavigation
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
  min-height: 100vh;
  margin-top: 70px;
}
</style>