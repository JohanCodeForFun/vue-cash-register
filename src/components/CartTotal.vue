<template>
  <h3>Products in cart:</h3>
  <div :key="item" v-for="item in cartStorage">
    <h3>{{ item.title }}</h3>
    <img v-bind:src="item.image" :alt="item.title">
    <p class="buy-paragraph">${{ item.price }}
      <ButtonTemplate @click="removeFromCart(item.id)" text="Remove product" color="red" />
    </p>
  </div>
  <ButtonTemplate @click="sendOrder()" text="Send Order" color="green" />
  <ButtonTemplate @click="clearCart()" text="Clear Cart" color="red" />
</template>

<script>
import ButtonTemplate from './ButtonTemplate.vue';

export default {
  data() {
    return {
      cartSum: 0,
      cartStorage: [],
      cartTemp: [],
    };
  },
  methods: {
    removeFromCart(id) {
      // save cart to temp array
      this.cartTemp = JSON.parse(localStorage.getItem('cartItems'));

      // find specific product in temp array

      const index = this.cart.findIndex((product) => product.id === id);
      if (index > -1) {
        this.cart.splice(index, id);
      }
      console.log(this.cart);
      console.log('remove from cart clicked', id);
    },
    clearCart() {
      localStorage.clear();
    },
    sendOrder() {

    },
  },
  components: { ButtonTemplate },
  mounted() {
    // collect products in localStorage to cartStorage and display on page
    this.cartStorage = JSON.parse(localStorage.getItem('cartItems'));
  },
  watch: {
    cartStorage: {
      deep: true,
      handler() {
        this.cartStorage = JSON.parse(localStorage.getItem('cartItems'));
        console.log('temp kundkorg ändrar');
      },
    },
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
