import Vue from 'vue'

export type State = {
  inputFile: File | undefined;
  selected: boolean;
  outputVPath: string;
  encode: boolean;
  startFrame: number;
  endFrame: number;
}

export const state = Vue.observable<State>({
  inputFile: undefined,
  selected: false,
  outputVPath: '',
  encode: false,
  startFrame: 0,
  endFrame: 0
})
