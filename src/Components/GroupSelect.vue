<template>
  <label
    >Group By:
    <select v-on:change="$emit('groupSelected', $event)">
      <option>all</option>
      <option>type</option>
      <option>department</option>
    </select>
  </label>
</template>

<script>
export default {
  name: "GroupSelect",
};
</script>

<style></style>
