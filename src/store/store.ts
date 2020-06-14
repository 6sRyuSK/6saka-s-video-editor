import Vue from 'vue'

export type State = {
  inputFile: File | undefined;
  inputVPath: string;
  outputVPath: string;
  encode: boolean;
  startFrame: number;
  endFrame: number;
}

export const state = Vue.observable<State>({
  inputFile: undefined,
  inputVPath: '',
  outputVPath: '',
  encode: false,
  startFrame: 0,
  endFrame: 0
})
