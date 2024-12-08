import notFound from '../assets/images/404-not-found.svg';
import { Link } from 'react-router-dom';
import React from 'react';

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <img 
                draggable="false" 
                className="w-1/2 sm:w-1/3 h-auto mb-6" 
                src={notFound} 
                alt="Page Not Found" 
            />
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Oops! Page Not Found</h1>
            <p className="text-lg text-gray-600 mb-6">
                The page you are looking for does not exist or has been moved.
            </p>
            <Link 
                to="/" 
                className="px-6 py-3 bg-primary-blue rounded-md uppercase shadow hover:shadow-lg text-white transition duration-300 ease-in-out"
            >
                Back To Home
            </Link>
        </div>
    );
};

export default NotFound;