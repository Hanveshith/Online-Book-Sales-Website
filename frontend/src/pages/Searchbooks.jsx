import React from "react";
import Filteroptions from "../components/Filteroptions";
import Booksforsale from "../components/Bookforsales";
import Books from "../components/Books";
import Footer from "../components/Footer";

export default function Searchbooks() {
    return (
        <>
        <div className="container-fluid row mt-4">
            <div className="col-lg-3">
                <Filteroptions />
            </div>
            <div className="col-lg-8 books container-fluid p-0 m-0">
                <p className="fs-3 ms-1 text-semi-bold">Books</p>
            <hr className="m-2"/>
            <Books/>
            </div>
        </div>
        <div>
            <Footer/>
        </div>
        </>

    )
}