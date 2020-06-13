<template>
  <div id="app">
    <editorTop />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import editorTop from '@/components/editorTop.vue'

@Component({
  components: {
    editorTop
  }
})
export default class App extends Vue {
  created () {
    console.log('hello')
  }
}
</script>

<style>
body {
  margin: 0;
  width: 100vw;
  height: 100vh;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 95%;
  height: 95%;
  margin: 0 auto;
  padding: 5px;
  overflow-x: hidden;
  overflow-y: hidden;
}
</style>
