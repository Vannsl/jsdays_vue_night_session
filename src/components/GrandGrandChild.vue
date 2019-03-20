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
    isSaleItem: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    showSale() {
      return this.$root.$data.hasAnniversary && this.isSaleItem;
    }
  },
  methods: {
    selectItem() {
      if (this.isSaleItem) {
        this.$root.$data.hasSaleItem = true;
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