import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Education = () => {
    return (
        <div className='w-4/5 mx-auto mb-24'>
            <h1 className='text-center font-bold mb-12 text-5xl uppercase'> <span className='text-primary'>EDUCATION Qualification</span></h1>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
                <div className='bg-black text-white p-5 mr-5 mb-5 rounded-t-xl shadow-2xl'>
                    <h2 className='text-2xl pl-10'><FontAwesomeIcon className='text-warning text-2xl pl-2 mr-2' icon={faGraduationCap}></FontAwesomeIcon><span className='font-bold'>Bechelor Degree-</span> <span>Daffodil International University</span></h2>
                    <p className='pl-10 py-3'>I have completed my Bechelor Degree from Daffodil International University
                        in Computer Science & Engineering. I got CGPA 3.63 out of 4.00
                    </p>
                    <p className='pl-10'>Session: 2018-2021</p>
                </div>
                <div className='bg-black text-white p-5 mr-5 mb-5 rounded-t-xl shadow-2xl'>
                    <h2 className='text-2xl pl-10 '><FontAwesomeIcon className='text-warning text-2xl pl-2 mr-2' icon={faGraduationCap}></FontAwesomeIcon><span className='font-bold'>Higher Secondary-</span> <span>Notre Dame College, Mymensingh</span></h2>
                    <p className='pl-10 py-3'>I have completed my Higher Secondary from Notre Dame College, Mymensingh
                        . I got GPA 4.5 from out of 5.
                    </p>
                    <p className='pl-10'>Session: 2015-2017</p>
                </div>
            </div>

        </div>
    );
};

export default Education;