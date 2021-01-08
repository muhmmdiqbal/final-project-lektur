import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer'

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