<template>
<div :key="item" v-for="item in productCategories">
<h3>{{ item.title }}</h3>
<p>{{ item.id }}, {{ item.category }}</p>
<img v-bind:src="item.image" alt="">
</div>
</template>

<script>
// const api = 'https://fakestoreapi.com/';

export default {
  name: 'ProductCategories',
  data() {
    return {
      productCategories: [],
    };
  },
  methods: {
    async fetchCategories() {
      const res = await fetch('https://fakestoreapi.com/products');
      const data = await res.json();
      console.log(data);
      return data;
    },
  },
  async created() {
    this.productCategories = await this.fetchCategories();
    // this.productCategories = [
    //   { id: '1', text: 'electronics', price: 100 },
    //   { id: '2', text: 'jewelery', price: 100 },
    //   { id: '3', text: "men's clothing", price: 100 },
    //   { id: '3', text: "women's clothing", price: 100 },
    // ];
  },
};
</script>

<style>
img {
width: 100%;
}
</style>
