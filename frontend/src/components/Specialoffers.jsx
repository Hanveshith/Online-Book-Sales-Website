import React, { useEffect, useState } from 'react';
import { Link,Navigate } from 'react-router-dom';

function Specialoffers() {
    const [OfferItems, setOfferItems] = useState([]);
    const [status, setStatus] = useState(false);
    const [redirect, setRedirect] = useState(false);
    const [cartStatus, setCartStatus] = useState({});

    useEffect(() => {
        fetch('http://localhost:4000/books', {
            credentials: 'include',
            method: 'GET'
        })
            .then(response => response.json())
            .then(booksData => {
                const formattedBooks = booksData.data.map(book => ({
                    id: book._id,
                    imageSrc: book.BookImage,
                    title: book.BookTitle,
                    author: book.BookAuthor,
                    description: book.BookDescription,
                    bookCategories: book.BookCategories,
                    Price: book.BookPrice
                }));
                setOfferItems(formattedBooks);
                // Fetch cart status for each book
                booksData.data.forEach(book => {
                    fetchCartStatus(book._id);
                });
            })
            .catch(error => console.error('Error fetching books:', error));
    }, []);

    async function AddToCart(id) {
        try {
            const response = await fetch(`http://localhost:4000/book/add/${id}`, {
                credentials: 'include',
                method: 'POST',
            });
            console.log(response.status);
            if (response.status === 401) {
                alert("PLEASE LOGIN");
            } else if (response.status === 200) {
                alert("ADDED TO CART SUCCESSFULLY");
                setStatus(true);
                setCartStatus(prev => ({ ...prev, [id]: true }));
            } else if (response.status === 402) {
                setRedirect(true);
            }
        } catch (error) {
            console.log(error);
        }
    }

    async function fetchCartStatus(id) {
        try {
            const response = await fetch(`http://localhost:4000/user/getCartItem/${id}`, {
                credentials: 'include',
                method: 'GET'
            });

            if (response.status === 200) {
                setCartStatus(prev => ({ ...prev, [id]: true }));
            } else {
                setCartStatus(prev => ({ ...prev, [id]: false }));
            }
        } catch (error) {
            console.error('Error fetching book:', error);
        }
    }

    if (redirect) {
        return <Navigate to={'/cartItems'} />
    }

    return (
        <div className="container">
            <div className="row mt-5 mb-5">
                <div className="col-lg-12 text-center">
                    <h2>Special Offers</h2>
                </div>
            </div>
            <div className="row ms-4">
                {OfferItems.map((item) => (
                    // <Link  className="text-decoration-none text-black" to={`/book/${item.id}`}>
                    <div key={item.id} className='col'>
                        <div className="card p-0 m-1" style={{ width: '22rem' }}>
                        <div className="card-img-top rounded-4 hover hover-2 text-white rounded pb-55"  style={{ height: '30rem'}}><img  src={item.imageSrc} alt="" />
                                <div className="hover-overlay"></div>
                                <div className="hover-2-content px-5 py-4">
                                    <Link  className="hover-2-description text-uppercase text-decoration-none bg-primary text-white rounded-2" to={`/book/${item.id}`}>View</Link>
                                </div>      
                            </div>
                            <div className="card-body p-0 mt-1">
                                <h5 className="card-title">{item.title}</h5>
                            </div>
                            <div className='d-flex flex-row'>
                                {item.bookCategories.map((category, index) => (
                                    <p key={index} className='bg-light text-primary m-1 rounded p-1 fs-6'>{category}</p>
                                ))}
                            </div>
                            <div className='p-0 mt-1 mb-1'>
                                <p className="card-text mx-1">{item.description}</p>
                            </div>
                            <div className="card-body d-flex flex-row justify-content-between p-0">
                                <button 
                                    onClick={() => AddToCart(item.id)} 
                                    className="card-link bg-light border w-50 text-primary rounded-2 p-1"
                                >
                                    {cartStatus[item.id] ? "Go to Cart" : "Add to Cart"}
                                </button>
                                <p className="card-text mt-1 me-4">₹{item.Price}</p>
                            </div>
                        </div>
                    </div>
                    // </Link>
                ))}
            </div>
            <div className='row mt-2 mb-5'>
                <div className='col-lg-12 text-center'>
                    <button className="card-link bg-primary border text-white rounded-2 p-1">View More</button>
                </div>
            </div>
        </div>
    );
}

export default Specialoffers;
