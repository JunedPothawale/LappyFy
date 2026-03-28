import React from "react";

const BottonFooter = () => {

    // JSON DATA
    const footerData = {
        payment: {
            text: "We Accept:",
            image: "/src/assets/images/footer/credit-cards-footer.png"
        },
        copyright: {
            text: "Designed and Developed by",
            company: "Lappyfy",
            link: "https://lappyfy.in/"
        },
        social: {
            title: "Follow Us On:",
            links: [
                {
                    icon: "lni lni-facebook-filled",
                    url: "https://www.facebook.com/lappyfylaptopsnagpurstore"
                },
                {
                    icon: "lni lni-instagram",
                    url: "https://www.instagram.com/lappyfy_laptops_nagpur/"
                },
                {
                    icon: "lni lni-google",
                    url: "https://maps.app.goo.gl/VYDkZeAXNh1QHC1Z9"
                }
            ]
        }
    };

    return (
        <div className="footer-bottom">
            <div className="container">
                <div className="inner-content">
                    <div className="row align-items-center">

                        {/* LEFT */}
                        <div className="col-lg-4 col-12">
                            <div className="payment-gateway">
                                <span>{footerData.payment.text}</span>
                                <img
                                    src={footerData.payment.image}
                                    alt="payment-methods"
                                />
                            </div>
                        </div>

                        {/* CENTER */}
                        <div className="col-lg-4 col-12">
                            <div className="copyright">
                                <p>
                                    {footerData.copyright.text}{" "}
                                    <a
                                        href={footerData.copyright.link}
                                        target="_blank"
                                        rel="nofollow noreferrer"
                                    >
                                        {footerData.copyright.company}
                                    </a>
                                </p>
                            </div>
                        </div>

                        {/* RIGHT */}
                        <div className="col-lg-4 col-12">
                            <ul className="socila">
                                <li>
                                    <span>{footerData.social.title}</span>
                                </li>

                                {footerData.social.links.map((item, index) => (
                                    <li key={index}>
                                        <a
                                            href={item.url}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <i className={item.icon}></i>
                                        </a>
                                    </li>
                                ))}

                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default BottonFooter;