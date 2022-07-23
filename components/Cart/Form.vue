<template>
  <form>
    <div class="form-group">

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
      font-size: 12px;
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
      padding: 0 0 0 0.4rem;
      transition: background .2s linear,outline .1s ease-in-out;
      font-size: 16px;
      font-weight: 400;

      &::placeholder {
        padding: 0 0 0 0.2rem;
        font-size: 14px;
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