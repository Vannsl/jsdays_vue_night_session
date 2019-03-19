<template>
  <div>
    <GrandGrandChild :is-sale-item="false" />
    <GrandGrandChild
      @selectSaleItem="selectSaleItem"
      :has-anniversary="hasAnniversary"
      :is-sale-item="true"
    />
  </div>
</template>

<script>
import GrandGrandChild from './GrandGrandChild.vue'

export default {
  name: 'GrandChild',
  components: {
    GrandGrandChild
  },
  props: {
    hasAnniversary: {
      type: Boolean,
      default: false,
    }
  },
  methods: {
    selectSaleItem() {
      this.$emit("selectSaleItem");
    }
  }
}
</script>