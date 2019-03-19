<template>
  <div>
    <GrandGrandChild :is-sale-item="false" />
    <GrandGrandChild :is-sale-item="true" />
  </div>
</template>

<script>
import GrandGrandChild from './GrandGrandChild.vue'

export default {
  name: 'GrandChild',
  components: {
    GrandGrandChild
  }
}
</script>