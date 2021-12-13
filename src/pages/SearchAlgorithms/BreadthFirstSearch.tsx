import React from "react"
import Paper from "@mui/material/Paper"
import GraphDisplay from "../../components/GraphDisplay"
import { bfs } from "graphology-traversal/bfs"
import { useStoreState } from "easy-peasy"
const info = {}

const algo = () => {
  const graph = useStoreState(state => state.graphData)
}

const BreadthFirstSearch = () => {
  return (
    <Paper>
      <div>
        {/* <div>Welcome to BreadthFirstSearch</div> */}
        <h1>This is the BFS Algorithm.</h1>
        <p>
          BFS stands for Breadth First Search, in this a shortest path is found from the start node to the goal node.
        </p>
      </div>
      <div>
        <GraphDisplay></GraphDisplay>
      </div>
    </Paper>
  )
}

export default BreadthFirstSearch
