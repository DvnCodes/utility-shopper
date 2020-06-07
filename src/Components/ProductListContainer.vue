<template>
  <div>
    <GroupSelect
      v-on:groupSelected="groupProp = $event.target.value"
    ></GroupSelect>
    <ul v-if="groupProp !== 'name'">
      <li
        v-for="groupedProductArr in groupedThings"
        :key="groupedProductArr.$index"
      >
        <h3>{{ groupedProductArr[0][groupProp] }}</h3>
        <ProductList :products="groupedProductArr"></ProductList>
      </li>
    </ul>
    <Product-List
      v-if="groupProp === 'name'"
      :products="products"
    ></Product-List>
  </div>
</template>

<script>
import ProductList from "./ProductList.vue";
import GroupSelect from "./GroupSelect.vue";

export default {
  name: "ProductListContainer",
  props: ["products"],

  data() {
    return { groupedProducts: [], groupProp: "name" };
  },
  components: { ProductList, GroupSelect },
  computed: {
    groupedThings() {
      let group = this.products.reduce((r, a) => {
        r[a[this.groupProp]] = [...(r[a[this.groupProp]] || []), a];
        return r;
      }, {});
      console.log("group", group);
      return group;
    },
  },
};
</script>

<style></style>
