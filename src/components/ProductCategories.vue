<template>
<div :key="item.id" v-for="item in productCategories">
<p>{{ item.id }}: {{ item.text }}</p>
</div>
</template>

<script>
export default {
  name: 'ProductCategories',
  // props: {
  //   // productCategories: Array,
  // },
  data() {
    return {
      productCategories: [],
    };
  },
  created() {
    this.productCategories = [
      { id: '1', text: 'electronics' },
      { id: '2', text: 'jewelery' },
      { id: '3', text: "men's clothing" },
      { id: '3', text: "women's clothing" },
    ];
  },
};
</script>
