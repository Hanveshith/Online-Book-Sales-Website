import React,{useEffect,useState} from "react";
import Relatedbooks from "./Relatedbooks";
import { useParams } from "react-router-dom";

export default function Bookdetails(props) {
    const {BookImage,BookTitle,BookRating,BookDescription,BookAuthor,BookPublisher,BookCategories,Stock,BookLanguage,BookYear,BookOfferPrice} = props.BookDetails
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-auto">
                    <div className="heading">
                        <p className="fs-4 fw-bold">Book details</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-8">
                <table className="table border">
                    <tbody>
                        <tr>
                            <th scope="row" className="fs-6 fw-bold m-1">Book Title</th>
                            <td className="m-1">{BookTitle}</td>
                        </tr>
                        <tr>
                            <th scope="row" className="fs-6 fw-bold m-1">Author</th>
                            <td className="m-1">{BookAuthor}</td>
                        </tr>
                        <tr>
                            <th scope="row" className="fs-6 fw-bold m-1">Language</th>
                            <td className="m-1">{BookLanguage}</td>
                        </tr>
                        <tr>
                            <th scope="row" className="fs-6 fw-bold m-1">Publisher</th>
                            <td className="m-1">{BookPublisher}</td>
                        </tr>
                        <tr>
                            <th scope="row" className="fs-6 fw-bold m-1">Date Published</th>
                            <td className="m-1">Book Date</td>
                        </tr>
                        <tr>
                            <th scope="row" className="fs-6 fw-bold m-1">Tags</th>
                            <td className="">
                            {BookCategories && BookCategories.map((category) => (
                                <p className='bg-light d-inline text-primary m-1 rounded p-1 fs-6'>{category}</p>
                            ))}
                            </td>
                        </tr>
                    </tbody>
                </table>
                </div>
                <div className="col-lg-4">
                    <Relatedbooks/>
                </div>
            </div>
        </div>
    )
}