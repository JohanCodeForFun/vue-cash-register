<template>
<span>
Sum: {{ cartSum }}
</span>
<h3>Produkter i kundkorgen:</h3>
<p>1) ...</p>
<p>2) ...</p>
<p>3) ...</p>
<p>Saknar koppling...</p>
<ButtonTemplate text="Buy Products" color="green"/>
<ButtonTemplate text="Clear Cart" color="red"/>
</template>

<script>
import ButtonTemplate from './ButtonTemplate.vue';
// const cartSum = 0;

export default {
  data() {
    return {
      cartSum: 0,
    };
  },
  components: { ButtonTemplate },
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
