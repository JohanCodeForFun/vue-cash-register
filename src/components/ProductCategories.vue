<template>
<!-- <div>{{ getCategories }}</div> -->
<!-- <button @click="getCategories()">get getCategories</button> -->
<h2>{{ categoryMensClothes.title }}</h2>
<img v-bind:src="categoryMensClothes.image" :alt="categoryMensClothes.title" class="categoryThumb">
<h2>{{ categoryWomensClothes }}</h2>
<img v-bind:src="categoryWomensClothesImage" alt="" class="categoryThumb">
<h2>{{ categoryElectronics }}</h2>
<img v-bind:src="categoryElectronicsImage" alt="" class="categoryThumb">
<h2>{{ categoryJewelry }}</h2>
<img v-bind:src="categoryJewelryImage" alt="" class="categoryThumb">

<div :key="item" v-for="item in products">
<h3>{{ item.title }}</h3>
<p>{{ item.id }}, {{ item.category }}</p>
<img v-bind:src="item.image" :alt="item.title">
</div>
</template>

<script>
// const api = 'https://fakestoreapi.com/';
// fetch('https://fakestoreapi.com/products/')
//   .then((response) => response.json())
//   .then((result) => {
//     console.log(result);
//     console.log(result[0]);
//     for (let i = 1; i < result.length; i += 1) {
//       if (result[i - 1].category === result[i].category) {
//         console.log('samma');
//       } else {
//         console.log('inte samma');
//       }
//     }
//   });

export default {
  name: 'ProductCategories',
  data() {
    return {
      productCategories: [],
      products: [],
    };
  },
  methods: {
    async fetchAllProducts() {
      const res = await fetch('https://fakestoreapi.com/products');
      const data = await res.json();
      console.log(data);
      return data;
    },
  },
  async created() {
    this.products = await this.fetchAllProducts();
  },
  computed: {
    // create filter function
    // productCategories.filter
    categoryMensClothes() {
      // return this.products[1].category;
      return this.products.find((element) => element.category === "men's clothing");
    },
    categoryMensClothesImage() {
      return this.products[1].image;
    },
    categoryWomensClothes() {
      return this.products[5].category;
    },
    categoryWomensClothesImage() {
      return this.products[5].image;
    },
    categoryElectronics() {
      return this.products.find((element) => element.category === 'electronics');
    },
    categoryElectronicsImage() {
      return this.products[10].image;
    },
    categoryJewelry() {
      return this.products[15].category;
    },
    categoryJewelryImage() {
      return this.products[15].image;
    },

  },
};

</script>

<style>
img {
width: 100%;
}
.categoryThumb {
height: 100px;
}
</style>
