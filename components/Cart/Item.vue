<template>
  <div class="item">
    <div class="_thumbnail">
      <img :src="item.img" :alt="'Cart Item - '+item.name">
    </div>
    <div class="_details">
      <h3> {{item.name}} </h3>
      <div class="_price">
        <p> {{formatData(item.data.price, "price")}} </p>
      </div>
      <div class="data">
        <span> <b>Size:</b>{{item.data.size}}" inches</span>
        <span> <b>Type:</b>{{formatData(item.data.type, "type")}}</span>
        <span> <b>Writing:</b>"{{item.data.message}}"</span>
      </div>
      <div class="actions">
        <NuxtLink :to="'/shop/'+item.slug">Edit</NuxtLink>
        <a href="#">Save for Later</a>
        <a @click.prevent="deleteItem(item.id)">Remove</a>
      </div>
    </div>
    <div class="_price">
      <p> {{formatData(item.data.price, "price")}} </p>
    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex"
export default {
  props: ["item"],
  methods: {
    ...mapActions({
      'deleteFromCart': "global/cart/deleteFromCart"
    }),
    formatData(value, type){
      if(type == "type") {
        if(value == "rv") {
          return "Red Velvet Cake"
        }else if(value == "sc") {
          return "Sponge Cake"
        }else if(value == "cc") {
          return "Chocolate Cake"
        }else if(value == "fc") {
          return "Fruit Cake"
        }
      }

      if(type == "price") {
        let currency = '₦'
        var formatter = new Intl.NumberFormat('en-US');

        value = currency + formatter.format(value)
        return value
      }
    },
    deleteItem(id) {
      this.deleteFromCart(id)
    }
  }
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
      border-radius: 10px;
      object-fit: contain;
    }
  }

  ._details {
    padding: 1rem 0.5rem;
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h3 {
      font-size: 24px;
      font-weight: 500;
    }

    ._price {
      display: none;
    }

    .data {
      display: flex;
      justify-content: flex-start;

      span {
        font-size: 16px;
        font-weight: 500;
        text-transform: capitalize;
        padding-right: 1rem;

        b {
          font-weight: 600;
          padding-right: 0.5rem;
        }
      }
    }

    .actions {
      display: flex;
      justify-content: flex-start;

      a {
        font-size: 16px;
        font-weight: 500;
        cursor: pointer;
        text-decoration: none;
        padding-right: 1rem;
        color: $primary;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  ._price {
    padding: 1rem 0.5rem;

    p {
      font-size: 18px;
      font-weight: 600;
    }
  }

  @media screen and (max-width: $large){
    grid-template-columns: 1fr 2fr;

    ._details {
      width: 100%;
      padding: 0.5rem;

      h3 {
        font-size: 18px;
      }

      ._price {
        padding: 0;
        display: inline-block;
      }

      .data {
        span {
          font-size: 14px;
          padding-right: 0.5rem;

          b {
            padding-right: 0.2rem;
          }
        }
      }

      .actions {
        a {
          font-size: 14px;
          padding-right: 0.5rem;
        }
      }
    }

    ._price {
      display: none;
    }
  }

  @media screen and (max-width: $s-medium){
    ._details {
      padding: 0.3rem;

      h3 {
        font-size: 16px;
      }

      ._price {
        p {
          font-size: 14px;
        }
      }

      .data {
        span {
          font-size: 12px;
          padding-right: 0.3rem;
        }

        b {
          padding-right: 0.1rem;
        }
      }

      .actions {
        a {
          font-size: 14px;
        }
      }
    }
  }

  @media screen and (max-width: $small) {
    display: block;

    ._thumbnail {
      img {
        height: 100%;
      }
    }

    ._details {
      padding:0.5rem;

      h3 {
        padding: 0.5rem 0;
      }

      ._price {
        padding: 0.5rem 0;
      }

      .data {
        padding: 0.5rem 0;
      }

      .actions {
        padding: 0.5rem 0;

        a {
          font-size: 12px;
        }
      }
    }
  }
}
</style>