import React from 'react';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import Section from '../components/section/Section';

const index = () => {
    return (
        <div className="relative">
            <Header />
            <Section/>
            <Footer/>
        </div>
    );
};

export default index;