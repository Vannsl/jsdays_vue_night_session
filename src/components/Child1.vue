<template>
  <div>
    <span>I am Child1</span>
    <span
      v-if="hasAnniversary"
      class="anniversary"
    >
       Anniversary
    </span>
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
  name: 'Child1',
  props: {
    hasAnniversary: {
      type: Boolean,
      default: false,
    },
    hasSaleItem: {
      type: Boolean,
      default: false,
    }
  },
  computed: {
    showSale() {
      return this.hasAnniversary && this.hasSaleItem;
    }
  }
}
</script>

<style scoped>
.anniversary {
  color: blue;
}

.sale {
  color: red;
}
</style>