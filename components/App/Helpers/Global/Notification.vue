<template>
  <div class="BzC" v-if="data.message">
    <div class="notification" :class="data.type">
      <p>
        The following error has occured : {{data.message}}.
      </p>
      <button @click="clear">Clear</button>
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
  margin-top: 2rem;

  .notification {
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
    position: fixed;
    color: $light;
    padding: 12px;
    width: 90%;

    button {
      background: $light;
      font-weight: 500;
      cursor: pointer;
      color: $primary;
      border-radius: 2px;
      padding: 4px 12px;
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