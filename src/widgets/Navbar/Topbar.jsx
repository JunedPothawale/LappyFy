import React, { useState } from "react";
import { Link } from "react-router-dom";

const Topbar = () => {
    // Data
    const currencies = [
        { label: "$ USD", value: "usd" },
        { label: "€ EURO", value: "eur" },
        { label: "$ CAD", value: "cad" },
        { label: "₹ INR", value: "inr" },
        { label: "¥ CNY", value: "cny" },
        { label: "৳ BDT", value: "bdt" }
    ];

    const languages = [
        { label: "English", value: "en" },
        { label: "Español", value: "es" },
        { label: "Filipino", value: "ph" },
        { label: "Français", value: "fr" },
        { label: "العربية", value: "ar" },
        { label: "हिन्दी", value: "hi" },
        { label: "বাংলা", value: "bn" }
    ];

    const links = [
        { name: "Home", link: "/" },
        { name: "About Us", link: "/about" },
        { name: "Contact Us", link: "/contact" }
    ];

    // State
    const [currency, setCurrency] = useState("usd");
    const [language, setLanguage] = useState("en");

    // Mock user (replace with real auth)
    const user = null;

    return (
        <div className="topbar">
            <div className="container">
                <div className="row align-items-center">

                    {/* LEFT */}
                    <div className="col-lg-4 col-md-4 col-12">
                        <div className="top-left">
                            <ul className="menu-top-link">

                                <li>
                                    <div className="select-position">
                                        <select
                                            value={currency}
                                            onChange={(e) => setCurrency(e.target.value)}
                                            aria-label="Select Currency"
                                        >
                                            {currencies.map((cur) => (
                                                <option key={cur.value} value={cur.value}>
                                                    {cur.label}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </li>

                                <li>
                                    <div className="select-position">
                                        <select
                                            value={language}
                                            onChange={(e) => setLanguage(e.target.value)}
                                            aria-label="Select Language"
                                        >
                                            {languages.map((lang) => (
                                                <option key={lang.value} value={lang.value}>
                                                    {lang.label}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </li>

                            </ul>
                        </div>
                    </div>

                    {/* MIDDLE */}
                    <div className="col-lg-4 col-md-4 col-12">
                        <div className="top-middle">
                            <ul className="useful-links">
                                {links.map((item) => (
                                    <li key={item.link}>
                                        <Link to={item.link}>{item.name}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="col-lg-4 col-md-4 col-12">
                        <div className="top-end">


                            {user ? (
                                <>
                                    <div className="user">
                                        <i className="lni lni-user"></i>
                                        Hello {user?.name || "Guest"}
                                    </div>

                                    <ul className="user-login">
                                        <li>
                                            <Link to="/profile">Profile</Link>
                                        </li>
                                        <li>
                                            <Link to="/logout">Logout</Link>
                                        </li>
                                    </ul>
                                </>
                            ) : (
                                <ul className="user-login">
                                    <li>
                                        <Link to="/login">Sign In</Link>
                                    </li>
                                    <li>
                                        <Link to="/register">Register</Link>
                                    </li>
                                </ul>
                            )}

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Topbar;