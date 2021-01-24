const app = Vue.createApp({

});



app.component('product', {

  template: `
  <div class="nav-bar">
      <div class="cart">
        <p>Cart({{ cart }})</p>
      </div>
    </div>
    <div class="product">

      <div class="product-image">
        <img :src="imageSrc" />
      </div>

      <div class="product-info">
        <h1>{{ product }}</h1>
        <p v-if="inStock">In Stock</p>
        <p :class="{outStock: !inStock}" v-else>Out Stock</p>
        <p>Shipping: {{ shipping }}</p>
        <ul>
          <li v-for="detail in details">{{detail}}</li>
        </ul>

        <div class="wrap">
          <div class="color-box" v-for="variant in variants" :key="variant.variantId"
            :style="{backgroundColor: variant.variantColor}" @mouseover="changeImage(variant.variantImage)">

          </div>
        </div>

        <button @click="addToCart" :class="{disabledButton: !inStock}">Add to cart</button>
        <button @click="subToCart" :class="{disabledButton: !inStock || cart===0}">Sub to cart</button>


      </div>

    </div>
  `,
  data() {
    return {
      product: "Socks",
      imageSrc: "./assets/vmSocks-green-onWhite.jpg",
      altText: "A pair of socks",
      inStock: true,
      details: ['80% cotton', '20% polyester', 'Gender-neutral'],
      variants: [
        {
          variantId: 2234,
          variantColor: 'green',
          variantImage: "./assets/vmSocks-green-onWhite.jpg"
        },
        {
          variantId: 2235,
          variantColor: 'blue',
          variantImage: "./assets/vmSocks-blue-onWhite.jpg"
        }
      ],
      cart: 0
    }
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },
    subToCart() {
      this.cart -= 1;
      if (this.cart < 0) {
        this.cart = 0;
      }
    },
    changeImage(variantImage) {
      this.imageSrc = variantImage;
    }
  },
  computed: {
    shipping() {
      if (this.premium) {
        return "Free";
      } else {
        return 2.99
      }
    }
  }
}).mount('#app')
