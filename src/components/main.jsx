import React from 'react';
import Home from './Home';
import Login from './Login';
import SignUp from './SignUp';
import {
    Route,
    NavLink,
    HashRouter
} from 'react-router-dom';

function Main() {
    return(
        <HashRouter>
            <div>
                <ul>
                    <li><NavLink exact to='/'>Home</NavLink></li>
                    <li><NavLink to='/Login'>Login</NavLink></li>
                    <li><NavLink to='/SignUp'>Sign Up</NavLink></li>
            </ul>
            </div>
            <div>
                <Route exact path='/' component={Home} />
                <Route exact path='/Login' component={Login} />
                <Route exact path='/SignUp' component={SignUp} />
            </div>
        </HashRouter>
    )
} 

export default Main;