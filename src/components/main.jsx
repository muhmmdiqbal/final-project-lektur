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
                <Header />
                <Footer />
            </div>
        </HashRouter>
    )
} 

export default Main;