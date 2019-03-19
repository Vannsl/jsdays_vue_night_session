<template>
  <div>
    <GrandChild
      :has-anniversary="hasAnniversary"
      @selectSaleItem="selectSaleItem"
    />
  </div>
</template>

<script>
import GrandChild from './GrandChild.vue'

export default {
  name: 'Child2',
  components: {
    GrandChild
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
