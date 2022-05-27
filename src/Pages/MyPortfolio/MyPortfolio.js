import React from 'react';
import AboutMe from './AboutMe';
import MySkills from './MySkills';
import PortfolioBanner from './PortfolioBanner';

const MyPortfolio = () => {
    return (
        <div>
            <PortfolioBanner></PortfolioBanner>
            <AboutMe></AboutMe>
            <MySkills></MySkills>
            
        </div>
    );
};

export default MyPortfolio;