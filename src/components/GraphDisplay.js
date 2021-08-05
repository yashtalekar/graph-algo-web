import React, { useRef, useEffect } from "react"
import { UndirectedGraph } from "graphology"
import erdosRenyi from "graphology-generators/random/erdos-renyi"
import randomLayout from "graphology-layout/random"

import Sigma from "sigma"

const GraphDisplay = () => {
  const GraphDisplayStyle = {
    height: "1000px",
  }

  const graphRef = useRef(null)

  useEffect(() => {
    const graph = erdosRenyi(UndirectedGraph, { order: 100, probability: 0.2 })
    randomLayout.assign(graph)

    graph.nodes().forEach(node => {
      graph.mergeNodeAttributes(node, {
        label: "test",
        size: Math.max(4, Math.random() * 10),
      })
    })

    const sigmaGraph = new Sigma(graph, graphRef.current)
    return () => {
      sigmaGraph.container = null
    }
  }, [])

  //const sigmaGraph = new Sigma(graph, graphRef.current)

  return <div ref={graphRef} id="container" style={GraphDisplayStyle}></div>
}

export default GraphDisplay
