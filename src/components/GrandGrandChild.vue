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
      //
    }
  },
  methods: {
    selectItem() {
      if (this.isSaleItem) {
        //
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