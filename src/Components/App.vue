<template>
  <div id="app">
    <Header></Header>
    <Home :products="products"></Home>
    <h2 v-if="products.length === 0">Loading...</h2>
  </div>
</template>

<script>
import Header from "./Header.vue";
import Home from "./Home.vue";
import { fetchProducts } from "../api";

export default {
  name: "app",
  data() {
    return {
      products: [],
      price: "asc",
      sortby: "name"
    };
  },
  mounted() {
    fetchProducts().then(products => {
      this.products = products;
    });
  },
  components: {
    Header,
    Home
  },
  methods: {}
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
  width: 60%;
  margin: auto;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

button {
  margin: 15px;
}
</style>
