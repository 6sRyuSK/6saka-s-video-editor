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
