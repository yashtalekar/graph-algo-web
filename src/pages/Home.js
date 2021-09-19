import React from "react"
import GraphDisplay from "../components/GraphDisplay"
import GraphController from "../components/GraphController"
import GraphScreen from "../sections/GraphScreen"

const Home = () => {
  const homeStyle = {
    display: "flex",
  }

  return (
    <div style={homeStyle}>
      <div>Welcome to Home</div>
      <GraphScreen />
    </div>
  )
}

export default Home
