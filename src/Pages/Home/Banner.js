import React from 'react';
import bike from '../../assets/images/images-1.jpg'



const Banner = () => {
    return (
        <div class="hero min-h-screen">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={bike} class="max-w-sm rounded-lg shadow-2xl w-full" />
                <div>
                    <h1 class="text-5xl font-bold">Your New Style here!!!</h1>
                    <p class="py-6">Some people see just a  motorbike.You see possession, joy, and lifestyle.</p>
                    <button class="btn btn-primary uppercase text-white font-bolt">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;