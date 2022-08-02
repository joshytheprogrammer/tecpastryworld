<template>
  <div class="after_item">
    <NetworkError v-if="$fetchState.error || error" :message="error" />
    <div v-if="configurable">
      <p>**Prices exclude VAT and other taxes</p>
      <Price :loading="priceLoading" :price="data.price" />
      <form @submit.prevent="addItem">
        <div class="form-group">
          <label>Select Size*</label>
          <select class="form-control" v-model="data.size" @change="onChange" :disabled="inCart" required>
            <option value="8">8 inches</option>
            <option value="10">10 inches</option>
            <option value="12">12 inches</option>
            <option value="14">14 inches</option>
          </select>
        </div>
        <div class="form-group">
          <label title="This is the flavour of the cake itself. Not the decoration">Type of Cake*</label>
          <select class="form-control" v-model="data.type" @change="onChange" :disabled="inCart" required>
            <option value="sc">Sponge Cake</option>
            <option value="rv">Red Velvet Cake</option>
            <option value="cc">Chocolate Cake</option>
            <option value="fc">Fruit Cake</option>
          </select>
        </div>
        <div class="form-group">
          <label>Cake Message*</label>
          <span v-show="inCart">These settings may not reflect those in cart...</span>
          <input class="form-control" type="text" placeholder="What message would you like on top of the cake" v-model="data.message" :disabled="inCart" required>
        </div>
        
        <button v-if="!inCart" class="btn" type="submit">Add to Cart</button>

        <div class="bottom-bar" v-if="inCart">
          <span class="btn-m">Added to Cart</span>
          <a class="danger" @click.prevent="deleteItem(item._id)">Delete</a>
          <Back />
        </div>
      </form>
    </div>
    <div v-if="!configurable && !loading">
      <NoForm :id="item._id" :img="item.thumbnail" />
    </div>
  </div>
</template>

<script>
import axios from "axios"
import {mapActions} from "vuex"

import NetworkError from "../../components/App/Helpers/Global/Error.vue"
import Price from "./Price.vue"
import Back from "../../components/App/Helpers/Global/Back.vue"
import NoForm from "./NoForm.vue"

export default {
  props: ["item"],
  computed: {
    inCart() {
      return this.$store.getters['global/cart/inCart'](this.item._id)
    }
  },
  components: {
    Price,
    NoForm,
    NetworkError,
    Back
  },
  data() {
    return {
      configurable: true,
      loading: true,
      priceLoading: true,
      data: {
        price: '',
        size: '',
        type: '',
        message: ''
      },
      error: '',
    }
  },
  async fetch() {
    await axios.get('http://127.0.0.1:8000/api/config/getFormat/'+this.item._id).then((response) => {

      // Decide whether to show form or not
      this.configurable = response.data[0].configurable
      let format = JSON.parse(response.data[0].format)

      // Checks if format exists
      if(format) {
        this.setData(format)
      }

      this.loading = false

      // End this async function
      return
    }).catch((error) => {
      this.error = error.message
    })
  },
  methods: {
    ...mapActions({
      'addToCart': "global/cart/addToCart",
      'deleteFromCart': "global/cart/deleteFromCart"
    }),
    onChange() {
      this.refreshPrice()
    },
    async refreshPrice() {
      // Make price load
      this.priceLoading = true

      // Reset price
      this.data.price = ''

      let data = {
        "product_id": this.item._id,
        "type": this.data.type,
        "size": this.data.size
      }

      await axios.post('http://127.0.0.1:8000/api/config/getCost', data).then((response) => {
        this.data.price = this.formatPrice(response.data)
        this.priceLoading = false
      }).catch((error) => {
        this.error = error.message
      })
    },
    setData(format) {
      // Assign Variables
      this.data.size = format.size
      this.data.type = format.type

      // Return Price
      this.refreshPrice()
    },
    formatPrice(price) {
      let currency = '₦'
      var formatter = new Intl.NumberFormat('en-US');
      
      return currency+formatter.format(price)
    },
    addItem() {
      let data = [
        this.item,
        this.data
      ]

      this.addToCart(data)

      this.$router.push('/cart')
    },
    deleteItem(id) {
      this.deleteFromCart(id)
    }
  }
}
</script>

<style lang="scss" scoped>
div {

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

      span {
        font-size: 12px;
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

    .bottom-bar {
      display: flex;
      justify-content: space-between;
      align-items: center;

      a {
        font-size: 16px;
        font-weight: 500;
        cursor: pointer;
        text-decoration: none;
        padding-right: 1rem;

        &:hover {
          text-decoration: underline;
        }
      }

      .btn-m {
        display: block;
        background: linear-gradient($success, $primary, $secondary);
        color: $light;
        width: fit-content;
        padding: 12px 24px;
        user-select: none;
        margin: 1rem 0;
        font-size: 16px;
        font-weight: 400;
        border-radius: 8px;
        border: 2px solid $primary;
      }
    }

    .btn {
      background: $primary;
      color: $light;
      border: none;
      font-size: 14px;
      font-weight: 400;
      border-radius: 8px;
      height: 45px;
      width: 120px;
      padding: 4px 24px;
      margin: 1rem 0;
      cursor: pointer;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

      &:disabled {
        background: $background;
        cursor: not-allowed;
      }
    }
  }

  @media screen and (max-width: $medium){
    form {
      .bottom-bar {
        .btn-m {
          padding: 6px 9px;
        }
      }
    }
  }
}
</style>