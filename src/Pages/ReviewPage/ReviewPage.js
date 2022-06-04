import React, { useEffect, useState } from 'react';
import Review from '../Home/Review';


const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://enigmatic-island-80715.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className='my-20'>
            <h2 className='my-12 text-2xl lg:text-4xl font-bold text-center text-primary'>Our Reviews</h2>
            
            <div className='mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-12'>
                {
                    reviews.map(cReview => <Review
                        key={cReview._id}
                        cReview={cReview}
                    ></Review>)
                }

            </div>
        </div>
    );
};

export default Reviews;