<template>
  <div>
    <button @click="addToCart">I am GrandGrandChild</button>
    <span
      v-if="isSaleItem"
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
  methods: {
    addToCart() {
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