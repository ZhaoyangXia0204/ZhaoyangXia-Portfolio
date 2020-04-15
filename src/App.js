import React from "react";
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {
    return (
      <Router>
        <div className="App">
                <Route exact path="/" component={About} />
                <Route exact path="/Portfolio" component={Portfolio} />
                <Route exact path="/Contact" component={Contact} />

        </div>
      </Router>
    );
  }
  
  export default App;
