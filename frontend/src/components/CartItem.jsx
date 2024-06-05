import React, { useState } from 'react';

const Cart = () => {
    // Sample data for cart items
    
    const [cartItems, setCartItems] = useState([
        { id: 1, name: 'Sparx SS 561 Men Black Sandals', size: '10', price: 500, quantity: 1, status: 'Out Of Stock' },
        { id: 2, name: 'REEBOK Fusion Lux 2.0 M Walking Shoes For Men', size: '11, Grey', price: 700, quantity: 1, status: 'Out Of Stock' },
        { id: 3, name: 'Noise Buds VS102 Plus with 70 Hours Playtime, Instacharg...', size: 'Black, True Wireless', price: 567, quantity: 1, status: 'Out Of Stock' },
    ]);

    // Function to calculate the total price
    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    // Sample discounts and delivery charges
    const discount = 878;
    const deliveryCharges = 120;

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-8">
                    <div className="card mb-3">
                        <div className="card-body">
                            <h5 className="card-title">From Saved Addresses</h5>
                            <button className="btn btn-link">Enter Delivery Pincode</button>
                            {cartItems.map(item => (
                                <div key={item.id} className="border-bottom py-3 d-flex justify-content-between">
                                    <div className="d-flex">
                                        <img src={`https://via.placeholder.com/50?text=${item.name.charAt(0)}`} alt={item.name} className="img-thumbnail mr-3" />
                                        <div>
                                            <h6 className="mb-1">{item.name}</h6>
                                            <p className="mb-1 text-muted">Size: {item.size}</p>
                                            <p className="text-danger font-weight-bold">{item.status}</p>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-column align-items-end">
                                        <p className="font-weight-bold">₹{item.price}</p>
                                        <div className="d-flex">
                                            <button className="btn btn-link">Save for later</button>
                                            <button className="btn btn-link text-danger">Remove</button>
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
                                    <span>₹{getTotalPrice() - discount + deliveryCharges}</span>
                                </li>
                            </ul>
                            <p className="text-success mt-2">
                                You will save ₹{discount} on this order
                            </p>
                        </div>
                    </div>
                    <button className="btn btn-warning btn-block mt-3">PLACE ORDER</button>
                </div>
            </div>
        </div>
    );
}

export default Cart;
