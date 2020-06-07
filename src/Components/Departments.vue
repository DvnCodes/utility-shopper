<template>
  <div>
    <h2>Departments</h2>
    <ProductList></ProductList>
  </div>
</template>

<script>
import ProductList from "./ProductList.vue";

export default {
  name: "Departments",
  data() {
    return {};
  },
  components: { ProductList },
};
</script>

<style></style>
