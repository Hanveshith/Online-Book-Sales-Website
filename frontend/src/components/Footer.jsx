import React from 'react';

function Footer() {
    return (
        <div>
            <div className="container-fluid m-0 p-0">
                <footer
                    className="text-center text-lg-start text-dark"
                    style={{ backgroundColor: "#ECEFF1" }}

                >

                    <section className="">
                        <div className="container text-center text-md-start mt-5">
                            <div className="row mt-3">

                                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 mt-2">

                                    <h6 className="text-uppercase fw-bold">Company name</h6>
                                    <hr
                                        className="mb-4 mt-0 d-inline-block mx-auto"
                                        style= {{width: '60px',backgroundColor: '#7c4dff',height: "2px"}}
                                    />
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, sed cupiditate dicta, quae obcaecati deserunt omnis iste dolorem quam earum non cum laudantium aliquam error?
                                    </p>
                                </div>

                                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 mt-2">

                                    <h6 className="text-uppercase fw-bold">Book Categories</h6>
                                    <hr
                                        className="mb-4 mt-0 d-inline-block mx-auto"
                                        style= {{width: '60px',backgroundColor: '#7c4dff',height: "2px"}}
                                    />
                                    <p>
                                        <a href="#!" className="text-dark text-decoration-none">Action</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-dark text-decoration-none">Mystery</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-dark text-decoration-none">Drama</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-dark text-decoration-none">Horror</a>
                                    </p>
                                </div>
                                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 mt-2">

                                    <h6 className="text-uppercase fw-bold">Quick links</h6>
                                    <hr
                                        className="mb-4 mt-0 d-inline-block mx-auto"
                                        style= {{width: '60px',backgroundColor: '#7c4dff',height: "2px"}}
                                    />
                                    <p>
                                        <a href="#!" className="text-dark text-decoration-none">About As</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-dark text-decoration-none">Contact Us</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-dark text-decoration-none">Login</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-dark text-decoration-none">Sign in</a>
                                    </p>
                                </div>
                                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 mt-2">
                                    <h6 className="text-uppercase fw-bold">Contact</h6>
                                    <hr
                                        className="mb-4 mt-0 d-inline-block mx-auto"
                                        style= {{width: '60px',backgroundColor: '#7c4dff',height: "2px"}}
                                    />
                                    <p><i className="fas fa-home mr-3"></i> New York, NY 10012, US</p>
                                    <p><i className="fas fa-envelope mr-3"></i> info@example.com</p>
                                    <p><i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
                                    <p><i className="fas fa-print mr-3"></i> + 01 234 567 89</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div
                        className="text-center p-3"
                        style= {{ backgroundColor: "rgba(0, 0, 0, 0.2)"}}
                    >
                        © 2020 Copyright:
                        <a className="text-dark" href="https://mdbootstrap.com/"
                        >MDBootstrap.com</a
                        >
                    </div>
                </footer>

            </div>
        </div>
    )
}
export default Footer;