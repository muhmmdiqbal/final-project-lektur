import React from 'react';
import '../../components/style/App.css';

import Header from '../../components/Navbar/Header';
import Footer from '../../components/Footer';
import Enroll from '../Banner/Enroll';
import Regist from '../Banner/Regist';
import Category from '../Courses/BtnCategory';
import CourseList from '../Courses/CourseList';

const Home = () => {
    return(
        <div className='App'>
        <Header />
        <Enroll />
        <Category />
        <CourseList />
        <Regist />
        <Footer />
        </div>
    )
}

export default Home;