<template>
<div>{{ getCategories.title }}</div>
<div :key="item" v-for="item in products">
<h3>{{ item.title }}</h3>
<p>{{ item.id }}, {{ item.category }}</p>
<img v-bind:src="item.image" :alt="item.title">
</div>
</template>

<script>
// const api = 'https://fakestoreapi.com/';
fetch('https://fakestoreapi.com/products/')
  .then((response) => response.json())
  .then((result) => {
    console.log(result);
    console.log(result[0]);
    for (let i = 1; i < result.length; i += 1) {
      if (result[i - 1].category === result[i].category) {
        console.log('samma');
      } else {
        console.log('inte samma');
      }
    }
  });

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
    getCategories() {
      return `${this.products[0]} ${this.products[5]}`;
    },
  },
};

</script>

<style>
img {
width: 100%;
}
</style>
