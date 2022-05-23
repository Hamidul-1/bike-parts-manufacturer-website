import React from 'react';
import Banner from './Banner';
import Info from './Info';
import Summary from './Summary';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Info></Info>
            <Summary></Summary>
        </div>
    );
};

export default Home;