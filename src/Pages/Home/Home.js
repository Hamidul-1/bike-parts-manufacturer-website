import React from 'react';

import Banner from './Banner';
import Contact from './Contact';
import Info from './Info';
import Parts from './Parts';
import Pricing from './Pricing';
import Reviews from './Reviews';

import Summary from './Summary';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Info></Info>
            <Parts></Parts>
            <Summary></Summary>
            <Reviews></Reviews>
            <Pricing></Pricing>
            <Contact></Contact>
        </div>
    );
};

export default Home;