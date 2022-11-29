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
      this.cart = JSON.parse(localStorage.getItem('cartItems'));
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
    this.cartStorage = JSON.parse(localStorage.getItem('cartItems'));
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
