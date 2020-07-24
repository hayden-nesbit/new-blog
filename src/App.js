import React from 'react';
import ProjectCarousel from "./components/ProjectCarousel"
import NavBar from './components/NavBar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Blog from './components/Blog'

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/blog">
          <Blog />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
