<template>
  <form>
    <div class="form-group">
      <label>Select Size</label>
      <select class="form-control">
        <option value="8" selected>8 inches</option>
        <option value="10">10 inches</option>
        <option value="12">12 inches</option>
        <option value="14">14 inches</option>
      </select>
    </div>
    <div class="form-group">
      <label>Type of Cake</label>
      <select class="form-control">
        <option value="bc" selected>Vanilla Cake</option>
        <option value="cc">Chocolate Cake</option>
        <option value="rv">Red Velvet Cake</option>
        <option value="fc">Fruit Cake</option>
      </select>
    </div>
    <div class="form-group">
      <label>Cake Message</label>
      <input class="form-control" type="text" placeholder="What message would you like on top of the cake">
    </div>
  </form>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
form {
  .form-group {
    label {
      display: inline-block;
      margin: 18px 0 3px;
      font-size: 0.6rem;
      text-transform: uppercase;
      letter-spacing: 1px;
      font-weight: bold;
    } 

    .form-control {
      width: 100%;
      height: 48px;
      background: $background;
      color: $primary;
      border: none;
      outline: 1px solid $primary;
      border-radius: 4px;
      padding: 0 0 0 0.2rem;
      transition: background .2s linear,outline .1s ease-in-out;
      font-size: 16px;
      font-weight: 400;

      &::placeholder {
        font-size: 16px;
        font-weight: normal;
      }

      &:focus {
        border: none;
        background: $light;
        outline: $secondary solid 0.1rem ;
      }
    }
  }
}
</style>