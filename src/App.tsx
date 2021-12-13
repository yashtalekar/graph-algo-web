import "./App.css"
//import Appbar from "./components/Appbar"
import Home from "./pages/Home"
import PathFinding from "./pages/PathFinding"
import Search from "./pages/Search"
import React from "react"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import BreadthFirstSearch from "./pages/SearchAlgorithms/BreadthFirstSearch"

const App = () => {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/search_algorithms">Search Algorithms</Link>
              <ul>
                <li>
                  <Link to="/search_algorithms/BFS">Breadth First Search</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/path_finding">PathFindingAlgorithms</Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/path_finding">
            <PathFinding />
          </Route>
          {/* <Route path="/users">
            <Users />
          </Route> */}
          <Route path="/search_algorithms/BFS">
            <BreadthFirstSearch />
          </Route>
          <Route path="/search_algorithms">
            <Search />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
