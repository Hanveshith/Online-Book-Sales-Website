import React, { useState } from "react";
import { Navigate } from "react-router-dom";

export default function Loginpage() {
    const [formData,setFormData] = useState({
        email: "",
        password: ""
    });
    const [redirect,setRedirect] = useState(false);
    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };
    async function handleSubmit(e) {
        e.preventDefault();
        const {email,password} = formData;
        // console.log("Form submitted:", formData);
        const response = await fetch('http://localhost:4000/Login',{
            method: 'POST',
            body: JSON.stringify({email,password}),
            headers: {'Content-Type':'application/json'},
            credentials: 'include',
        })
        // console.log(response);
        if(response.ok){
            setRedirect(true);
        }else{
            response.status(400);
        }
    };
    if(redirect){
        return <Navigate to={'/'} />
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                    <div className="card border-0 shadow rounded-3 my-5">
                        <div className="card-body p-4 p-sm-5">
                            <h5 className="card-title text-center mb-5 fw-semi-bold fs-5">Sign In</h5>
                            <form action="/login" method="post" onSubmit={handleSubmit}>
                                <div className="form-floating mb-3">
                                    <input 
                                    type="email" 
                                    className="form-control" 
                                    id="email" 
                                    placeholder="name@example.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    />
                                    <label htmlFor="floatingInput">Email address</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input 
                                    type="password" 
                                    className="form-control" 
                                    id="password" 
                                    placeholder="Password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    />
                                    <label htmlFor="floatingPassword">Password</label>
                                </div>

                                <div className="form-check mb-3">
                                    <input className="form-check-input" type="checkbox" value="" id="rememberPasswordCheck"/>
                                        <label className="form-check-label" htmlFor="rememberPasswordCheck">
                                            Remember password
                                        </label>
                                </div>
                                <div className="d-grid">
                                    <button className="btn btn-primary btn-login text-uppercase fw-bold" type="submit">Sign
                                        in</button>
                                </div>
                                <hr className="my-4"/>
                            
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}