<template>
  <div id="card">
    <h3>{{ product.name }}</h3>
    <p>{{(product.price.currency === 'GBP' ? '£' : '???') + product.price.value.toFixed(2).toString()}}</p>
    <p>{{product.department}}</p>
    <!-- <p>{{product.type}}</p> -->
  </div>
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
#card {
  border: solid #2c3e50;
  background-color: #42b983;
}
</style>
