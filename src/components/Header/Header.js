import React from 'react';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div className='grid grid-rows-2 md:flex text-center px-12 py-6 bg-slate-100 md:justify-between'>
            <div className="order-1  md:pt-0">
                <p className='text-4xl font-bold text-blue-600 item-center'>Watch Center</p>
            </div>
            <nav className="order-2 md:flex gap-4 text-2xl font-semibold text-center grid grid-rows-4">
                <CustomLink to="/home">Home</CustomLink>
                <CustomLink to="/reviews">Reviews</CustomLink>
                <CustomLink to="/dashboard">Dashboard</CustomLink>
                <CustomLink to="/blogs">Blogs</CustomLink>
            </nav>
        </div>
    );
};

export default Header;