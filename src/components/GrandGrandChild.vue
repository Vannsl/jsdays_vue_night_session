<template>
  <div>
    I am GrandGrandChild
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