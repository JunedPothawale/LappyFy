import React from "react";
import { Link } from "react-router-dom";

const MiddleFooter = () => {

    const data = {
        contact: {
            title: "Get In Touch With Us",
            phone: "+91 842 101 8184",
            timings: [
                { label: "Monday-Friday", value: "9.00 am - 8.00 pm" },
                { label: "Saturday", value: "10.00 am - 6.00 pm" }
            ],
            email: "lappyfy.co@gmail.com"
        },
        apps: {
            title: "Our Mobile App",
            list: [
                {
                    icon: "lni lni-apple",
                    small: "Download on the",
                    big: "App Store",
                    link: "#"
                },
                {
                    icon: "lni lni-play-store",
                    small: "Download on the",
                    big: "Google Play",
                    link: "#"
                }
            ]
        },
        infoLinks: {
            title: "Information",
            list: [
                { name: "About Us", link: "/about" },
                { name: "Contact Us", link: "/contact" },
                { name: "Downloads", link: "/downloads" },
                { name: "Sitemap", link: "/sitemap" },
                { name: "FAQs Page", link: "/faqs" }
            ]
        },
        departments: {
            title: "Shop Departments",
            list: [
                { name: "Computers & Accessories", link: "#" },
                { name: "Smartphones & Tablets", link: "#" },
                { name: "TV, Video & Audio", link: "#" },
                { name: "Cameras, Photo & Video", link: "#" },
                { name: "Headphones", link: "#" }
            ]
        }
    };

    return (
        <div className="footer-middle">
            <div className="container">
                <div className="bottom-inner">
                    <div className="row">

                        {/* CONTACT */}
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="single-footer f-contact">
                                <h3>{data.contact.title}</h3>

                                <p className="phone">
                                    Phone: <a href={`tel:${data.contact.phone}`}>{data.contact.phone}</a>
                                </p>

                                <ul>
                                    {data.contact.timings.map((item, i) => (
                                        <li key={i}>
                                            <span>{item.label}: </span> {item.value}
                                        </li>
                                    ))}
                                </ul>

                                <p className="mail">
                                    <a href={`mailto:${data.contact.email}`}>
                                        {data.contact.email}
                                    </a>
                                </p>
                            </div>
                        </div>

                        {/* APP */}
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="single-footer our-app">
                                <h3>{data.apps.title}</h3>

                                <ul className="app-btn">
                                    {data.apps.list.map((item, i) => (
                                        <li key={i}>
                                            <a href={item.link}>
                                                <i className={item.icon}></i>
                                                <span className="small-title">{item.small}</span>
                                                <span className="big-title">{item.big}</span>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* INFORMATION */}
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="single-footer f-link">
                                <h3>{data.infoLinks.title}</h3>

                                <ul>
                                    {data.infoLinks.list.map((item, i) => (
                                        <li key={i}>
                                            <Link to={item.link}>{item.name}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* DEPARTMENTS */}
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="single-footer f-link">
                                <h3>{data.departments.title}</h3>

                                <ul>
                                    {data.departments.list.map((item, i) => (
                                        <li key={i}>
                                            <Link to={item.link}>{item.name}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default MiddleFooter;