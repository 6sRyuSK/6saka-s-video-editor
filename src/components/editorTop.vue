<template>
  <div id="editor-top">
    <div id="monitor" v-show="selected">
      <video id="monitor-video" controls></video>
    </div>
    <div id="controllpanel" v-show="selected">
      <span>{{ startTime }}</span>
      <button @click="setTime('start')">setStart</button>
      <button @click="setTime('end')">setEnd</button>
      <span>{{ endTime }}</span>
    </div>
    <div id="file-drop-area" v-if="!selected"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { state } from '@/store/store'

@Component
export default class EditorTop extends Vue {
  get selected () {
    return state.selected
  }

  get startTime () {
    return state.startTime
  }

  get endTime () {
    return state.endTime
  }

  setTime (option: 'start' | 'end') {
    const videoElm = document.getElementById('monitor-video') as HTMLVideoElement
    if (option === 'start') {
      state.startTime = videoElm.currentTime
    } else if (option === 'end') {
      state.endTime = videoElm.currentTime
    }
  }

  selectedFile (file: Blob): void {
    const fr = new FileReader()
    fr.readAsArrayBuffer(file)
    fr.onload = () => {
      if (!fr.result) throw new Error(fr.result || 'fr.result is null')
      state.selected = true
      const videoElm = document.getElementById('monitor-video') as HTMLVideoElement
      if (!videoElm) throw new Error('not exit monitor-video')
      videoElm.src = URL.createObjectURL(new Blob([fr.result], { type: 'video/mp4' }))
      videoElm.onload = () => {
        state.endTime = videoElm.duration
      }
    }
  }

  attachEvent (): void {
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
      fileDropAreaElm.innerText = 'now loading...'
      if (!event.dataTransfer) return
      state.inputFile = event.dataTransfer.files[0]
      this.selectedFile(event.dataTransfer.files[0])
    }, false)
  }

  mounted () {
    this.attachEvent()
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
