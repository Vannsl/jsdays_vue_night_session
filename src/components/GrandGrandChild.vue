<template>
  <div>
    <span>I am GrandGrandChild</span>
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
  }
}
</script>

<style scoped>
.sale {
  color: red;
}
</style>