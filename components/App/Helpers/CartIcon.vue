<template>
  <div class="cart" @click="$router.push('/shop')">
    <span>0</span>
    <Icon icon="akar-icons:cart" width="24" height="24" />
  </div>
</template>

<script>
import {Icon} from '@iconify/vue2'
export default {
  components: {
    Icon
  }
}
</script>

<style lang="scss" scoped>
.cart {
  color: $light;
  cursor: pointer;
  padding: 0 12px 12px 12px;
  display: flex;
  flex-direction: column;

  span {
    font-size: 8px;
    text-align: center;
  }
}
</style>