<template>
  <div>
    <SortButtons v-on:changePriceOrder="order *= -1" :order="order"></SortButtons>
    <ul>
      <li v-for="product in sortedProducts" :key="product._id">
        <ProductCard :product="product"></ProductCard>
      </li>
    </ul>
  </div>
</template>

<script>
import { fetchProducts } from "../api";
import SortButtons from "./SortButtons.vue";

import ProductCard from "./ProductCard";
export default {
  name: "ProductList",
  props: ["price", "sortby"],
  data() {
    return {
      products: [],
      order: 1
    };
  },
  computed: {
    sortedProducts() {
      return this.products
        .slice(0)
        .sort((a, b) =>
          a.price.value < b.price.value ? this.order : -this.order
        );
    }
  },
  components: {
    ProductCard,
    SortButtons
  },
  mounted() {
    this.setProducts(this.price, this.sortby);
  },
  methods: {
    setProducts(price, sortby) {
      fetchProducts(price, sortby).then(products => {
        this.products = products;
      });
    },
    togglePriceOrder() {}
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
