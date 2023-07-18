import React from "react";
import classes from "./App.module.css";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Context from "./store/context";

function App() {
  return (
    <div className={classes["main-container"]}>
      <Context>
        <NavBar />
        <div className="component">
          <Home />
        </div>
        <div className="component">
          <About />
        </div>
        <div className="component">
          <Skills />
        </div>
        <div className="component">
          <Projects />
        </div>
        <div className="component">
          <Contact />
        </div>
      </Context>
    </div>
  );
}

export default App;
