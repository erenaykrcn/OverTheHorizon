import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Main from './components/Main.js';
import Packages from './components/Packages.js';


class SeePackages extends React.Component {
    render() {
        let africaData = {name: 'Africa', };
        let asiaData = {name: 'Asia', };
        let europeData = {name: 'Europe', };
        let pacificData = {name: 'Pacific', };


        return(
            <Router>
                <Switch>
                    <Route exact path="/seepackages" component={Main} />
                    <Route path="/seepackages/africa" component = { ()=> 
                        <Packages {...africaData} />
                        } />
                    <Route path="/seepackages/asia" component = { ()=> 
                        <Packages {...asiaData} />
                        } />/>
                    <Route path="/seepackages/europe" component = { ()=> 
                        <Packages {...europeData} />
                        } />/>
                    <Route path="/seepackages/pacific" component = { ()=> 
                        <Packages {...pacificData} />
                        } />/>
                </Switch>
            </Router>
        )
    }
}

export default SeePackages