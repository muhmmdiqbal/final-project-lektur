import React from 'react';

import Header from './Header';
import Footer from './Footer'

import {
    HashRouter
} from 'react-router-dom';
function Main() {
    return(
        <HashRouter>
            <div>
<<<<<<< HEAD
                {/* <ul>
                    <li><NavLink exact to='/'>Home</NavLink></li>
                    <li><NavLink to='/Login'>Login</NavLink></li>
                    <li><NavLink to='/SignUp'>Sign Up</NavLink></li>
                    <li><NavLink to='/Teacher'>Teacher</NavLink></li>
                </ul> */}
            </div>
            <div>
                <Route exact path='/' component={Home} />
                <Route exact path='/Login' component={Login} />
                <Route exact path='/SignUp' component={SignUp} />
                <Route exact path='/Teacher' component={Teacher} />
=======
                <Header />
                <Footer />
>>>>>>> e3dddef4a2c8ab1db0e975a713e8dfed9a04673d
            </div>
        </HashRouter>
    )
} 

export default Main;