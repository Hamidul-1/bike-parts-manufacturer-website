import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import profile from '../../assets/images/Hamidul.jpg'
import React from 'react';

const PortfolioBanner = () => {
    return (
        <div class="hero min-h-screen mt-12">
            <div class="hero-content flex-col lg:flex-row">
                <div>
                    <img src={profile} class="max-w-sm rounded-lg shadow-2xl" />
                </div>
                <div>
                    <h1 class="text-5xl font-bold text-primary">I'm Md.Hamidul Islam</h1>
                    <h1 class="text-5xl font-bold">Web Developer</h1>
                    <p class="py-6">I'm a full stack developer focused on crafting clean & user‑friendly experiences, I am passionate about building excellent software that improves the lives of those around me.</p>
                    <button class="btn btn-primary">More About Me <FontAwesomeIcon className='text-white text-2xl pl-2' icon={faArrowRight}></FontAwesomeIcon></button>
                </div>
            </div>
        </div>
    );
};

export default PortfolioBanner;