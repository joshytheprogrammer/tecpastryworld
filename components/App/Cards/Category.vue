<template>
  <div class="category">
    <div class="s">
      <img loading="lazy" :src="item.thumbnail" :alt="'TEC product category - '+item.name">
      <div class="_details">
        <NuxtLink :to="'/categories'">{{item.name}}</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['item']
}
</script>

<style lang="scss" scoped>

</style>