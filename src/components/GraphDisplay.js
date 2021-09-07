import React, { useRef, useEffect } from "react"
import { UndirectedGraph } from "graphology"
import erdosRenyi from "graphology-generators/random/erdos-renyi"
import randomLayout from "graphology-layout/random"
import { useStoreActions, useStoreState } from "easy-peasy"

import Sigma from "sigma"

const GraphDisplay = () => {
  const GraphDisplayStyle = {
    height: "500px",
    width: "500px",
  }

  const graphRef = useRef(null)

  // const graph = erdosRenyi(UndirectedGraph, { order: 10, probability: 0.3 })
  // randomLayout.assign(graph)

  // graph.nodes().forEach((node) => {
  //   graph.mergeNodeAttributes(node, {
  //     label: "test",
  //     size: Math.max(4, Math.random() * 10),
  //   })
  // })

  // const addGraphData = useStoreActions((actions) => actions.addGraphData)
  // addGraphData(graph)

  const graph = useStoreState((state) => state.graphData)
  console.log("graph State: ")
  console.log(graph)

  useEffect(() => {
    // For now to make sure store is working correctly, store the graph
    // generated here in the store.
    // Later, we can move graph generation to its own file.

    let sigmaGraph = null
    if (graph !== null) {
      sigmaGraph = new Sigma(graph, graphRef.current)
    }
    return () => {
      if (sigmaGraph) {
        sigmaGraph.container = null
      }
    }
  }, [graph])

  //const sigmaGraph = new Sigma(graph, graphRef.current)

  return <div ref={graphRef} id="container" style={GraphDisplayStyle}></div>
}

export default GraphDisplay
