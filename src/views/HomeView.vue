<template>
  <div class="home">
    <h2>What are you looking for?</h2>
    <!-- <ProductCategories :categories="categories"/> -->
  </div>
  <ProductCategories />
</template>

<script>
// fetch categories
import ProductCategories from '../components/ProductCategories.vue';

export default {
  name: 'HomeView',
  components: {
    ProductCategories,
  },
};
</script>

<style>

</style>
