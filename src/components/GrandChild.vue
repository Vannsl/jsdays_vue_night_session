<template>
  <div>
    <GrandGrandChild />
    <GrandGrandChild />
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