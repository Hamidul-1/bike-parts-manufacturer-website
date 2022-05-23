import React from 'react';

const Review = ({ cReview }) => {
    const { _id, name, img, review, ratings } = cReview;
    return (
        <div class="card w-96 bg-neutral text-neutral-content">
            <div class="avatar">
                <div class="w-24 mask mask-hexagon">
                    <img src={img} />
                </div>
            </div>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{name}</h2>
                <p><small>{review}</small></p>
                <div class="rating rating-sm">{ratings}
                    <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" checked />
                    <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
                </div>
            </div>
        </div>

    );
};

export default Review;