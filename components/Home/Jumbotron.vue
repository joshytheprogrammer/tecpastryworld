<template>
  <section class="jumbotron">
    <h1>{{home.heading}}</h1>
    <p>{{home.message}}</p>
    <NuxtLink to="/shop">Shop Now</NuxtLink>
  </section>
</template>

<script>
export default {
  data(){
    return {
      home: {
        heading: 'Welcome to the official TECpastryworld website',
        message: 'Here you can find the best products and deals we offer.'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.jumbotron {
  padding: 1rem;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-color: #ff914d;
  object-fit: fill;
  height: 600px;
  max-width: 100%;
  color: $light;
  user-select: none;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  h1 {
    font-weight: 600;
    font-size: 48px;
    padding: 1rem 0;
  }

  p { 
    line-height: 1.235;
    font-size: 28px;
    padding: 1rem 0;
  }

  a {
    display: block;
    margin: 1rem 0;
    width: fit-content;
    background: $light;
    color: $primary;
    padding: 12px 16px;
    text-decoration: none;
    border-radius: 8px;

    &:hover {
      background: $primary;
      color: $light;
    }
  }

  @media screen and (max-width: $medium) {
    padding-bottom: 2rem;
    height: 500px;

    h1 {
      font-size: 36px;
      font-weight: 500;
    }

    p {
      font-size: 24px;
      padding: 1rem 0;
    }
  }

  @media screen and (max-width: $small) {
    padding-bottom: 2rem;

    h1 {
      font-size: 28px;
      font-weight: 400;
    }

    p {
      font-size: 18px;
      padding: 1rem 0;
    }
  }
}
</style>