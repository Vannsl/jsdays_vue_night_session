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
import { mapGetters } from 'vuex';

export default {
  name: 'Child1',
  computed: {
    ...mapGetters(['hasAnniversary', 'hasSaleItem']),
    showAnniversary() {
      return this.hasAnniversary;
    },
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