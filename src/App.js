import React from 'react';
import './App.css';

// react router imports
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

//component imports
import Home from './components/home';
import PostDetails from './components/post/postDetails';

function App() {
  return (
    <div className="App">
      
      <Router>

        <Switch>

          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/post/detail/id/:ids">
            <PostDetails />
          </Route>

        </Switch>

      </Router>

    </div>
  );
}

export default App;
