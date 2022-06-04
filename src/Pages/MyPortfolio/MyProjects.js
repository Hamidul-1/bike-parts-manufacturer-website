import React from 'react';
import laptopWarehouse from '../../assets/images/Laptop.png';
import doctorsPortal from '../../assets/images/DoctorsPortal.png';
import mathTutor from '../../assets/images/MathTutor.png'


const MyProjects = () => {
    return (
        <div className='text-center px-12 mb-24'>
            <h1 className='text-center font-bold mb-12 text-5xl uppercase'>My Best <span className='text-primary'>Projects</span></h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2'>
                <div class="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure>
                        <img src={doctorsPortal} alt="Shoes" />
                    </figure>
                    <div class="card-body">
                        <div class="card-actions justify-start">
                            <a href="https://doctors-portal-bb669.web.app/" target='_blank'><button class="btn btn-primary">Live Site</button></a>
                        </div>
                    </div>
                </div>
                <div class="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure>
                        <img src={laptopWarehouse} alt="Shoes" />
                    </figure>
                    <div class="card-body">
                        <div class="card-actions justify-start">
                            <a href="https://laptop-warehouse-37066.web.app/" target='_blank'><button class="btn btn-primary">Live Site</button></a>
                        </div>
                    </div>
                </div>
                <div class="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure>
                        <img src={mathTutor} alt="Shoes" />
                    </figure>
                    <div class="card-body">
                        <div class="card-actions justify-start">
                            <a href="https://math-tutor-1c0de.web.app/" target='_blank'><button class="btn btn-primary">Live Site</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProjects;