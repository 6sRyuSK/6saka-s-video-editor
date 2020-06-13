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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
