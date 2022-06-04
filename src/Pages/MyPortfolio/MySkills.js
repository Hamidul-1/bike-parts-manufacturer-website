import React from 'react';

const MySkills = () => {
    return (
        <div className='my-24'>
            <h1 className='text-center font-bold mb-12 text-5xl uppercase'>My <span className='text-primary'>Skills</span></h1>
            <div className='mx-auto w-1/2'>
                <div class="w-full bg-gray-200 mb-3 h-1">
                    <div class="bg-blue-900 h-1 text-xl " style={{ width: '80%' }} >HTML</div>
                </div>
                <br />
                <div class="w-full bg-gray-200 mb-3 h-1">
                    <div class="bg-blue-900 h-1 text-xl " style={{ width: '80%' }} >CSS</div>
                </div>
                <br />
                <div class="w-full bg-gray-200 mb-3 h-1">
                    <div class="bg-blue-900 h-1 text-xl" style={{ width: '65%' }} >Bootstrap</div>
                </div>
                <br />
                <div class="w-full bg-gray-200 mb-3 h-1">
                    <div class="bg-blue-900 h-1 text-xl" style={{ width: '60%' }} >JavaScript</div>
                </div>
                <br />
                <div class="w-full bg-gray-200 mb-3 h-1">
                    <div class="bg-blue-900 h-1 text-xl" style={{ width: '50%' }}>Node js</div>
                </div>
                <br />
                <div class="w-full bg-gray-200 mb-3 h-1">
                    <div class="bg-blue-900 h-1 text-xl" style={{ width: '75%' }}>React JS</div>
                </div>
                <br />
                <div class="w-full bg-gray-200 mb-3 h-1">
                    <div class="bg-blue-900 h-1 text-xl" style={{ width: '55%' }}>Firebase</div>
                </div>
                <br />
                <div class="w-full bg-gray-200 mb-3 h-1">
                    <div class="bg-blue-900 h-1 text-xl" style={{ width: '60%' }}>Mongo DB</div>
                </div>
                <br />

            </div>
        </div>
    );
};

export default MySkills;