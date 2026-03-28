import React from "react";
import { Link } from "react-router-dom";

const Breadcrumbs = ({ title = "Page", paths = [] }) => {
    return (
        <div className="breadcrumbs">
            <div className="container">
                <div className="row align-items-center">

                    {/* LEFT */}
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="breadcrumbs-content">
                            <h1 className="page-title">{title}</h1>
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="col-lg-6 col-md-6 col-12">
                        <ul className="breadcrumb-nav">

                            {/* Home */}
                            <li>
                                <Link to="/">
                                    <i className="lni lni-home"></i> Home
                                </Link>
                            </li>

                            {/* Dynamic Paths */}
                            {paths.map((item, index) => (
                                <li key={index}>
                                    {item.link ? (
                                        <Link to={item.link}>{item.name}</Link>
                                    ) : (
                                        item.name
                                    )}
                                </li>
                            ))}

                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Breadcrumbs;