<template>
  <div>
    <label>
      Price:
      <button v-on:click="$emit('changePriceOrder')">
        {{ order === 1 ? "desc" : "asc" }}
      </button>
    </label>
    <label>
      Sort By:
      <select>
        <option>all</option>
        <option>department</option>
        <option>type</option>
      </select>
    </label>
  </div>
</template>

<script>
export default {
  name: "SortButtons",
  props: ["order"],
  data() {
    return {};
  },
};
</script>

<style></style>
