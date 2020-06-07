<template>
  <div>
    <label>
      Price:
      <button v-on:click="$emit('changePriceOrder')">
        {{ order === 1 ? "desc" : "asc" }}
      </button>
    </label>
  </div>
</template>

<script>
export default {
  name: "PriceToggle",
  props: ["order"],
  data() {
    return {};
  },
};
</script>

<style></style>
