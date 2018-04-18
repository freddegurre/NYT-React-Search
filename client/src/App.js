import React from "react";
import Articles from "./pages/Articles";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";


const App = () => (
  <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Articles}/>
        </Switch>
      </div>
  </Router>
);

export default App;
