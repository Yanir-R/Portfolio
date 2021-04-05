import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { About } from './components/about/about';
import { Contact } from './components/contact/contact';
import { Home } from './components/home/home';
import { Navbar } from './components/navbar/navbar';
import { Projects } from './components/projects/projects';
import { ParticlesComponenet } from './ParticlesComponenet';

interface AppProps { }

export const App: React.FC<AppProps> = () => {
  return (


    <Router>
      <div className="App" style={{ position: 'relative' }}>
        <ParticlesComponenet />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%"
          }}
        >
          <Navbar />
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>




  );
}
