import React, {Fragment} from "react";
import './App.css';

import SearchAppartment from "./components/js/SearchAppartment";
import InputAppartment from "./components/js/InputAppartment";
import DetailAppartment from "./components/js/DetailAppartment";
import Navbar from "./components/js/Navbar";
import Home from "./components/js/Home";
import About from "./components/js/About";

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";


function App() {
  return (
      <Router>
          <div className="grid-container">

              <Navbar />
              <main>
          <Switch>
            <Route path="/add" exact component={() => <InputAppartment />} />
            <Route path="/detail/:id" exact component={() => <DetailAppartment />} />
            <Route path="/about" exact component={() => <About />} />
            <Route path="/" exact component={() => <Home />} />


          </Switch>
              </main>

          </div>
      </Router>

  )
}

export default App;
