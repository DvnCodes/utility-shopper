<template>
  <div>
    <ProductListContainer :products="products"></ProductListContainer>
  </div>
</template>

<script>
import ProductListContainer from "./ProductListContainer.vue";

export default {
  name: "Home",
  props: ["products"],
  data() {
    return {};
  },
  components: { ProductListContainer }
};
</script>

<style>
</style>
