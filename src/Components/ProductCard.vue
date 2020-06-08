<template>
  <div id="card">
    <h3>{{ product.name }}</h3>
    <p>
      {{
      (product.price.currency === "GBP" ? "£" : "???") +
      product.price.value.toFixed(2).toString()
      }}
    </p>
    <button v-on:click="showMore = !showMore">{{showMore ? 'Less' : "More"}}</button>
    <div v-if="showMore">
      <p>{{ product.description }}</p>
      <p>{{ product.weight }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    product: Object
  },
  data() {
    return {
      showMore: false
    };
  }
};
</script>

<style lang="scss">
#card {
  border: solid #2c3e50;
  background-color: #42b983;
}
</style>
