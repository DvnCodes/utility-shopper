<template>
  <div>
    <PriceToggle
      v-if="sortedProducts.length > 1"
      v-on:changePriceOrder="order *= -1"
      :order="order"
    ></PriceToggle>
    <ul>
      <li v-for="product in sortedProducts" :key="product._id">
        <ProductCard :product="product"></ProductCard>
      </li>
    </ul>
  </div>
</template>

<script>
import PriceToggle from "./PriceToggle";

import ProductCard from "./ProductCard";
export default {
  name: "ProductList",
  props: ["products"],
  data() {
    return {
      order: 1,
    };
  },
  computed: {
    sortedProducts() {
      return this.products
        .slice(0)
        .sort((a, b) =>
          a.price.value < b.price.value ? this.order : -this.order
        );
    },
  },
  components: {
    ProductCard,
    PriceToggle,
  },
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
