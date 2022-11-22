<template>
  <h2>{{ catMensClothes.category }}</h2>
  <img v-bind:src="catMensClothes.image" :alt="catMensClothes.title" class="catThumb">
  <!-- <h2>{{ categoryJewelry.category }}</h2>
  <img v-bind:src="categoryJewelry.image" :alt="categoryJewelry.title" class="catThumb">
  <h2>{{ categoryElectronics.category }}</h2>
  <img v-bind:src="categoryElectronics.image" :alt="categoryElectronics.title" class="catThumb">
  <h2>{{ catWomensClothes.category }}</h2>
  <img v-bind:src="catWomensClothes.image" :alt="catWomensClothes.title" class="catThumb"> -->

  <h3 class="all-products-Header">All products below...</h3>

  <div :key="item" v-for="item in products">
    <h3>{{ item.title }}</h3>
    <img v-bind:src="item.image" :alt="item.title">
  </div>
</template>

<script>

export default {
  name: 'ProductCategories',
  data() {
    return {
      products: [],
    };
  },
  methods: {
    // try: {
    async fetchAllProducts() {
      const res = await fetch('https://fakestoreapi.com/products');
      const data = await res.json();
      return data;
    },
    //   catch(err) {
    //     console.log(err);
    //   },
    // },
  },
  async created() {
    try {
      this.products = await this.fetchAllProducts();
      console.log(this.products);
    } catch (err) {
      console.log(err);
    }
  },
  computed: {
    // create filter function
    // to display each category of first item
    catMensClothes() {
      // return this.products[1].category, << first code
      return this.products.find((element) => element.category === "men's clothing");
    },
    // categoryJewelry() {
    //   return this.products.find((element) => element.category === 'jewelery');
    // },
    // categoryElectronics() {
    //   return this.products.find((element) => element.category === 'electronics');
    // },
    // catWomensClothes() {
    //   return this.products.find((element) => element.category === "women's clothing");
    // },
  },
};

</script>

<style>
img {
  width: 100%;
}

.catThumb {
  height: 100px;
}

.all-products-Header {
  margin: 3rem 0;
}
</style>
