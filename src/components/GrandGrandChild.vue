<template>
  <div>
    <button @click="selectItem">I am GrandGrandChild</button>

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
    selectItem() {
      console.log(`selectItem: ${this.isSaleItem}`);
    }
  }
}
</script>
