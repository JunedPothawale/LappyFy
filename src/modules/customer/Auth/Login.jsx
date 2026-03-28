import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
    const [form, setForm] = useState({
        email: "",
        password: "",
        remember: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm({
            ...form,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form);
    };

    return (
        <div className="account-login section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 offset-lg-3 col-md-10 offset-md-1 col-12">

                        <form className="card login-form" onSubmit={handleSubmit}>
                            <div className="card-body">

                                <div className="title">
                                    <h3>Login Now</h3>
                                    <p>You can login using your social media account or email address.</p>
                                </div>

                                {/* SOCIAL */}
                                <div className="social-login">
                                    <div className="row">
                                        <div className="col-lg-4 col-12">
                                            <a className="btn facebook-btn" href="#">
                                                <i className="lni lni-facebook-filled"></i> Facebook login
                                            </a>
                                        </div>
                                        <div className="col-lg-4 col-12">
                                            <a className="btn twitter-btn" href="#">
                                                <i className="lni lni-twitter-original"></i> Twitter login
                                            </a>
                                        </div>
                                        <div className="col-lg-4 col-12">
                                            <a className="btn google-btn" href="#">
                                                <i className="lni lni-google"></i> Google login
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="alt-option"><span>Or</span></div>

                                {/* EMAIL */}
                                <div className="form-group input-group">
                                    <label>Email</label>
                                    <input
                                        className="form-control"
                                        type="email"
                                        name="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                {/* PASSWORD */}
                                <div className="form-group input-group">
                                    <label>Password</label>
                                    <input
                                        className="form-control"
                                        type="password"
                                        name="password"
                                        value={form.password}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                {/* REMEMBER */}
                                <div className="d-flex justify-content-between bottom-content">
                                    <div className="form-check">
                                        <input
                                            type="checkbox"
                                            className="form-check-input width-auto"
                                            name="remember"
                                            checked={form.remember}
                                            onChange={handleChange}
                                        />
                                        <label className="form-check-label">Remember me</label>
                                    </div>

                                    <Link className="lost-pass" to="/forgot">
                                        Forgot password?
                                    </Link>
                                </div>

                                <div className="button">
                                    <button className="btn" type="submit">Login</button>
                                </div>

                                <p className="outer-link">
                                    Don’t have an account? <Link to="/register">Register here</Link>
                                </p>

                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;