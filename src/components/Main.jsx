import React from 'react';
import Header from './header';
import Footer from './footer';

import {
    HashRouter
} from 'react-router-dom';
function Main() {
    return(
        <HashRouter>
            <div>
                <Header />
                <Footer />
            </div>
        </HashRouter>
    )
} 

export default Main;