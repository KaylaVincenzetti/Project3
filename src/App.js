import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Home from "./pages/Home";

import anxiety from "./pages/anxiety";
import depression from "./pages/depression";
import alternative from "./pages/alternative";


const App = () => (
  <Router>
   
      <Switch>
        {/* <Route exact path="/" component={Home} /> */}
        
        <Route exact path="/anxiety" component={anxiety} />
        <Route exact path="/alternative" component={alternative} />
        <Route exact path="/depression" component={depression} />
        
      </Switch>
    
  </Router>
);

export default App;
