import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';

const Home = () => {

    const [reviews, setReviews] = useReviews();
    const navigate = useNavigate();

    const handleShowAll = () => {

        let path = `/reviews`;
        navigate(path);

        // const allReviews = reviews.map(review => <)

    }

    return (
        <div className='px-4 pt-10 pb-10 mx-auto max-w-7xl md:px-2'>
            <div className='h-full grid grid-cols-1 md:grid-cols-2 justify-items-center gap-2 md:justify-items-around content-center'>
                <div className='md:order-1 order-2'>
                    <p className='text-blue-400 text-3xl font-bold '>Welcome to Watch Center</p> <br />
                    <p>Here you can find out your desired watch . One of the best watches in the world. We are excited to give you our services. Easy to purchase product and get a secured shipment at very low cost . </p>
                </div>
                <div className='md:order-2 order-1'>
                    <img className='h-60' src="https://fossil.scene7.com/is/image/FossilPartners/FS5901-alt?$sfcc_fos_medium$" alt="" />
                </div>
            </div>


            <div>

                <p className='items-center py-14 text-xl font-semibold'><hr /><br /> Customer Review </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                {
                    reviews.slice(0, 3).map(review => <Review
                        review={review}
                        key={review.id}
                    >
                    </Review>)
                }
            </div>
            <div className='mt-6  '>
                <button onClick={handleShowAll} className='rounded-md bg-slate-200 border-slate-400 border-2 text-sm p-2  text-black hover:bg-slate-500 hover:text-blue-100' >See All Reviews</button>
            </div>
        </div>
    );
};

export default Home;