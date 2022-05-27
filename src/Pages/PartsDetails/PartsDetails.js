import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';

const PartsDetails = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({});
    const { _id, name, img, description, min, quantity, availableQuantity, price } = product;
    console.log(_id);
    const [user] = useAuthState(auth)

    useEffect(() => {
        const url = `http://localhost:5000/part/${productId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
        console.log(product);
    }, [productId])

    const handlePlaceOrder = e => {
        e.preventDefault();
        const placeOrder = {
            placeOrderProduct: _id,
            placeOrderProductName: name,
            customerEmail: user.email,
            customerName: user.displayName,
            phone: e.target.phone.value,
            address: e.target.address.value,
            placePrice: e.target.quantity.value * price,
            placeOrderQuantity: e.target.quantity.value
        }
        fetch('http://localhost:5000/placeOrder', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(placeOrder)
        })
            .then(res => res.json())
            .then(data => {
                toast.success('Successfully added your review');
                console.log(data);
            })

    }

    return (
        <div className='grid grid-cols-1 lg:grid-cols-2'>
            <div class="lg:m-24 m-12 max-w-xl card lg:card-side bg-base-100 shadow-xl">
                <figure><img className='w-48' src={img} alt="Album" /></figure>
                <div class="card-body">
                    <h2 class="card-title">{name}</h2>
                    <p>{description}</p>
                    <p className='text-md text-warning font-bold'>Price {price}$</p>
                    <p>Available Quantity: {quantity}</p>
                    <p className='btn btn-warning w-36 btn-outline btn-xs shadow-xl'>Minimum Order: {min}</p>
                </div>
            </div>


            <div class="shadow-xl rounded-xl py-12">

                <div class="bg-white p-10  mx-auto">

                    <form onSubmit={handlePlaceOrder}>
                        <div class="flex items-center mb-5">

                            <label for="name" class="inline-block w-20 mr-6 text-right 
                                 font-bold text-gray-600">Name</label>
                            <input type="text" id="name" name="name" value={user.displayName}
                                class="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                      text-gray-600 placeholder-gray-400
                      outline-none"/>
                        </div>
                        <div class="flex items-center mb-5">

                            <label for="name" class="inline-block w-20 mr-6 text-right 
                                 font-bold text-gray-600">Email</label>
                            <input type="text" id="name" name="email"
                                class="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                      text-gray-600" value={user.email} />
                        </div>
                        <div class="flex items-center mb-5">

                            <label for="name" class="inline-block w-20 mr-6 text-right 
                                 font-bold text-gray-600">Product Name</label>
                            <input type="text" id="name" name="name" value={name}
                                class="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                      text-gray-600 placeholder-gray-400
                      outline-none"/>
                        </div>
                        <div class="flex items-center mb-5">

                            <label for="name" class="inline-block w-20 mr-6 text-right 
                                 font-bold text-gray-600">Quantity</label>
                            <input type="number" id="name" name="quantity" min={min} defaultValue={min} placeholder="Name" max={quantity}
                                class="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                      text-gray-600 placeholder-gray-400
                      outline-none"/>
                        </div>
                        
                        <div class="flex items-center mb-5">

                            <label for="name" class="inline-block w-20 mr-6 text-right 
                                 font-bold text-gray-600">Phone</label>
                            <input type="text" id="name" name="phone" placeholder="Name"
                                class="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                      text-gray-600 placeholder-gray-400
                      outline-none"/>
                        </div>
                        <div class="flex items-center mb-5">

                            <label for="name" class="inline-block w-20 mr-6 text-right 
                                 font-bold text-gray-600">Address</label>
                            <input type="text" id="name" name="address" placeholder="Name"
                                class="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                      text-gray-600 placeholder-gray-400
                      outline-none"/>
                        </div>


                        <div class="text-right">
                            <button class="btn btn-primary font-bold">Place Order</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default PartsDetails;