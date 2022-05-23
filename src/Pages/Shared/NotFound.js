import React from 'react';
import sleeping from '../../assets/images/notFoundPage.png';

const NotFound = () => {
    return (
        <div>
            <h2 className='text-center'>Page not Found</h2>
            <img className='w-100 mx-auto' src={sleeping} alt="" />
        </div>
    );
};

export default NotFound;