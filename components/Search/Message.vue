<template>
  <div class="message">
    <p>Showing over <b>{{total}}</b> results for <b><span>"{{term}}"</span></b></p>
  </div>
</template>

<script>
export default {
  props: ["total", "term"]
}
</script>

<style lang="scss" scoped>
.message {
  width: 100%;
  background: $light;
  padding: 1rem;
  border-radius: 8px;

  p {
    font-weight: 500;
    font-size: 16px;

    span {
      color: $secondary;
    }
  }
}
</style>