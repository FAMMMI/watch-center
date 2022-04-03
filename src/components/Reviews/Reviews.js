import React from 'react';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 mx-4'>
            {
                reviews.map(review => <Review
                    review={review}
                    key={review.id}
                >
                </Review>)
            }
        </div>
    );
};

export default Reviews;