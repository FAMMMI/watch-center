import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='sticky top-0 flex text-center px-12 py-4 bg-slate-100 justify-center md:justify-between'>
            <div className="text-2xl font-bold text-blue-600">
                <p>Watch Center</p>
            </div>
            <nav className="flex gap-4 text-lg text-center">
                <Link className='' to="/home">Home</Link>
                <Link to="/reviews">Reviews</Link>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/blogs">Blogs</Link>
            </nav>
        </div>
    );
};

export default Header;