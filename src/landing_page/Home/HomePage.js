import React from 'react';
import Awards from './Award';
import Pricing from './Pricing';
import Education from './Education';
import Stats from './Stats';
import Hero from './Hero';
import OpenAccount from '../OpenAccount';
import Footer from '../Footer';
import Navbar from '../Navbar';

function    HomePage() {
    return ( 
        <>
        <Hero />
        <Awards />
        <Stats />
        <Pricing />
        <Education />
        <OpenAccount />
        <Footer />
        <Navbar />
        </>
     );
}

export default HomePage;