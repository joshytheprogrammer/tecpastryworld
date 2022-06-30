<template>
  <div class="menu" v-if="isOpen">
    <div class="menuItem" v-for="item in menuItems" :key="item.id">
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
          text: 'Home'
        },
        {
          id: 2,
          icon: 'ant-design:shop-outlined',
          text: 'Shop'
        },
        {
          id: 3,
          icon: 'clarity:image-gallery-line',
          text: 'Gallery'
        },
        {
          id: 4,
          icon: 'ic:outline-play-lesson',
          text: 'Free Classes'
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.menu {
  width: 200px;
  display: flex;
  flex-direction: column;
  float: right;

  .menuItem {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 8px 12px;
    border-bottom: 2px solid $primary;

    .icon, .text {
      padding: 8px 12px;
    }
  }
}
</style>