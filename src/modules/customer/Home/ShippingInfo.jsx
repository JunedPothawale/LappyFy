import React from "react";

const shippingData = [
    {
        icon: "lni-delivery",
        title: "Free Shipping",
        subtitle: "On order over $99",
    },
    {
        icon: "lni-support",
        title: "24/7 Support.",
        subtitle: "Live Chat Or Call.",
    },
    {
        icon: "lni-credit-cards",
        title: "Online Payment.",
        subtitle: "Secure Payment Services.",
    },
    {
        icon: "lni-reload",
        title: "Easy Return.",
        subtitle: "Hassle Free Shopping.",
    },
];

const ShippingInfo = () => {
    return (
        <section className="py-5 bg-light">
            <div className="container">

                <div className="row border">

                    {shippingData.map((item, index) => (
                        <div
                            key={index}
                            className={`col-lg-3 white-hover col-md-6 col-12 text-center  py-4 px-3 ${index !== 3 ? "border-end" : ""
                                }`}
                        >
                            {/* Icon */}
                            <div className="mb-3">
                                <i className={`lni ${item.icon} fs-2 text-primary`}></i>
                            </div>

                            {/* Text */}
                            <h6 className="mb-1">{item.title}</h6>
                            <small className="text-muted">{item.subtitle}</small>
                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
};

export default ShippingInfo;