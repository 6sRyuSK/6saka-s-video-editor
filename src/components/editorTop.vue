<template>
  <div id="editor-top">
    <div id="monitor" v-show="inputVPath">
      <video id="monitor-video" controls></video>
    </div>
    <div id="timeline" v-show="inputVPath"></div>
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

  selectedFile (file: Blob): void {
    const fr = new FileReader()
    fr.readAsDataURL(file)
    fr.onload = () => {
      if (typeof (fr.result) !== 'string') throw new Error(typeof (fr.result))
      state.inputVPath = fr.result
      const videoElm = document.getElementById('monitor-video')
      if (!videoElm) throw new Error('not exit monitor-video')
      videoElm.setAttribute('src', fr.result)
    }
  }

  mounted () {
    const fileDropAreaElm = document.getElementById('file-drop-area')
    if (!fileDropAreaElm) throw new Error('not exist file-drop-area')
    fileDropAreaElm.addEventListener('dragover', event => {
      if (!event.dataTransfer) return
      event.stopPropagation()
      event.preventDefault()
      event.dataTransfer.dropEffect = 'copy'
    }, false)
    fileDropAreaElm.addEventListener('drop', event => {
      event.stopPropagation()
      event.preventDefault()
      if (!event.dataTransfer) return
      this.selectedFile(event.dataTransfer.files[0])
    }, false)
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
#monitor {
  height: 80%;
}
#monitor-video {
  height: 100%;
}
</style>
