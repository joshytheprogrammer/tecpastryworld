<template>
  <div class="item">
    <div class="_thumbnail">
      <img :src="item.img" :alt="'Cart Item - '+item.name">
    </div>
    <div class="_details">
      <h3> {{item.name}} </h3>
      <div> 
        <span> <b>Size:</b>{{item.data.size}}</span>
        <span> <b>Type:</b>{{item.data.type}}</span>
        <span> <b>Writing:</b>{{item.data.message}}</span>
      </div>
      <div class="actions">
        <a href="#">Delete</a>
        <a href="#">Save for Later</a>
      </div>
    </div>
    <div class="_price">
      <p> {{item.data.price}} </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["item"]
}
</script>

<style lang="scss" scoped>
.item {
  display: grid;
  grid-template-columns: 0.5fr 2fr 0.1fr;
  padding: 1rem;
  
  ._thumbnail {
    img {
      width: 100%;
      height: 200px;
      object-fit: cover;
    }
  }

  ._details {
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    h3 {
      
    }
  }
}
</style>