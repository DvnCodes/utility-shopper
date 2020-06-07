<template>
  <div>
    <!-- <h2>Home</h2> -->

    <ProductListContainer :products="products"></ProductListContainer>
  </div>
</template>

<script>
import ProductListContainer from "./ProductListContainer.vue";
// import ProductList from "./ProductList.vue";

export default {
  name: "Home",
  props: ["products"],
  data() {
    return {};
  },
  components: { ProductListContainer },
};
</script>

<style></style>
