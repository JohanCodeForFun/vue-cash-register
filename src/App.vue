<template>
  <nav>
    <img src="./img/logo-svgrepo-com.svg" alt="logo" class="logo">
    <span>Stephanies: </span>
    <router-link to="/">Home</router-link> |
    <router-link to="/cart"><ButtonTemplate text="Cart" color="green" /> </router-link>
    <router-link to="/register"><ButtonTemplate text="Register" color="orange" /> </router-link>
  </nav>
  <router-view/>
</template>

<script>
import ButtonTemplate from './components/ButtonTemplate.vue';

export default {
  name: 'App',
  components: {
    ButtonTemplate,
  },
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.logo {
  height: 2rem;
  width: 2rem;
}
</style>
