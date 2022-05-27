import { faArrowsDownToLine } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const AboutMe = () => {
    return (
        <div className='mt-12 px-12'>
            <h1 className='text-center font-bold mb-12 text-5xl uppercase'>About <span className='text-blue-900'>Me</span></h1>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
                <div>
                    <h2 className=' font-bold mb-3 text-3xl uppercase'>Personal Infromation</h2>
                    <h4 className=' mb-2 font-bold'>Name: Md.Hamidul Islam</h4>
                    <h4 className=' mb-2 font-bold'>Email: hamidul786cse@gmail.com</h4>
                    <p className=' mb-2 font-bold'>phone: (+88)01703047634</p>
                    <p className=' mb-2 font-bold'>Address: Dhaka,Bangladesh</p>
                    <p className=' mb-2 font-bold'>Linkdin: https://www.linkedin.com/in/md-hamidul-islam-99b38b227/</p>
                    <p className=' mb-2 font-bold'>Github: https://github.com/Hamidul-1</p>
                    <p className=' mb-2 font-bold'>Facebook: https://www.facebook.com/profile.php?id=100054727941258</p>


                    <button class="btn mt-5 mb-5 btn btn-primary">Download CV <FontAwesomeIcon className='text-white text-2xl pl-2' icon={faArrowsDownToLine}></FontAwesomeIcon></button>
                </div>
                <div className='grid lg:grid-cols-2 grid-cols-1 gap-5'>
                    <div class="card w-64 bg-black  shadow-2xl">
                        <div class="card-body">
                            <h2 class="card-title text-6xl text-white">1+</h2>
                            <p className='text-white text-xl'>Year of Experiance</p>
                        </div>
                    </div>
                    <div class="card w-64 bg-black shadow-2xl">
                        <div class="card-body">
                            <h2 class="card-title text-6xl text-white">12+</h2>
                            <p className='text-white text-xl'>Completed Project</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AboutMe;