import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
    const [username, setusername] = useState(null);
    useEffect(() => {
        try {
            fetch('http://localhost:4000/Profile', {
                credentials: 'include',
            }).then(response => {
                response.json().then(userInfo => {
                    console.log(userInfo)
                    setusername(userInfo.email)

                })
            })

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }, []);

    function logout() {
        try {
            fetch('http://localhost:4000/logout', {
                credentials: 'include',
                method: 'POST',
            })
        } catch (e) {
            console.log(e)
        }
    }
    return (
        <div style={{ height: '75px', backgroundColor: '#FFFFFF' }} className="container-fluid shadow-sm rounded-1">
            <div className="row text-center">
                <div className="col-lg-2 col-md-2 px-0 col-sm-6 col-6 d-flex justify-content-end align-items-center">
                    <Link to='/'>
                        <img className="m-0" src="https://png.pngtree.com/template/20190316/ourmid/pngtree-books-logo-image_79128.jpg" alt="logo" height={75} width={75}></img>
                    </Link>
                </div>
                <div className="col-lg-2 col-md-2 px-0 col-sm-6 col-6 d-flex justify-content-start align-items-center">
                    <h3 className="m-1">Books</h3>
                </div>
                <div className="col-lg-4 col-md-4 d-none d-md-block mt-3">
                    <div className="row">
                        <div className="col-2">
                            <label className="p-2 m-1" htmlFor="Search">Menu</label>
                        </div>
                        <div className="col-10 d-flex justify-content-start algin-item-center">
                            <Link to='/search'>
                                <input className="p-2 m-1 w-75 border border-primary rounded-2" type="text" placeholder="Search For Books" />
                            </Link>
                        </div>
                    </div>
                </div>

                {username && (
                    <div className="col-lg-2 col-md-2 col-sm-6 col-6 d-flex justify-content-end align-items-center mt-2">
                        <a onClick={logout} className="p-1 w-50 h-50 bg-light border border-primary text-decoration-none text-primary fw-bold rounded-2">Logout</a>
                    </div>
                )}
                {username && (

                    <div className="col-lg-2 col-md-2 col-sm-6 col-6 d-flex justify-content-end align-items-center mt-4" style={{ height: "30px" }}>
                        <Link to='/cartItems'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" style={{ height: "30px" }}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                        </svg>
                        </Link>
                    </div>

                )}

                {!username && (
                    <div className="col-lg-2 col-md-2 col-sm-6 col-6 d-flex d-md-justify-content-start justify-content-end align-items-center mt-2">
                        <Link to="/login" className="p-1 w-50 h-50 bg-light border border-primary text-decoration-none text-primary fw-bold rounded-2">Login</Link>
                    </div>
                )}
                {!username && (
                    <div className="col-lg-2 col-sm-6 col-6 d-flex justify-content-start align-items-center mt-2 ">
                        <Link to="/signup" className="p-1 m-1 w-50 h-50 bg-primary text-light border border-primary text-decoration-none text-primary fw-bold rounded-2">SignIn</Link>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Header;