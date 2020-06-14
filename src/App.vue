<template>
  <div id="app">
    <editorTop />
    <button @click="trim">トリミング</button>
    <video controls id="output-video" width="620"></video>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import editorTop from '@/components/editorTop.vue'
import { state } from '@/store/store'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { createFFmpeg } = require('@ffmpeg/ffmpeg')

@Component({
  components: {
    editorTop
  }
})
export default class App extends Vue {
  private ffmpeg = createFFmpeg({ log: true })

  get inputFileData () {
    return state.inputFile
  }

  public async trim () {
    const fileData = this.inputFileData
    if (!fileData) return
    await this.ffmpeg.load()
    await this.ffmpeg.write(fileData.name, fileData)
    await this.ffmpeg.run(`-ss 0 -i ${fileData.name} -t 10 -vcodec copy -acodec copy output.mp4`)
    const data = this.ffmpeg.read('output.mp4')

    const video = document.getElementById('output-video')
    if (!video) return
    video.setAttribute('src', URL.createObjectURL(new Blob([data.buffer], { type: 'video/mp4' })))
  }

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
