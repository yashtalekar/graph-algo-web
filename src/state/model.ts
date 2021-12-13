import { Action, action } from "easy-peasy"
import Graph from "graphology"

export type storeModel = {
  graphData: Graph | null
  addGraphData: Action<storeModel, Graph>
}

const model: storeModel = {
  graphData: null,
  addGraphData: action((state, payload) => {
    state.graphData = payload
  }),
}

export default model
