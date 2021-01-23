Vue.createApp({
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
}).mount("#app")