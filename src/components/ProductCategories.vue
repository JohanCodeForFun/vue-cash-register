<template>
  <h3>div med categories nedan</h3>
  <div :key="item" v-for="item in categories">
  <p>test</p>
    <p>{{getCategories}}</p>
  </div>
  <h3>div med categories ovanför</h3>
  <!-- <h2>{{ catMensClothes.category }}</h2>
  <img v-bind:src="catMensClothes.image" :alt="catMensClothes.title" class="catThumb"> -->
  <!-- <h2>{{ categoryJewelry.category }}</h2>
  <img v-bind:src="categoryJewelry.image" :alt="categoryJewelry.title" class="catThumb">
  <h2>{{ categoryElectronics.category }}</h2>
  <img v-bind:src="categoryElectronics.image" :alt="categoryElectronics.title" class="catThumb">
  <h2>{{ catWomensClothes.category }}</h2>
  <img v-bind:src="catWomensClothes.image" :alt="catWomensClothes.title" class="catThumb"> -->

  <h3 class="all-products-Header">All products below...</h3>

  <div class="product-card" :key="item" v-for="item in products">
    <h3>{{ item.title }}</h3>
    <img v-bind:src="item.image" :alt="item.title">
    <p class="buy-paragraph">${{ item.price }} <ButtonTemplate @click="addToCart(item.id)"
       text="Buy" color="green"/></p>
  </div>
</template>

<script>
import ButtonTemplate from './ButtonTemplate.vue';

export default {
  name: 'ProductCategories',
  data() {
    return {
      products: [],
      categories: [],
      cartData: [],
      tempCart: [],
    };
  },
  methods: {
    addToCart(id) {
      const newCartItem = this.products.find((element) => element.id === id);

      // if localstorage is null, set an array to remove error
      if (localStorage.getItem('cartItems') === null) {
        localStorage.setItem('cartItems', '[]');
      }

      // use tempCart to store previous product, and add it back to localstorage to array
      this.tempCart = JSON.parse(localStorage.getItem('cartItems'));
      this.tempCart.push(newCartItem);
      localStorage.setItem('cartItems', JSON.stringify(this.tempCart));
    },
    async fetchAllProducts() {
      const res = await fetch('https://fakestoreapi.com/products');
      const data = await res.json();
      return data;
    },
    getCategories() {
      this.categories.push(this.products.find((element) => element.category === "men's clothing"));
      console.log(this.categories);
      // this.categories.push(this.products.find(
      //   (element) => element.category === "men's clothing",
      // ));
      // this.categories.push(this.products.find(
      //   (element) => element.category === "men's clothing",
      // ));
      // this.categories.push(this.products.find(
      //   (element) => element.category === "men's clothing",
      // ));
    },
  },
  async created() {
    try {
      this.products = await this.fetchAllProducts();
      console.log(this.products);
    } catch (err) {
      console.log(err);
    }
  },
  computed: {
    // create filter function
    // to display each category of first item
    catMensClothes() {
      // return this.products[1].category, << first code
      return {
        object: this.products.find((element) => element.category === "men's clothing"),
      };
    },
    // categoryJewelry() {
    //   return this.products.find((element) => element.category === 'jewelery');
    // },
    // categoryElectronics() {
    //   return this.products.find((element) => element.category === 'electronics');
    // },
    // catWomensClothes() {
    //   return this.products.find((element) => element.category === "women's clothing");
    // },
  },
  mounted() {
  },
  components: {
    ButtonTemplate,
  },
};

</script>

<style>
.product-card {
  width: 80vw;
}
.buy-paragraph {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.product-card {
  border: 1px solid red;
  padding: 1rem;
  margin-bottom: 1rem;
}
img {
  width: 100%;
}

.catThumb {
  height: 100px;
}

.all-products-Header {
  margin: 3rem 0;
}
</style>
