import React from 'react';

import Header from '../components/header';
import Footer from '../components/footer'

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