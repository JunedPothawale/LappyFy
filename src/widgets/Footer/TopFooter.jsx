import React from 'react'

const TopFooter = () => {
    return (
        <>
            <div className="footer-top">
                <div className="container">
                    <div className="inner-content">
                        <div className="row">
                            <div className="col-lg-3 col-md-4 col-12">
                                <div className="footer-logo">
                                    <a href="index.html">
                                        <img src="src\assets\images\logo\white-logo.png" alt="#" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-9 col-md-8 col-12">
                                <div className="footer-newsletter">
                                    <h4 className="title">
                                        Subscribe to our Newsletter
                                        <span>Get all the latest information, Sales and Offers.</span>
                                    </h4>
                                    <div className="newsletter-form-head">
                                        <form action="#" method="get" target="_blank" className="newsletter-form">
                                            <input name="EMAIL" placeholder="Email address here..." type="email" />
                                            <div className="button">
                                                <button className="btn">Subscribe<span className="dir-part"></span></button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TopFooter
