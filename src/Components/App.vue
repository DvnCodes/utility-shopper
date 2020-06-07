<template>
  <div id="app">
    <!-- <router-link to="/" :products="products">Home</router-link>
    <router-link to="/departments">Departments</router-link> -->
    <Header></Header>
    <Home :products="products"></Home>
    <router-view></router-view>
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
      sortby: "name",
    };
  },
  mounted() {
    fetchProducts().then((products) => {
      this.products = products;
    });
  },
  components: {
    Header,
    Home,
  },
  methods: {},
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
