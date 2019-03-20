<template>
  <div>
    <button @click="selectItem">I am GrandGrandChild</button>
  </div>
</template>

<script>
export default {
  name: 'GrandGrandChild',
  methods: {
    selectItem() {
      console.log('selectItem');
    }
  }
}
</script>
