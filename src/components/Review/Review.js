import React from 'react';

const Review = ({ review }) => {
    return (
        <div className='rounded-md border-slate-400 border-2 p-1 bg-slate-200'>

            <div className='mb-2'>
                <img className='mx-auto w-60 h-40' src={review.img} alt="" />
            </div>
            <div>
                <p className='font-bold text-sm'>Name:{review.name}</p>
                <p className='text-sm'>Note:{review.note}</p>
                <p>ratings:{review.ratings}/5</p>
            </div>
        </div>
    );
};

export default Review;