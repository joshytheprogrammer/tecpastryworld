<template>
  <div class="menu" v-if="isOpen">
    <div class="menuItem" v-for="item in menuItems" :key="item.id" @click="$router.push(item.link)">
      <div class="icon">
        <Icon :icon="item.icon" width="24" height="24"  />
      </div>
      <span class="text">{{item.text}}</span>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex"
import {Icon} from '@iconify/vue2'
export default {
  computed: {
    ...mapGetters({
      isOpen: 'mobile/isOpen'
    })
  },
  components: {
    Icon
  },
  data(){
    return {
      menuItems: [
        {
          id: 1,
          icon: 'akar-icons:home',
          text: 'Home',
          link: '/'
        },
        {
          id: 2,
          icon: 'ant-design:shop-outlined',
          text: 'Shop',
          link: '/shop'
        },
        {
          id: 3,
          icon: 'clarity:image-gallery-line',
          text: 'Gallery',
          link: '/gallery'
        },
        {
          id: 4,
          icon: 'ic:outline-play-lesson',
          text: 'Free Classes',
          link: '/tutorial/free'
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.menu {
  right: 0;
  z-index: 12;
  width: 180px;
  background: $light;
  position: fixed;
  display: flex;
  flex-direction: column;

  .menuItem {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 14px;
    padding: 8px 12px;
    border-bottom: 2px solid $primary;

    .icon, .text {
      padding: 8px 12px;
    }
  }
}
</style>