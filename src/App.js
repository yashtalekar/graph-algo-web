import logo from "./logo.svg";
import "./App.css";
import Navigation from "./components/Navigation";

const drawerWidth = 240;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
      <Navigation />
    </div>
  );
}

export default App;
