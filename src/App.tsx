import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { About } from './components/about/about';
import { Navbar } from './components/navbar/navbar';

interface AppProps { }

export const App: React.FC<AppProps> = () => {
  return (
    <Router>
      <Navbar />
        <Switch>   
        <Route path="/about">
            <About />
          </Route>
        </Switch>
      </Router>
  );
}
