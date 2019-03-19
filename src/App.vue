<template>
  <div id="app">
    <Child1 />
    <div class="seperator" />
    <Child2 @selectSaleItem="hasSaleItem = true" />
  </div>
</template>

<script>
import Child1 from './components/Child1.vue'
import Child2 from './components/Child2.vue'

export default {
  name: 'app',
  components: {
    Child1,
    Child2
  },
  data() {
    return {
      hasAnniversary: true,
      hasSaleItem: false
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 30px 0;
  margin: 60px auto;
  border: 1px solid black;
  max-width: 600px;
}

.seperator {
  border-bottom: 1px solid black;
  margin: 30px 0;
}
</style>
