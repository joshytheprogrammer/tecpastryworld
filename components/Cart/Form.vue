<template>
  <form @submit.prevent="submit">
    <div class="form-group">
      <label>Fulfillment Method*</label>
      <select class="form-control" v-model="fulfillment" :disabled="disabled" required>
        <option value="pickup" selected>Pickup</option>
        <option value="delivery" disabled>Delivery (coming soon)</option>
      </select>
    </div>
    <div class="form-group">
      <label>Payment Method*</label>
      <select class="form-control" v-model="payment" :disabled="disabled" required>
        <option value="online" selected>Online</option>
        <option value="offline">Offline</option>
      </select>
    </div>
    <div class="form-group">
      <label>
        Phone Number*
        <a @click.prevent="disabled=!disabled" v-show="disabled">edit</a>
        <span v-show="!disabled" class="error">{{error}}</span></label>
      <input class="form-control" type="text" placeholder="We'll reach out to you here" v-model="phone" @keypress="logKeyStroke" :disabled="disabled" required>
    </div>
  </form>
</template>

<script>
import {mapActions} from "vuex"
export default {
  computed: {
    fulfillment: {
      get() {
        return this.$store['getters']['global/checkout/returnFulfillment']
      },
      set(value) {
        this.addFulfillment(value)
      }
    },
    payment: {
      get() {
        return this.$store['getters']['global/checkout/returnPayment']
      },
      set(value) {
        this.addPayment(value)
      }
    },
    phone: {
      get() {
        return this.$store['getters']['global/checkout/returnPhone']
      },
      set(value) {
        if(value.match(this.telPattern)){
          this.addPhone(value)
          this.disabled = true
          this.error = ""
        }else {
          this.error = "Invalid phone number"
        }
      }
    }
  },
  data() {
    return {
      error: '',
      disabled: false,
      telPattern: /^([0]{1})[0-9]{10}$/,
    }
  },
  methods: {
    ...mapActions({
      'addFulfillment': 'global/checkout/addFulfillment',
      'addPayment': 'global/checkout/addPayment',
      'addPhone': 'global/checkout/addPhone'
    }),
    submit() {
      if(this.phone.match(this.telPattern)) {
        this.disabled = true
        this.error = ""
      }
    },
    logKeyStroke(e) {
      // This function was created because the setter funtion skips the first keypress.
      this.phone = e.key
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
      width: 100%;
      display: flex;
      justify-content: space-between;
      margin: 18px 0 3px;
      font-size: 12px;
      text-transform: uppercase;
      letter-spacing: 1px;
      font-weight: bold;

      span {
        display: inline-flex;
        justify-content: flex-end;
        color: $danger;
        user-select: none;
      }

      a {
        cursor: pointer;

        &:hover {
          text-decoration: underline;
        }
      }
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

      &:disabled  {
        color: rgb(78, 77, 77);
        outline: 1px solid $background;
      }
    }
  }
}
</style>
