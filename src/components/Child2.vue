<template>
  <div>
    <GrandChild />
  </div>
</template>

<script>
import GrandChild from './GrandChild.vue'

export default {
  name: 'Child2',
  components: {
    GrandChild
  }
}
</script>
