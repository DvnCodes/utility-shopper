<template>
  <div>
    <h2>Home</h2>
    <ProductList :products="products"></ProductList>
  </div>
</template>

<script>
import ProductList from "./ProductList.vue";

export default {
  name: "Home",
  props: ["products"],
  data() {
    return {};
  },
  components: { ProductList },
};
</script>

<style></style>
