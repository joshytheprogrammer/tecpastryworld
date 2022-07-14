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
    <button class="btn" disabled type="submit">Add to Cart</button>
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
      height: 45px;
      background: $light;
      color: $primary;
      border: none;
      outline: 1px solid $primary;
      border-radius: 8px;
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

  .btn {
    background: $primary;
    color: $light;
    border: none;
    font-size: 14px;
    font-weight: 400;
    border-radius: 8px;
    height: 40px;
    width: 120px;
    padding: 4px 24px;
    margin: 1rem 0;
    cursor: pointer;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    &:disabled {
      background: rgb(203, 198, 198);
      cursor: not-allowed;
    }
  }
}
</style>