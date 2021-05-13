import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Work from "./Work";
import Contact from "./Contact";
import Facebookapp from "./Facebookapp";
import Weatherapp from "./Weatherapp";
import Whatsapp from "./Whatsapp";
import Emoticons from "./Emoticons";

function App() {
  return (
    <div className="App">
      <div className="app">
        <Router>
          <div className="links">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/about" exact>
                <About />
              </Route>
              <Route path="/work">
                <Work />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
              <Route path="/facebookapp">
                <Facebookapp />
              </Route>
              <Route path="/weatherapp">
                <Weatherapp />
              </Route>
              <Route path="/whatsapp">
                <Whatsapp />
              </Route>
              <Route path="/emoticons">
                <Emoticons />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
