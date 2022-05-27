import React from 'react';
import AboutMe from './AboutMe';
import Education from './Education';
import MySkills from './MySkills';
import PortfolioBanner from './PortfolioBanner';

const MyPortfolio = () => {
    return (
        <div>
            <PortfolioBanner></PortfolioBanner>
            <AboutMe></AboutMe>
            <MySkills></MySkills>
            <Education></Education>
            
        </div>
    );
};

export default MyPortfolio;