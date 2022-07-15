<template>
  <div>
    {{data}}
    <form v-if="configurable">
      <div class="form-group">
        <label>Select Size*</label>
        <select class="form-control" v-model="data.size" @change="onChange">
          <option value="8">8 inches</option>
          <option value="10">10 inches</option>
          <option value="12">12 inches</option>
          <option value="14">14 inches</option>
        </select>
      </div>
      <div class="form-group">
        <label>Type of Cake*</label>
        <select class="form-control" v-model="data.type" @change="onChange">
          <option value="sc">Sponge Cake</option>
          <option value="cc">Chocolate Cake</option>
          <option value="rv">Red Velvet Cake</option>
          <option value="fc">Fruit Cake</option>
        </select>
      </div>
      <div class="form-group">
        <label>Cake Message*</label>
        <input class="form-control" type="text" placeholder="What message would you like on top of the cake">
      </div>
      <button class="btn" type="submit">Add to Cart</button>
    </form>
    <div v-else class="m">
      <p>Product not available online</p>
      <button>Whatsapp to Order</button>
    </div>
  </div>
</template>

<script>
import axios from "axios"

export default {
  data() {
    return {
      configurable: false,
      data: {
        size: '',
        type: '',
      }
    }
  },
  async fetch() {
    await axios.get('http://127.0.0.1:8000/api/config/getFormat/'+this.id).then((response) => {
      let isFormAllowed = response.data[0].configurable
      let format = JSON.parse(response.data[0].format)

      // Decide whether to show form or not
      this.configurable = isFormAllowed
      
      if(format) {
        this.data.size = format.size
        this.data.type = format.type
      }

    })
  },
  props: ["id"],
  methods: {
    onChange() {
      console.log('changed')
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
}
</style>