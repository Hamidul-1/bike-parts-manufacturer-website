import React from 'react';
import Banner from './Banner';
import Info from './Info';
import Parts from './Parts';
import Summary from './Summary';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Info></Info>
            <Parts></Parts>
            <Summary></Summary>
        </div>
    );
};

export default Home;