<template>
test test
<div :key="product.id" v-for="product in ProductCategories">
<p>{{ product.title }}</p>
</div>
</template>

<script>
export default {
  name: 'ProductCategories',
  props: {
    categories: Array,
  },
};
</script>
