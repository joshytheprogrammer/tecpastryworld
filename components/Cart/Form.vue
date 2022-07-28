<template>
  <form>
    <div class="form-group">
      <label>Fulfillment Method*</label>
      <select class="form-control" v-model="fulfillment_method" @change="addData" required>
        <option value="pickup" selected>Pickup</option>
        <option value="delivery" disabled>Delivery (coming soon)</option>
      </select>
    </div>
    <div class="form-group">
      <label>Payment Method*</label>
      <select class="form-control" required>
        <option value="online" selected>Online</option>
        <option value="offline">Offline</option>
      </select>
    </div>
    <div class="form-group">
      <label>Phone Number*</label>
      <input class="form-control" type="text" placeholder="We'll reach out to you here" required>
    </div>
  </form>
</template>

<script>
import {mapGetters, mapActions} from "vuex"
export default {
  computed: {
    ...mapGetters({
      fulfillment_method: "global/checkout/returnFulfillment"
    })
  },
  methods: {
    ...mapActions({
      'addFullfilment': 'global/checkout/addFullfilment'
    }),
    addData(data, payload) {
      if(data == "f_m") {
        payload = this.fulfillment_method
        this.addFullfilment(payload)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
form {
  margin: 0 auto;
  margin-bottom: 2rem;
  width: 90%;

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