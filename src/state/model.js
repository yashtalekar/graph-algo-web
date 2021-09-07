import { action } from "easy-peasy"

const model = {
  graphData: null,
  addGraphData: action((state, payload) => {
    state.graphData = payload
  }),
}

export default model
