import React from "react";
import appointment from '../../assets/images/contact.jpg';
import PrimaryButton from "../Shared/PrimaryButton";

const Contact = () => {
    return (
        <div>
            <h2 className='my-12 text-2xl lg:text-4xl font-bold text-center text-primary'>Contact Us</h2>
            <div style={{
                background: `url(${appointment})`,
                backgroundSize: 'cover'
            }} className='bg-primary px-10 py-14 w-full'>
                <div className='text-center pb-14 text-white'>
                    
                    <h1 className='text-4xl'>Stay connected with us</h1>
                </div>
                <div className='grid grid-cols-1 justify-items-center gap-5'>
                    <input
                        type='text'
                        placeholder='Email Address'
                        className='input w-full max-w-md'
                    />
                    <input
                        type='text'
                        placeholder='Subject'
                        className='input w-full max-w-md'
                    />
                    <textarea
                        className='textarea w-full max-w-md'
                        placeholder='Your message'
                        rows={6}
                    ></textarea>
                    <PrimaryButton>Submit</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Contact;