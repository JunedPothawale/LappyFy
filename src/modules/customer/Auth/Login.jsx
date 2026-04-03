import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
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
                                <label>Password</label>
                                <div className="input-group">
                                    <input
                                        className="form-control"
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        value={form.password}
                                        onChange={handleChange}
                                        required
                                    />
                                    <span className="input-group-text"
                                        style={{ cursor: "pointer" }}
                                        onClick={() => setShowPassword(prev => !prev)}
                                        id="basic-addon2">

                                        {showPassword ?
                                            <svg fill="currentColor" viewBox="0 0 24 24" width="20px" height="20px" aria-hidden="true" class="x1lliihq x2lah0s x1k90msu x2h7rmj x1qfuztq x198g3q0 xxk0z11 xvy4d1p"><path fill-rule="evenodd" d="M12 8.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7m0 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M5.677 7.756c3.537-3.675 9.11-3.675 12.646 0l3.395 3.526a1.054 1.054 0 0 1 0 1.436l-3.395 3.526c-3.426 3.56-8.764 3.671-12.31.334l-.336-.334-3.395-3.526a1.054 1.054 0 0 1 0-1.436zm11.206 1.386c-2.75-2.857-7.016-2.857-9.766 0L4.367 12l2.75 2.857c2.75 2.857 7.016 2.857 9.766 0L19.632 12z" clip-rule="evenodd"></path></svg>
                                            :
                                            <svg viewBox="0 0 24 24" fill="currentColor" width="20px" height="20px" aria-hidden="true" class="x1lliihq x2lah0s x1k90msu x2h7rmj x1qfuztq x198g3q0 xxk0z11 xvy4d1p"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.293 2.293a1 1 0 1 1 1.414 1.414l-18 18a1 1 0 0 1-1.414-1.414l3.446-3.446c-.238-.188-.47-.387-.694-.6L1.31 12.722a.985.985 0 0 1 0-1.436l3.734-3.527c3.15-2.976 7.77-3.542 11.48-1.697l3.768-3.768zm-5.275 5.275c-2.852-1.138-6.23-.596-8.582 1.627l-2.974 2.808 2.974 2.809c.233.22.476.423.727.61l1.391-1.39a4 4 0 0 1 5.478-5.478l.986-.986zm-2.5 2.5a2.001 2.001 0 0 0-2.45 2.45l2.45-2.45z"></path><path d="M22.69 11.285 19.7 8.463l-1.414 1.414 2.251 2.126-2.973 2.809a8.099 8.099 0 0 1-6.377 2.164l-1.712 1.712c3.268.833 6.876.02 9.48-2.44l3.733-3.527a.985.985 0 0 0 0-1.436z"></path><path d="M15.997 12.167a4 4 0 0 1-3.83 3.83l3.83-3.83z"></path></svg>

                                        }

                                    </span>

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
            </div >
        </div >
    );
};

export default Login;