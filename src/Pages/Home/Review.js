import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Review = ({ cReview }) => {
    const { name, img, review, ratings } = cReview;
    let n = ratings;
    return (
        <div class="card w-96 bg-neutral text-neutral-content">
            <div class="avatar mx-auto pt-5">
                <div class="w-24 mask mask-hexagon">
                    <img src={img} />
                </div>
            </div>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{name}</h2>
                <p><small>{review}</small></p>
                <div class="rating rating-sm ">{ratings}
                    {[...Array(n)].map((elementInArray, index) => (
                        <div className="" key={index}>  <FontAwesomeIcon className='text-warning' icon={faStar}></FontAwesomeIcon></div>
                    )
                    )}
                </div>
            </div>
        </div>

    );
};

export default Review;