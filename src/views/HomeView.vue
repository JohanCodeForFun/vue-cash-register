<template>
  <div class="home">
    <h1>What are you looking for?</h1>
  </div>
  <button @click="getCategories">Get categories</button>
  <h3>Fetch categores form fakestore</h3>
  <p>+ one image for each category</p>
  <ul>
    <li v-for="category in categories" :key="category.id">
      {{ category.text }}
    </li>
  </ul>
</template>

<script>
// fetch categories
fetch('https://fakestoreapi.com/products/categories')
  .then((res) => res.json())
  .then((json) => console.log(json));

async function getCategories() {
  const res = await fetch('https://fakestoreapi.com/products/categories');
  const results = await res.json();
  console.log(results);
}
getCategories();

fetch('https://fakestoreapi.com/products/category/jewelery')
  .then((res) => res.json())
  .then((json) => console.log(json));

export default {
  name: 'HomeView',
  components: {
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
