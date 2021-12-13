import React from "react"
import GraphDisplay from "../components/GraphDisplay"
import GraphController from "../components/GraphController"
import GraphScreen from "../sections/GraphScreen"

const Home = () => {
  const homeStyle = {
    display: "flex",
    flexDirection: "column",
  }

  return (
    <div style={homeStyle}>
      <div>Welcome to Home</div>
      <div>
        This is a website where I use React and Typscript to make visualizations for some common graph algorithms. This
        is mainly done as a learning exercise for me, but I hope you find this resource useful!
      </div>
      <GraphScreen />
    </div>
  )
}

export default Home
