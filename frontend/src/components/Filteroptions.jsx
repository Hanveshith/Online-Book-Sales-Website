import React from "react";

export default function Filteroptions() {
    return (
        <div className="w-auto">
            <div className="">
                <div className="heading">
                    <p className="fs-3 fw-semibold">Filter Options</p>
                </div>
                <div className="box h-100 w-200 rounded-2 border">
                    <div className="d-flex flex-column">
                        <p className="fs-5 mb-1 mt-1 px-2 fw-semibold">Select Categorie</p>
                        <div className="row m-1">
                            <div className="col">
                                <input type="checkbox" className="m-1" />
                                <label className="p-1">Horror</label>
                            </div>
                            <div className="col">
                                <input type="checkbox" className="m-1" />
                                <label className="p-1">Action</label>
                            </div>
                        </div>
                        <div className="row m-1">
                            <div className="col">
                                <input type="checkbox" className="m-1" />
                                <label className="p-1">Adventure</label>
                            </div>
                            <div className="col">
                                <input type="checkbox" className="m-1" />
                                <label className="p-1">Animation</label>
                            </div>
                        </div>
                        <div className="row m-1">
                            <div className="col">
                                <input type="checkbox" className="m-1" />
                                <label className="p-1">Sci-fi</label>
                            </div>
                            <div className="col">
                                <input type="checkbox" className="m-1" />
                                <label className="p-1">History</label>
                            </div>
                        </div>
                        <div className="row m-1">
                            <div className="col">
                                <input type="checkbox" className="m-1" />
                                <label className="p-1">Crime</label>
                            </div>
                            <div className="col">
                                <input type="checkbox" className="m-1" />
                                <label className="p-1">Documentry</label>
                            </div>
                        </div>
                        <hr className="h-1 mx-2 p-1" />
                        <div className="d-flex flex-column">
                            <p className="fs-5 mb-1 mt-1 px-2 fw-semibold">price Range</p>
                            <div className="row">
                                <div className="col m-2">
                                     {/* Price Slider */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}