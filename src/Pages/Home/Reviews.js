import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = () => {
    const [reviews, setReviews] = useState();
    useEffect(() => {
        fetch('analysis.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className='my-20'>
            <h2 className='my-12 text-2xl lg:text-4xl font-bold text-center text-primary'>Our available products</h2>
            
            {/* <div>
                {
                    reviews.map(cReview => <Review
                        key={cReview._id}
                        review={cReview}
                    ></Review>)
                }

            </div> */}
        </div>
    );
};

export default Reviews;