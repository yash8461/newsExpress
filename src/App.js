import './App.css';

import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = ()=> {
 
  const [progress, setProgress] = useState(0)
  

    return (
      
      <div>
        <Router>
        <NavBar/> 
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress} 
      />
        <Switch>
          <Route exact path="/"><News setProgress={setProgress}  key="general"  country="in" category="general"/></Route> 
          <Route exact path="/business"><News setProgress={setProgress}  key="business"  country="in" category="business"/></Route> 
          <Route exact path="/entertainment"><News setProgress={setProgress}  key="entertainment"  country="in" category="entertainment"/></Route> 
          <Route exact path="/general"><News setProgress={setProgress}  key="general"  country="in" category="general"/></Route> 
          <Route exact path="/health"><News setProgress={setProgress}  key="health"  country="in" category="health"/></Route> 
          <Route exact path="/science"><News setProgress={setProgress}  key="science"  country="in" category="science"/></Route> 
          <Route exact path="/sports"><News setProgress={setProgress}  key="sports"  country="in" category="sports"/></Route> 
         
         </Switch>
        
        
        </Router>
      </div>
    )
 
}

export default App;