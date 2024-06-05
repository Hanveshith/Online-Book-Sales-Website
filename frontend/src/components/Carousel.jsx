import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CarouselWithDescription = () => {
  const [carouselItems, setcarouselItems] = useState([]);

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
                Price: book.BookPrice
            }));
            setcarouselItems(formattedBooks);
        })
        .catch(error => console.error('Error fetching books:', error));
    }, []);
    
  
  const imageSize = {
    objectFit: 'contain',
    width: '100%', // Set your desired width
    height: '400px', // Set your desired height

  };

  return (
    <div className="d-flex align-items-center justify-content-center mt-4">
      <Carousel style={{ width: '100%' }}>
        {carouselItems.map((item) => (
          <Carousel.Item key={item.id}>
            <Link  className="text-decoration-none text-black" to={`/book/${item.id}`}>
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-6">
                  <img
                    className="d-block mx-auto border rounded-4"
                    src={item.imageSrc}
                    alt={`Slide ${item.id}`}
                    style={imageSize}
                  />
                </div>
                <div className="col-md-6 d-flex flex-column justify-content-center align-items-start">
                  <div className="d-flex flex-row">
                    <p className="text-center fs-3 mx-2">Title: </p>
                    <p className="text-center fs-4 mx-1 mt-1">{item.title}</p>
                  </div>
                  <div className="d-flex flex-row">
                    <p className="text-center fs-3 mx-2">Author:</p>
                    <p className="text-center fs-4 mx-1 mt-1">{item.author}</p>
                  </div>
                  <div className="d-flex flex-row">
                    {/* <p className="text-center mx-2"></p> */}
                    <p className="text fs-5 mx-2">{item.description.slice(0,80)+"..."}</p>
                  </div>
                  <div className="d-flex flex-row">
                    <p className="text-center fs-4 mx-2">Price: </p>
                    <p className="text-center fs-4 mx-1 mt-1">₹{item.Price}</p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselWithDescription;
