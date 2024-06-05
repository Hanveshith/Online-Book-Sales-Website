import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';


const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    const [username, setusername] = useState(null);
    const [redirect,setRedirect] = useState(false);
    useEffect(() => {
        try {
            fetch('http://localhost:4000/Profile', {
                credentials: 'include',
            }).then(response => {
                response.json().then(userInfo => {
                    console.log(userInfo)
                    setusername(userInfo.email)

                })
            })
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }, []);

    const fetchCartItems = async () => {
        try {
            const response = await fetch("http://localhost:4000/user/getCartItems", {
                credentials: 'include',
                method: 'GET'
            });
            const data = await response.json();
            setCartItems(data);
        } catch (error) {
            console.error('Error fetching books:', error);
        }
    };

    useEffect(() => {
        fetchCartItems();
    }, []);

    const getTotalPrice = () => {
        return Math.round(cartItems.reduce((total, item) => total + item.BookPrice, 0));
    };
    
    const getDiscountedPrice = () => {
        return Math.round(cartItems.reduce((total, item) => total + item.BookOfferPrice, 0));
    };
    

    const removeItem = async (id) => {
        try {
            const response = await fetch(`http://localhost:4000/user/removeItem/${id}`, {
                credentials: 'include',
                method: 'DELETE'
            });
            const data = await response.json();
            if (data.success) {
                setCartItems(prevItems => prevItems.filter(item => item._id !== id));
            }
        } catch (error) {
            console.error('Error removing item:', error);
        }
    };

    const discount = getTotalPrice() - getDiscountedPrice();

    const amount = getTotalPrice() - discount;
    const currency = "INR";
    const order_id = "order_HbQX1b7V9b7jdd";
    const pay_amount = amount * 100;
    const paymentHandler = async (e) => {
        const response = await fetch("http://localhost:4000/user/book/order", {
            credentials: 'include',
            method: "POST",
            body: JSON.stringify({amount : pay_amount, currency,receipt: order_id}),
            headers:{
                "Content-Type":"application/json",
            }
        })
        const order = await response.json();
        console.log(order);
        console.log(pay_amount) 
        var options = {
            "key": "rzp_test_QLOzxGjbSrHNQH", // Enter the Key ID generated from the Dashboard
            "amount": pay_amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            "currency": "INR",
            "name": "Best Book Buy(BBB)", //your business name
            "description": "Test Transaction",
            "image": "",
            "order_id": order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "handler": async function (response){
                const body = {
                    ...response,
                }
                const validateres = await fetch("http://localhost:4000/user/book/order/validate", {
                    credentials: 'include',
                    method: "POST",
                    body: JSON.stringify(body),
                    headers:{
                        "Content-Type":"application/json",
                    }
                })
                if(validateres.status === 200){
                    setRedirect(true)
                }
                const res = await validateres.json();
                console.log(res);
            },
            "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information, especially their phone number
                "name": "sai", //your customer's name
                "email": "a@example.com", 
                "contact": "9000090000"  //Provide the customer's phone number for better conversion rates 
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        };
        var rzp1 = new window.Razorpay(options);
        rzp1.on('payment.failed', function (response){
                alert(response.error.code);
                alert(response.error.description);
                alert(response.error.source);
                alert(response.error.step);
                alert(response.error.reason);
                alert(response.error.metadata.order_id);
                alert(response.error.metadata.payment_id);
        });
        rzp1.open();
        e.preventDefault();
    }

    if(redirect){
        return <Navigate to="/orders"/>
    }
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-8">
                    <div className="card mb-3">
                        <div className="card-body">
                            <h5 className="card-title">From Saved Addresses</h5>
                            <button className="btn btn-link">Enter Delivery Pincode</button>
                            {cartItems.map(item => (
                                <div key={item._id} className="border-bottom py-3 d-flex justify-content-between">
                                    <div className="d-flex">
                                        <img src={item.BookImage} alt={item.BookTitle} style={{ height: 200, width: 150 }} className="img-thumbnail mr-3" />
                                        <div>
                                            <h6 className="mb-1">{item.BookTitle}</h6>
                                            <p className="mb-1 text-muted">Author: {item.BookAuthor}</p>
                                            <p className={`${item.Stock > 0 ? "text-success" : "text-danger"} font-weight-bold`}>
                                                {item.Stock > 0 ? "In Stock" : "Out of Stock"}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-column align-items-end">
                                        <p className="font-weight-bold">₹{item.BookPrice}</p>
                                        <div className="d-flex">
                                            <button onClick={() => removeItem(item._id)} className="btn text-danger">Remove</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">PRICE DETAILS</h5>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item d-flex justify-content-between">
                                    <span>Price ({cartItems.length} items)</span>
                                    <span>₹{getTotalPrice()}</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between">
                                    <span>Discount</span>
                                    <span className="text-success">- ₹{discount}</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between">
                                    <span>Delivery Charges</span>
                                    <span className="text-success">Free</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between border-top pt-2">
                                    <span>Total Amount</span>
                                    <span>₹{getTotalPrice() - discount}</span>
                                </li>
                            </ul>
                            <p className="text-success mt-2">
                                You will save ₹{discount} on this order
                            </p>
                        </div>
                    </div>
                    <button onClick={paymentHandler} className="btn btn-warning btn-block mt-3">PLACE ORDER</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;
