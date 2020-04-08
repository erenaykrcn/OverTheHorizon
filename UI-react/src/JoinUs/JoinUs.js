import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from './components/Login.js';
import Cart from './components/Cart.js';
import SignUp from './components/SignUp.js';


class JoinUs extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path='/accounts/signup'  component={SignUp}/>
                    <Route path='/accounts/login'  component={Login}/>
                    <Route path='/accounts/yourcart' component={Cart} />
                </Switch>
            </Router>
        )
    }
}


export default JoinUs