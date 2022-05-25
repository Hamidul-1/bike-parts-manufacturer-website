import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyOrders = () => {
    const [orders, setOrders] = useState([])
    const [user] = useAuthState(auth);

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/placeOrder?email=${user.email}`,{
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                // .then(res => res.json())
                // .then(data => setOrders(data))
                .then(res => {
                    console.log('res',res)
                    return res.json()
                })
                .then(data => {
                    setOrders(data)
                });
                
        }
    }, [user])

    return (
        <div>
            <h2>My Orders: {orders.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Action</th>
                            <th>PaymentStatus</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((a, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{a.placeOrderProductName}</td>
                                <td>{a.placePrice}</td>
                                <td>{a.placeOrderQuantity}</td>
                                <td>{a.treatment}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;