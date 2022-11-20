<template>
  <div class="home">
    <h1>What are you looking for?</h1>
    <ProductCategories :ProductCategories="ProductCategories"/>
  </div>
</template>

<script>
// fetch categories
import ProductCategories from '../components/ProductCategories.vue';

export default {
  name: 'HomeView',
  components: {
    ProductCategories,
  },
  methods: {
    async getCategories() {
      const res = await fetch('https://fakestoreapi.com/products/categories');
      const { results } = await res.json();
      console.log(results);
    },
  },
  data() {
    return {
      categories: [],
    };
  },
  created() {
    this.categories = [
      { id: '1', text: 'electronics' },
      { id: '2', text: 'jewelery' },
      { id: '3', text: "men's clothing" },
      { id: '3', text: "women's clothing" },
    ];
  },
};
</script>

<style>
</style>
