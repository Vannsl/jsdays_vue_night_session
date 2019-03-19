<template>
  <div>
    <span>I am Child1</span>
    <span
      v-if="showAnniversary"
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
  computed: {
    showAnniversary() {
      return this.$root.$data.hasAnniversary;
    },
    showSale() {
      return this.showAnniversary && this.$root.$data.hasSaleItem;
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