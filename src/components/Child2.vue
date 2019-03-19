<template>
  <div>
    <GrandChild @selectSaleItem="selectSaleItem" />
  </div>
</template>

<script>
import GrandChild from './GrandChild.vue'

export default {
  name: 'Child2',
  components: {
    GrandChild
  },
  methods: {
    selectSaleItem() {
      this.$emit("selectSaleItem");
    }
  }
}
</script>
