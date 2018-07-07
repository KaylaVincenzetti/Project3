
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Home from "./pages/Home";

import anxiety from "./pages/anxiety";
import depression from "./pages/depression";
import alternative from "./pages/alternative";
import Header from './components/Header/Header';
import Navbar from './components/Nav/Navbar';
import Footer from './components/Footer/Footer';
import Content from './components/Content/Content';


const App = () => (
  <div>
  <Header />
  <Navbar />
  <Content />
  
  <Router>
   
   
      <Switch>
        {/* <Route exact path="/" component={Home} /> */}
        
        <Route exact path="/anxiety" component={anxiety} />
        <Route exact path="/alternative" component={alternative} />
        <Route exact path="/depression" component={depression} />
        
      </Switch>
      
    
  </Router>
  <Footer />
  </div>

);

export default App;

