import React, { useEffect, useState } from 'react';
import Part from '../Home/Part';

const Parts = () => {
    const [parts, setParts] = useState([]);
    useEffect(() => {
        fetch('https://enigmatic-island-80715.herokuapp.com/part')
            .then(res => res.json())
            .then(data => setParts(data))
    }, [])
    return (
        <div className='my-20'>
            <h2 className='my-12 text-2xl lg:text-4xl font-bold text-center text-primary'>Our available Parts</h2>

            <div className='mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-12'>
                {
                    parts.map(part => <Part
                        key={part._id}
                        part={part}
                    ></Part>)
                }
            </div>
        </div>
    );
};

export default Parts;