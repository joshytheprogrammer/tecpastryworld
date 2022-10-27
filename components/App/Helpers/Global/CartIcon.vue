<template>
  <div class="cart" @click="$router.push('/cart')" title="Cart">
    <span>{{cartNum}}</span>
    <Icon icon="akar-icons:cart" width="24" height="24" />
  </div>
</template>

<script>
import {mapGetters} from "vuex"
import {Icon} from '@iconify/vue2'
export default {
  computed: {
    ...mapGetters({
      'cartNum': 'global/cart/getCartNo'
    })
  },
  components: {
    Icon
  }
}
</script>

<style lang="scss" scoped>
.cart {
  color: $light;
  cursor: pointer;
  padding: 0 0 12px 12px;
  display: flex;
  flex-direction: column;

  span {
    font-size: 8px;
    text-align: center;
  }

  @media screen and (max-width: $medium) {
    color: $primary;
  }
}
</style>
