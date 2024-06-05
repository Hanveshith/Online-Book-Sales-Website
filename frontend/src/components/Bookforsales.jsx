import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Booksforsale() {
    const [Booksforsale, setBooksForSale] = useState([]);

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
            setBooksForSale(formattedBooks);
        })
        .catch(error => console.error('Error fetching books:', error));
    }, []);
    
    
    return (
        <div className="container p-0">
            <div className="row mt-5 mb-5">
                <div className="col">
                    <h2>Books For Sale</h2>
                </div>
            </div>
            <div className='row'>
                {Booksforsale.map((book) => (
                    <div className='col'>
                        <div className="card border-0" style={{ width: '12rem' }}>
                        <div className="card-img-top rounded-4 hover hover-2 text-white rounded"  style={{ height: '15rem' }}><img src={book.imageSrc} alt="" />
                                <div className="hover-overlay"></div>
                                <div className="hover-2-content px-5 py-4">
                                    <Link  className="hover-2-description text-uppercase text-decoration-none bg-primary text-white rounded-2" to={`/book/${book.id}`}>View</Link>
                                </div>      
                            </div>
                            
                            
                            <div className="card-body p-0 m-1">
                                <p className="card-text fs-5 mt-2">{book.title}</p>
                            </div>
                            <div className='d-flex flex-row'>
                            {book.bookCategories.map((category) => (
                                <p className='bg-light text-primary m-1 rounded p-1 fs-6'>{category}</p>
                            ))}
                            </div>
                            <div className="card-body d-flex flex-row justify-content-between p-0">
                                <div className='d-flex flex-row'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="gold" viewBox="0 0 24 24" stroke-width="0" stroke="currentColor" className='mt-1' style={{height: '25px',width: '25px'}}>
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                </svg>
                                <p className='mt-1 ms-1 fs-6'>4.7</p>
                                </div>

                                <p className="card-text mt-1 me-4">₹{book.Price}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Booksforsale;