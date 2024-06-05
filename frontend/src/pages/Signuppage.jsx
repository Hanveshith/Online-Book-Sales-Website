import React, { useState } from "react";
import { Navigate } from "react-router-dom";
export default function Signuppage() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        state: "",
        city: "",
        address: "",
        cityPin: "",
        password: "",
        role: "user",
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
        const { firstName, lastName, email, mobile, state, city, address, cityPin, password, role } = formData;
        // console.log("Form submitted:", formData);
        const response = await fetch('http://localhost:4000/Signup',{
            method: 'POST',
            body: JSON.stringify({firstName,lastName,email,mobile,state,city,address,cityPin,password,role}),
            headers: {'Content-Type':'application/json'},
        })
        console.log(response);
        if(response.ok){
            setRedirect(true);
        }else{
            response.status(400);
        }
    };
    if(redirect){
        return <Navigate to={'/'}/>
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                    <div className="card border-0 shadow rounded-3 my-5">
                        <div className="card-body p-4 p-sm-5">
                            <h5 className="card-title text-center mb-5 fw-semi-bold fs-5">Sign Up</h5>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="firstName" className="form-label">First Name</label>
                                    <input 
                                    type="text" 
                                    className="form-control" 
                                    id="firstName" 
                                    placeholder="First Name"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="lastName" className="form-label">Last Name</label>
                                    <input 
                                    type="text" 
                                    className="form-control" 
                                    id="lastName"
                                    placeholder="Last Name"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email address</label>
                                    <input 
                                    type="email"
                                    className="form-control"
                                    id="email" 
                                    placeholder="Email address" 
                                    value={formData.email}
                                    onChange={handleChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="mobile" className="form-label">Mobile</label>
                                    <input 
                                    type="tel" 
                                    className="form-control" 
                                    id="mobile" 
                                    placeholder="Mobile"
                                    value={formData.mobile}
                                    onChange={handleChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="state" className="form-label">State</label>
                                    <input 
                                    type="text" 
                                    className="form-control" 
                                    id="state" 
                                    placeholder="State"
                                    value={formData.state}
                                    onChange={handleChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="city" className="form-label">City</label>
                                    <input
                                    type="text"
                                    className="form-control" 
                                    id="city" 
                                    placeholder="City" 
                                    value={formData.city}
                                    onChange={handleChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="address" className="form-label">Address</label>
                                    <textarea 
                                    className="form-control" 
                                    id="address" 
                                    placeholder="Address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    ></textarea>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="cityPin" className="form-label">PIN Code</label>
                                    <input 
                                    type="text"
                                    className="form-control"
                                    id="cityPin"
                                    placeholder="PIN Code" 
                                    value={formData.cityPin}
                                    onChange={handleChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input 
                                    type="password" 
                                    className="form-control" 
                                    id="password" 
                                    placeholder="Password" 
                                    value={formData.password}
                                    onChange={handleChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="role" className="form-label">Role</label>
                                    <select className="form-select" id="role" value={formData.role} onChange={handleChange}>
                                        <option value="user">User</option>
                                        <option value="admin">Admin</option>
                                    </select>
                                </div>
                                <div className="d-grid">
                                    <button className="btn btn-primary btn-login text-uppercase fw-bold" type="submit">Sign up</button>
                                </div>
                                <hr className="my-4" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
