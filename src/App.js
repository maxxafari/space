import './App.css';
import { Router, Link } from "@reach/router"
import CrewList from './pages/CrewList';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Big header!
      </header>
        <Router>
          <Home path="/" />
          <CrewList path="crew" />
        </Router>
    </div>
  );
}

export default App;
