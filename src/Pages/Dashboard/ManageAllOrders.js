import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const ManageAllOrders = () => {
    
    const [orders, setOrders] = useState([]);
    const [ship, setShip] = useState(false);
    useEffect(() => {
        fetch('http://localhost:5000/orders', {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    const handleShip = id => {
        fetch(`https://enigmatic-island-80715.herokuapp.com/orders/${id}`, {
            method: "DELETE",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`
            },
        })

            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.deletedCount) {
                    toast.success("Successfully Order Shipped");
                    setShip(true);
                }
                else {
                    setShip(false);
                }
            });

    }

    return (
        <div className='m-2 lg:m-12'>
        <div class="overflow-x-auto">
            <table class="table w-full">

                <thead>
                    <tr>
                        <th>No</th>
                        <th>Product</th>
                        <th>Customer Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Payment Status</th>
                        <th>Shipping Status</th>
                        

                    </tr>
                </thead>
                <tbody>

                    {
                        orders.map((order, index) =>
                            <tr>
                                <th>{index + 1}</th>
                                <td>{order.placeOrderProductName}</td>
                                <td>{order.customerName}</td>
                                <td>{order.placePrice}$</td>
                                <td>{order.placeOrderQuantity}</td>
                                <td><button className='btn btn-success btn-sm'>Paid</button></td>
                                <td><button className='btn btn-info btn-sm text-white'>Ship</button><button className='btn btn-warning btn-sm text-white ml-1'>Cancel</button></td>
                            </tr>
                        )
                    }

                </tbody>
            </table>
        </div>
    </div>
    );
};

export default ManageAllOrders;

