<template>
  <div>
    <button @click="selectItem">I am GrandGrandChild</button>
    <span
      v-if="showSale"
      class="sale"
    >
      Sale!
    </span>
  </div>
</template>

<script>
export default {
  name: 'GrandGrandChild',
  props: {
    hasAnniversary: {
      type: Boolean,
      default: false,
    },
    isSaleItem: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    showSale() {
      return this.hasAnniversary && this.isSaleItem;
    }
  },
  methods: {
    selectItem() {
      if (this.isSaleItem) {
        this.$emit("selectSaleItem");
      }
    }
  }
}
</script>

<style scoped>
.sale {
  color: red;
}
</style>