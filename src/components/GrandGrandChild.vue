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
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'GrandGrandChild',
  props: {
    isSaleItem: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapGetters(['hasAnniversary']),
    showSale() {
      return this.hasAnniversary && this.isSaleItem;
    }
  },
  methods: {
    ...mapActions(['selectSaleItem']),
    selectItem() {
      if (this.isSaleItem) {
        this.selectSaleItem();
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