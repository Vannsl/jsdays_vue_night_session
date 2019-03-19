<template>
  <div>
    <GrandGrandChild :is-sale-item="false" />
    <GrandGrandChild  @selectSaleItem="selectSaleItem" :is-sale-item="true" />
  </div>
</template>

<script>
import GrandGrandChild from './GrandGrandChild.vue'

export default {
  name: 'GrandChild',
  components: {
    GrandGrandChild
  },
  methods: {
    selectSaleItem() {
      this.$emit("selectSaleItem");
    }
  }
}
</script>