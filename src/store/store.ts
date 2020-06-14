import Vue from 'vue'

export type State = {
  inputFile: File | undefined;
  selected: boolean;
  outputVPath: string;
  encode: boolean;
  startTime: number;
  endTime: number;
}

export const state = Vue.observable<State>({
  inputFile: undefined,
  selected: false,
  outputVPath: '',
  encode: false,
  startTime: 0,
  endTime: 0
})
