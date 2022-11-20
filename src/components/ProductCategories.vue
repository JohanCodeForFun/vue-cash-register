<template>
<div :key="item.id" v-for="item in productCategories">
<p>{{ item.id }}: {{ item.text }}, price: {{ item.price }}</p>
</div>
</template>

<script>
export default {
  name: 'ProductCategories',
  data() {
    return {
      productCategories: [],
    };
  },
  created() {
    this.productCategories = [
      { id: '1', text: 'electronics', price: 100 },
      { id: '2', text: 'jewelery', price: 100 },
      { id: '3', text: "men's clothing", price: 100 },
      { id: '3', text: "women's clothing", price: 100 },
    ];
  },
};
</script>
