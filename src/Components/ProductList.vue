<template>
  <div>
    <ul>
      <li v-for="product in products" :key="product._id">
        <ProductCard :product="product"></ProductCard>
      </li>
    </ul>
  </div>
</template>

<script>
import { fetchProducts } from "../api";
import ProductCard from "./ProductCard";
export default {
  name: "ProductList",
  data() {
    return {
      products: []
    };
  },
  components: {
    ProductCard
  },
  created() {
    this.setProducts();
  },
  methods: {
    setProducts() {
      fetchProducts().then(products => {
        this.products = products;
      });
    }
  }
};
</script>

<style lang="scss">
ul {
  display: flex;
  flex-direction: column;
}
li {
  padding: 5px;
}
</style>
