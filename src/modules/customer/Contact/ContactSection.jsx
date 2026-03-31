import React, { useState } from "react";
import Breadcrumbs from "../../../widgets/Breadcrumbs";

const ContactSection = () => {
    const [form, setForm] = useState({
        name: "",
        subject: "",
        email: "",
        phone: "",
        message: ""
    });

    const handleChange = (e) =>
        setForm({ ...form, [e.target.name]: e.target.value });

    return (
        <>
            <Breadcrumbs title="Cart" paths={[{ name: "Contact Us" }]} />
            <section style={{ background: "#f9fafb", padding: "60px 0" }}>
                <div className="container">

                    {/* TITLE */}
                    <div className="text-center mb-5">
                        <h2 style={{ fontWeight: 700, fontSize: "32px" }}>Contact Us</h2>

                        <div
                            style={{
                                width: "40px",
                                height: "2px",
                                background: "#1e66dc",
                                margin: "10px auto"
                            }}
                        ></div>

                        <p
                            className="text-muted"
                            style={{ maxWidth: "600px", margin: "0 auto", fontSize: "14px" }}
                        >
                            There are many variations of passages of Lorem Ipsum available,
                            but the majority have suffered alteration in some form.
                        </p>
                    </div>

                    <div className="row g-4">

                        {/* LEFT */}
                        <div className="col-lg-4">
                            <div
                                style={{
                                    background: "#fff",
                                    border: "1px solid #eee",
                                    borderRadius: "6px",
                                    padding: "30px"
                                }}
                            >

                                {/* ADDRESS */}
                                <div style={{ marginBottom: "30px" }}>
                                    <i className="lni lni-map" style={{
                                        color: "#1e66dc",
                                        fontSize: "22px",
                                        marginBottom: "10px",
                                        display: "block"
                                    }}></i>

                                    <h6 style={{ fontWeight: 600 }}>Address</h6>

                                    <p className="text-muted mb-0" style={{ fontSize: "14px" }}>
                                        44 Shirley Ave. West Chicago,<br />
                                        IL 60185, USA.
                                    </p>
                                </div>

                                {/* PHONE */}
                                <div style={{ marginBottom: "30px" }}>
                                    <i className="lni lni-phone" style={{
                                        color: "#1e66dc",
                                        fontSize: "22px",
                                        marginBottom: "10px",
                                        display: "block"
                                    }}></i>

                                    <h6 style={{ fontWeight: 600 }}>Call us on</h6>

                                    <p className="text-muted mb-0" style={{ fontSize: "14px" }}>
                                        +1 800 555 44 00 (Toll free)<br />
                                        +321 55 666 7890
                                    </p>
                                </div>

                                {/* EMAIL */}
                                <div>
                                    <i className="lni lni-envelope" style={{
                                        color: "#1e66dc",
                                        fontSize: "22px",
                                        marginBottom: "10px",
                                        display: "block"
                                    }}></i>

                                    <h6 style={{ fontWeight: 600 }}>Mail at</h6>

                                    <p className="text-muted mb-0" style={{ fontSize: "14px" }}>
                                        support@shopgrids.com<br />
                                        career@shopgrids.com
                                    </p>
                                </div>

                            </div>
                        </div>

                        {/* RIGHT */}
                        <div className="col-lg-8">
                            <div
                                style={{
                                    background: "#fff",
                                    border: "1px solid #eee",
                                    borderRadius: "6px",
                                    padding: "30px"
                                }}
                            >

                                <form>
                                    <div className="row g-3">

                                        {/* INPUTS */}
                                        <div className="col-md-6">
                                            <input
                                                type="text"
                                                name="name"
                                                placeholder="Your Name"
                                                className="form-control"
                                                onChange={handleChange}
                                                style={{
                                                    height: "42px",
                                                    fontSize: "14px",
                                                    borderColor: "#e5e7eb"
                                                }}
                                            />
                                        </div>

                                        <div className="col-md-6">
                                            <input
                                                type="text"
                                                name="subject"
                                                placeholder="Your Subject"
                                                className="form-control"
                                                onChange={handleChange}
                                                style={{
                                                    height: "42px",
                                                    fontSize: "14px",
                                                    borderColor: "#e5e7eb"
                                                }}
                                            />
                                        </div>

                                        <div className="col-md-6">
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="Your Email"
                                                className="form-control"
                                                onChange={handleChange}
                                                style={{
                                                    height: "42px",
                                                    fontSize: "14px",
                                                    borderColor: "#e5e7eb"
                                                }}
                                            />
                                        </div>

                                        <div className="col-md-6">
                                            <input
                                                type="text"
                                                name="phone"
                                                placeholder="Your Phone"
                                                className="form-control"
                                                onChange={handleChange}
                                                style={{
                                                    height: "42px",
                                                    fontSize: "14px",
                                                    borderColor: "#e5e7eb"
                                                }}
                                            />
                                        </div>

                                        {/* TEXTAREA */}
                                        <div className="col-12">
                                            <textarea
                                                name="message"
                                                placeholder="Your Message"
                                                className="form-control"
                                                rows="6"
                                                onChange={handleChange}
                                                style={{
                                                    fontSize: "14px",
                                                    borderColor: "#e5e7eb"
                                                }}
                                            ></textarea>
                                        </div>

                                        {/* BUTTON */}
                                        <div className="col-12">
                                            <button
                                                className="btn"
                                                style={{
                                                    background: "#1e66dc",
                                                    color: "#fff",
                                                    padding: "10px 22px",
                                                    fontSize: "14px",
                                                    borderRadius: "4px"
                                                }}
                                            >
                                                Submit Message
                                            </button>
                                        </div>

                                    </div>
                                </form>

                            </div>
                        </div>

                    </div>

                </div>
            </section>
        </>

    );
};

export default ContactSection;