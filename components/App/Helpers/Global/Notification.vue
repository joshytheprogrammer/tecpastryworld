<template>
  <div class="BzC">
    <div class="notification" v-if="data.message" :class="data.type">
      <p>
        The following error has occured : {{data.message}}.
      </p>
      <button>Seen</button>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex"
export default {
  computed: {
    ...mapGetters({
      data: 'global/notification/notyData'
    })
  },
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
    font-weight: 500;
    font-size: 16px;
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