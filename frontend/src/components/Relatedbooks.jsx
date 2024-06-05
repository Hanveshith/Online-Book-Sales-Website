import React from "react";

export default function Relatedbooks() {
    const Relatedbooks = [
        {
            id: 1,
            imageSrc: 'https://s-i.huffpost.com/gen/1148926/images/o-CLASSIC-BOOKS-ORIGINAL-COVERS-facebook.jpg',
            title: 'book 1',
            author: 'Jhon',
            description: 'Description for Image 1',
            Price: '$20'
        },
        {
            id: 2,
            imageSrc: 'https://www.skipprichard.com/wp-content/uploads/2018/12/9781501180989.jpg',
            title: 'book 2',
            author: 'Jhon Doe',
            description: 'Description for Image 2',
            Price: '$20'
        },
        {
            id: 3,
            imageSrc: 'https://i5.walmartimages.com/asr/446931ed-4607-46ce-9039-92b741207c5f_1.6d65271b042a992ccd2c47d6250dd8fb.jpeg',
            title: 'book 3',
            author: 'Jhon Dhe',
            description: 'Description for Image 3',
            Price: '$20'
        },
    ];
    return (
        <>
            {Relatedbooks.map((book) => (
                <div className="card mb-3 border-0">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={book.imageSrc} className="img-fluid rounded-2" style={{ height: '11rem', width: '9rem' }} alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body m-2 p-0">
                                <h5 className="card-title">Book Title</h5>
                                <p className="card-text">
                                    <div className='d-flex flex-row'>
                                        <p className='bg-light text-primary rounded ml-1 p-1 fs-6'>Horror</p>
                                        <p className='bg-light text-primary rounded mx-1 p-1 fs-6'>Thriller</p>
                                    </div>
                                    <div className='d-flex flex-row'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="gold" viewBox="0 0 24 24" stroke-width="0" stroke="currentColor" className='mt-0' style={{ height: '25px', width: '25px' }}>
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                        </svg>
                                        <p className='mb-0 ms-1 fs-6'>4.7</p>
                                    </div>
                                    <div className="col-md-auto d-flex flex-row ">
                                        <p className="m-0 fs-5">$25</p>
                                        <p className="m-0 text-secondary mt-2  ms-1  text-decoration-line-through" style={{ fontSize: '12px' }}>$50</p>
                                    </div>
                                    <div className="d-flex flex-row">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="blue" className="bi bi-cart mt-1" viewBox="0 0 16 16">
                                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                            </svg>
                                <p className="card-text p-0 m-0"><small className="text-body-secondary ms-1">Add to Cart</small></p>
                                    </div>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}