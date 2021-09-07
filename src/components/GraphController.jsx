import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { UndirectedGraph } from "graphology"
import erdosRenyi from "graphology-generators/random/erdos-renyi"
import randomLayout from "graphology-layout/random"
import Button from "@material-ui/core/Button"
import { useStoreActions, useStoreState } from "easy-peasy"

const GraphController = () => {
  const addGraphData = useStoreActions((actions) => actions.addGraphData)

  const generateRandomGraph = () => {
    // Add optional input parameters like edge probability.
    const graph = erdosRenyi(UndirectedGraph, { order: 10, probability: 0.3 })
    randomLayout.assign(graph)

    graph.nodes().forEach((node) => {
      graph.mergeNodeAttributes(node, {
        label: "test",
        size: Math.max(4, Math.random() * 10),
      })
    })

    addGraphData(graph)
  }

  return (
    <Button variant="contained" onClick={generateRandomGraph}>
      Generate Random Graph
    </Button>
  )
}

export default GraphController
