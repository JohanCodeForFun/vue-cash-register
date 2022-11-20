<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/shop">Shop</router-link> |
    <router-link to="/register">Register</router-link> |
    <!-- <router-link to="/about">About</router-link> -->
    <CartTotal />
  </nav>
  <router-view/>
  <!-- <HeroView /> -->
</template>

<script>
// import HeroView from './components/HeroView.vue';
import CartTotal from './components/CartTotal.vue';

export default {
  name: 'App',
  components: {
    CartTotal,
    // HeroView,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  border: 1px solid red;
}

nav {
  padding: 1rem;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
