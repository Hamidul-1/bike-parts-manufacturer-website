import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import CheckOutForm from './CheckOutForm';


const stripePromise = loadStripe(
    "pk_test_51L265pLDYd4Pl0opYhzQeMb1OcbucVOycJzkZoBzFWRWQzl0nIJ3f6kbCtCfO8wzVEHndhGrvtFP88l1qNLXGIX700BAunRWkt"
);

const Payment = () => {
    const [user] = useAuthState(auth);
    const { paymentId } = useParams();
    const url = `https://enigmatic-island-80715.herokuapp.com/placeOrder/${paymentId}`;
    const { data: order, isLoading } = useQuery(["order", paymentId], () =>
        fetch(url, {
            method: "GET",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        }).then((res) => res.json())
    );

    if (isLoading) {
        return <Loading></Loading>;
    }
    return (
        <div className="px-6 lg:px-12">
            <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div class="card-body">
                    <p className="text-xl text-secondary">Hello, {user.displayName} ☺</p>
                    <h2 class="card-title">
                        Please pay for{" "}
                        <span className="font-bold">"{order.placeOrderProductName}"</span>
                    </h2>
                    <p>
                        Please Pay:{" "}
                        <span className="text-orange-500">${order.placePrice}</span>
                    </p>
                </div>
            </div>
            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckOutForm order={order} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;