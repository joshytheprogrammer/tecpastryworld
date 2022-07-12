<template>
  <div class="BzC" v-if="data.message">
    <div class="notification" :class="data.type">
      <p>
        Notification : <b>{{data.message}}</b>.
      </p>
      <span @click="clear">x</span>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from "vuex"
export default {
  computed: {
    ...mapGetters({
      data: 'global/notification/notyData'
    })
  },
  methods: {
    ...mapMutations({
      clear: 'global/notification/CLEAR_NOTIFICATION'
    })
  }
}
</script>

<style lang="scss" scoped>
.BzC {
  display: flex;
  justify-content: center;

  .notification {
    margin-top: 2rem;
    border-radius: 10px;

    padding: 12px;
    position: fixed;
    color: $primary;
    width: fit-content;
    
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
      padding-right: 2rem;
    }

    button {
      background: $light;
      font-weight: 500;
      cursor: pointer;
      color: $primary;
      width: fit-content;
      height: 100%;
      border: none;

      &:hover {
        background: $primary;
        color: $light;
      }
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
  }
}
</style>