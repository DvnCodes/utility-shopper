<template>
  <p>{{ product.name }}</p>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    product: Object
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
