<template>
  <div class="m">
    <p>Product not eligible for online purchase.</p>
    <button>Whatsapp to Order</button>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.m {

  p {
    background: $warning;
    color: $primary;
    padding: 0.5rem 1rem;
    margin: 1rem 0;
    font-size: 16px;
    font-weight: 400;
    border-radius: 4px;
    width: fit-content;
  }

  button {
    background: $success;
    color: $primary;
    border: none;
    font-size: 16px;
    font-weight: 400;
    border-radius: 8px;
    height: 45px;
    padding: 4px 24px;
    margin: 1rem 0;
    cursor: pointer;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    transition: box-shadow 0.4s ease-in-out;

    &:hover {
      box-shadow: 0px 4px 4px $dark;
    }
  }
}
</style>