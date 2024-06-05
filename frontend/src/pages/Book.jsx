import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Bookheader from "../components/Bookheader";
import Bookdetails from "../components/Booksdetails";
import Booksforsale from "../components/Bookforsales";
import Footer from "../components/Footer";

export default function Book(){
    const {id} = useParams()
    const [BookDeatils, setBookDetails] = useState("");

    useEffect(() => {
        fetch(`http://localhost:4000/books/book/${id}`, {
            credentials: 'include',
            method: 'GET'
        })
        .then(response => response.json())
        .then(data => setBookDetails(data.Bookdata))
        .catch(error => console.error('Error fetching books:', error));
    }, []);
    return(
        <>
        <Bookheader BookDetails={BookDeatils}/>
        <Bookdetails BookDetails={BookDeatils}/>
        <Booksforsale/>
        <Footer/>
        </>
    )
}