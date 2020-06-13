<template>
  <div id="editor-top">
    <div id="monitor" v-if="inputVPath"></div>
    <div id="timeline" v-if="inputVPath"></div>
    <div id="file-drop-area" v-if="!inputVPath"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { state } from '@/store/store'

@Component
export default class EditorTop extends Vue {
  get inputVPath () {
    return !!state.inputVPath
  }

  mounted () {
    console.log('hello')
  }
}
</script>

<style lang="scss">
#editor-top {
  width: 100%;
  height: 50%;
}
#file-drop-area {
  width: 100%;
  height: 100%;
  border: dotted 2px grey;
}
</style>
