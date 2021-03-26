import "./App.css";
import { Router, Link } from "@reach/router";
import CrewList from "./pages/CrewList";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Component lib!
        <a
          className="App-link"
          target="_blank"
          rel="noreferrer"
          href="https://www.figma.com/file/ABd3OgGY0Vnp1DoLtSF93O/Design?node-id=494%3A1141"
        >
          Link to Figma-design
        </a>
      </header>
      <Router>
        <Home path="/" />
        <CrewList path="crew" />
      </Router>
    </div>
  );
}

export default App;
