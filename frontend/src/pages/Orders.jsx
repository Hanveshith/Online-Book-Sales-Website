// src/Orders.js
import React, { useState,useEffect } from 'react';


const Orders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        try {
             fetch('http://localhost:4000/user/GetOrderedBooks', {
                credentials: 'include',
                method: 'GET',
            }).then(response => {
                response.json().then(data => {
                    console.log(data)
                    setOrders(data)
                })
            })
            // console.log(details)
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    },[])
    return (
        <div className="container mt-5">
            {orders.map(order => (
                <div key={order._id} className="row mb-4 border p-3 rounded">
                    <div className="col-md-3">
                        <img src={order.BookImage} alt={order.BookTitle} height={125} width={125} className="img-fluid rounded" />
                    </div>
                    <div className="col-md-7">
                        <h4>{order.BookTitle}</h4>
                        <p>{order.BookDescription}</p>
                        <p>{order.orderDate}</p>
                    </div>
                    <div className="col-md-2 text-md-end text-center">
                        <div className="mb-2">
                            <strong>₹{order.BookOfferPrice}</strong>
                        </div>
                        <button className="btn btn-success">ORDERED</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Orders;
