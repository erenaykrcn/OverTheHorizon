import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Homepage from './Homepage/Homepage.js';
import SeeDest from './SeeDestinations/SeeDestinations.js';
import PlanJourney from './PlanJourney/PlanJourney.js';
import SeePackages from './SeePackages/SeePackages.js';
import JoinUs from './JoinUs/JoinUs.js';
import Contact from './Contact/Contact.js';


function App() {
  return (
    <Router>
      <Switch>
        <div>  
          <Route exact component={Homepage} path="/" />
          <Route  component={SeeDest} path="/seedestinations"/>
          <Route path="/planjourney" component={PlanJourney}/>
          <Route path="/seepackages" component={SeePackages} />
          <Route path="/accounts" component={JoinUs}  />
          <Route path="/contact" component={Contact}  />
        </div>
      </Switch> 
    </Router>
  );
}

export default App;
