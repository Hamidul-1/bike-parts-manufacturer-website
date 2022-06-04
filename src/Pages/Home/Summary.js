import { faBuilding, faFlag, faPeopleGroup, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Summary = () => {
    return (
        <div className='px-8 my-24'>
            {/* bg-gradient-to-r from-secondary to-primary */}
            <h2 className='my-12 text-2xl lg:text-4xl font-bold text-center text-primary'>Millions Business Trust US</h2>
            <p className='text-center text-xl mb-12 uppercase'>Try to Understand Customer Expractation</p>

            <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-5 mx-auto'>
                <div class="card w-64 bg-base-100 shadow-2xl">
                    <div class="card w-64 bg-base-100 mx-auto">
                        <figure class="px-10 pt-10">
                            <FontAwesomeIcon className='text-primary text-4xl' icon={faFlag}></FontAwesomeIcon>
                        </figure>
                        <div class="card-body items-center text-center">
                            <h2 class="card-title text-5xl">17+</h2>
                            <p className='text-primary text-xl'>Countries</p>
                        </div>
                    </div>

                </div>
                <div class="card w-64 bg-base-100 shadow-xl">
                    <div class="card w-64 bg-base-100 mx-auto">
                        <figure class="px-10 pt-10">
                            <FontAwesomeIcon className='text-primary text-4xl' icon={faBuilding}></FontAwesomeIcon>
                        </figure>
                        <div class="card-body items-center text-center">
                            <h2 class="card-title text-5xl">535+</h2>
                            <p className='text-primary  text-xl'>Investor</p>
                        </div>
                    </div>
                </div>
                <div class="card w-64 bg-base-100 shadow-xl">
                    <div class="card w-64 bg-base-100 mx-auto">
                        <figure class="px-10 pt-10">
                            <FontAwesomeIcon className='text-primary text-4xl' icon={faPeopleGroup}></FontAwesomeIcon>
                        </figure>
                        <div class="card-body items-center text-center">
                            <h2 class="card-title text-5xl">273+</h2>
                            <p className='text-primary  text-xl'>Client</p>
                        </div>
                    </div>
                </div>
                <div class="card w-64 bg-base-100 shadow-xl">
                    <div class="card w-64 bg-base-100 mx-auto">
                        <figure class="px-10 pt-10">
                            <FontAwesomeIcon className='text-primary text-4xl' icon={faThumbsUp}></FontAwesomeIcon>
                        </figure>
                        <div class="card-body items-center text-center">
                            <h2 class="card-title text-5xl">432+</h2>
                            <p className='text-primary  text-xl'>Feedbacks</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Summary;