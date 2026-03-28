import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (form.password !== form.confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        console.log("Register Data:", form);

        // 👉 Call API here
        // registerUser(form)
    };

    return (
        <div className="account-login section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 offset-lg-3 col-md-10 offset-md-1 col-12">

                        <div className="register-form">
                            <div className="title">
                                <h3>No Account? Register</h3>
                                <p>
                                    Registration takes less than a minute but gives you full control over your orders.
                                </p>
                            </div>

                            <form className="row" onSubmit={handleSubmit}>

                                {/* FIRST NAME */}
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label htmlFor="firstName">First Name</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            id="firstName"
                                            name="firstName"
                                            value={form.firstName}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>

                                {/* LAST NAME */}
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label htmlFor="lastName">Last Name</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            id="lastName"
                                            name="lastName"
                                            value={form.lastName}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>

                                {/* EMAIL */}
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label htmlFor="email">E-mail Address</label>
                                        <input
                                            className="form-control"
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={form.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>

                                {/* PHONE */}
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label htmlFor="phone">Phone Number</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            id="phone"
                                            name="phone"
                                            value={form.phone}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>

                                {/* PASSWORD */}
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <input
                                            className="form-control"
                                            type="password"
                                            id="password"
                                            name="password"
                                            value={form.password}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>

                                {/* CONFIRM PASSWORD */}
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label htmlFor="confirmPassword">Confirm Password</label>
                                        <input
                                            className="form-control"
                                            type="password"
                                            id="confirmPassword"
                                            name="confirmPassword"
                                            value={form.confirmPassword}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>

                                {/* BUTTON */}
                                <div className="button">
                                    <button className="btn" type="submit">
                                        Register
                                    </button>
                                </div>

                                {/* LOGIN LINK */}
                                <p className="outer-link">
                                    Already have an account?{" "}
                                    <Link to="/login">Login Now</Link>
                                </p>

                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;