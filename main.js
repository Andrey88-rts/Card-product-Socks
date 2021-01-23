Vue.createApp({
  data() {
    return {
      product: "Socks",
      image: "./assets/vmSocks-blue-onWhite.jpg",
      altText: "A pair of socks",
      inStock: false,
      inventory: 100,
      onSale: true
    }
  }
}).mount("#app")