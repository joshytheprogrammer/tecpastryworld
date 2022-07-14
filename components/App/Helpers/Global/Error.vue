<template>
  <div class="error" v-if="message">
    <p class="message">{{message}}.. Try <span @click="() => {$nuxt.refresh()}">Refreshing</span></p>
  </div>
</template>

<script>
export default {
  props: ['message']
}
</script>

<style lang="scss" scoped>
.error {
  padding: 1rem;
  width: 100%;
  display: flex;
  justify-content: center;

  .message {
    padding: 0.5rem;
    background: $danger;
    border-radius: 4px;
    color: $light;
    font-weight: 700;
    font-size: 12px;

    span {
      text-decoration: underline;
      cursor: pointer;
    }
  }
}
</style>
