<template>
<span>
Sum: {{ cartSum }}
</span>
</template>

<script>
// const cartSum = 0;

export default {
  data() {
    return {
      cartSum: 0,
    };
  },
};
</script>
<style scoped>
span {
margin: 1rem;
padding: 0 1rem;
border: 1px solid teal;
border-radius: 1rem;
font-weight: 700;
}
</style>
