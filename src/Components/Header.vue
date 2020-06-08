
<template>
  <div id="Header">
    <h1>{{heading}}</h1>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      heading: "Utility Shopper"
    };
  }
};
</script>

<style>
#Header {
  background-color: rgb(167, 166, 255);
  margin: 0;
}
h1 {
  padding: 20px;
  margin: 0;
  margin-bottom: 20px;
}
</style>