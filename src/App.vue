<template>
  <div id="app">
    
    <layoutmain msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import layoutmain from './miancompoent/layoutmain.vue'

export default {
  name: 'app',
  components: {
    layoutmain
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
  margin-top: 20px;
}
</style>
