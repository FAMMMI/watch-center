import React from 'react';

const Review = ({ review }) => {
    console.log(review.name);
    return (
        <div className='rounded-md border-slate-400 border-2 p-1 bg-slate-200'>

            <p className='font-bold text-sm'>Name:{review.name}</p>
            <p className='text-sm'>Note:{review.note}</p>
            <p>ratings:{review.ratings}/5</p>
        </div>
    );
};

export default Review;