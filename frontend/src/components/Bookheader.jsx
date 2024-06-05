import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

export default function Bookheader(props) {
    
    const {
        _id, BookImage, BookTitle, BookRating, BookDescription,
        BookAuthor, BookPublisher, Stock, BookYear, BookOfferPrice
    } = props.BookDetails || {};

    if (!props.BookDetails || !_id) {
        return <div>Loading...</div>;
    }

    const [status, setStatus] = useState(false);
    const [redirect, setRedirect] = useState(false);

    async function AddToCart() {
        if (!_id) return;

        try {
            const response = await fetch(`http://localhost:4000/book/add/${_id}`, {
                credentials: 'include',
                method: 'POST',
            });
            console.log(response.status);
            if (response.status === 401) {
                alert("PLEASE LOGIN");
            } else if (response.status === 200) {
                alert("ADDED TO CART SUCCESSFULLY");
                setStatus(true);
            }else if(response.status == 402){
                setRedirect(true);
            }
        } catch (error) {
            console.log(error);
        }
    }
    
    useEffect(() => {
        if (!_id) return;

        async function fetchCartStatus() {
            try {
                
                const response = await fetch(`http://localhost:4000/user/getCartItem/${_id}`, {
                    credentials: 'include',
                    method: 'GET'
                });
            
                if (response.status === 200) {
                    console.log(response.status)
                    setStatus(true);
                }
            } catch (error) {
                console.error('Error fetching book:', error);
            }
        }
        fetchCartStatus();
    }, [status]);

    

    if(redirect){
        return <Navigate to={'/cartItems'} />
    }
    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-lg-4 d-flex justify-content-center align-items-center">
                    <img src={BookImage} alt="" className="w-75 rounded-4" />
                </div>
                <div className="col-lg-8">
                    <div className="fs-3 fw-semibold">
                        <p className="m-0">{BookTitle}</p>
                    </div>
                    <div className="d-flex flex-row mt-1">
                        <div className='d-flex flex-row'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="gold" viewBox="0 0 24 24" strokeWidth="0" stroke="currentColor" className='mt-1' style={{ height: '25px', width: '25px' }}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                            </svg>
                            <p className='mt-1 ms-1 fs-6'>{BookRating}</p>
                        </div>
                        <div className='d-flex flex-row ms-4'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="mt-2" style={{ height: '21px', width: '21px' }}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                            </svg>
                            <p className='mt-1 ms-1 fs-6'>236 reviews</p>
                        </div>
                        <div className='d-flex flex-row ms-4'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="blue" className="mt-2" style={{ height: '21px', width: '21px' }}>
                                <path d="M7.493 18.5c-.425 0-.82-.236-.975-.632A7.48 7.48 0 0 1 6 15.125c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75A.75.75 0 0 1 15 2a2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23h-.777ZM2.331 10.727a11.969 11.969 0 0 0-.831 4.398 12 12 0 0 0 .52 3.507C2.28 19.482 3.105 20 3.994 20H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 0 1-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227Z" />
                            </svg>
                            <p className='mt-1 ms-1 fs-6'>20k</p>
                        </div>
                    </div>
                    <div className="mt-2">{BookDescription}</div>
                    <div className="row mt-4">
                        <div className="col-md-auto me-4">
                            <p className="m-0 text-secondary">Written By</p>
                            <p className="m-0 fs-6 fw-semibold">{BookAuthor}</p>
                        </div>
                        <div className="col-md-auto me-4">
                            <p className="m-0 text-secondary">Publisher</p>
                            <p className="m-0 fs-6 fw-semibold">{BookPublisher}</p>
                        </div>
                        <div className="col-md-auto me-4">
                            <p className="m-0 text-secondary">Year</p>
                            <p className="m-0 fs-6 fw-semibold">{BookYear}</p>
                        </div>
                        {Stock > 0 && (
                            <div className="col-md-auto">
                                <button onClick={AddToCart} className="btn btn-primary">
                                    {(status == false)?"Add to Cart":"Go to Cart"}
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
