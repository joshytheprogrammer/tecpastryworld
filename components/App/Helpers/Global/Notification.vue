<template>
  <div class="BzC" v-if="data.message">
    <div class="notification" :class="data.type">
      <p>
        <b>{{data.message}}</b>.
      </p>
      <span @click="clear"><Icon icon="ep:circle-close" width="24" height="24" /></span>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from "vuex"
import {Icon} from '@iconify/vue2'
export default {
  computed: {
    ...mapGetters({
      data: 'global/notification/notyData'
    })
  },
  components: {
    Icon
  },
  mounted() {
    setTimeout(() => {
      this.clear()
    }, 5000)
  },
  methods: {
    ...mapActions({
      clear: 'global/notification/clearNotification'
    })
  }
}
</script>

<style lang="scss" scoped>
.BzC {
  display: flex;
  justify-content: center;

  .notification {
    margin: 1rem;
    border-radius: 10px;

    padding: 12px;
    position: fixed;
    color: $light;
    width: fit-content;
    
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
      padding-right: 2rem;
    }

    span {
      cursor: pointer;
      padding: 3px 0 0 2px;
    }

    &.success {
      background: $success;
    }

    &.warning {
      background: $warning;
    }

    &.error {
      background: $danger;
    }

    &.neutral {
      background: $primary;
    }
  }
}
</style>