import React from "react";
import Breadcrumbs from "../../../widgets/Breadcrumbs";


const Checkout = () => {
    return (
        <>
            <Breadcrumbs title="Cart" paths={[{ name: "Shop", link: "/shop" }, { name: "Checkout" }]} />
            <section className="checkout-wrapper section" >
                <div className="container">
                    <div className="row justify-content-center">

                        {/* LEFT */}
                        <div className="col-lg-8">
                            <div className="checkout-steps-form-style-1">
                                <ul id="accordionExample">

                                    {/* STEP 1 */}
                                    <li>
                                        <h6 className="title" data-bs-toggle="collapse" data-bs-target="#collapseThree">
                                            Your Personal Details
                                        </h6>

                                        <section className="checkout-steps-form-content collapse show" id="collapseThree" data-bs-parent="#accordionExample">
                                            <div className="row">

                                                <div className="col-md-12">
                                                    <div className="single-form form-default">
                                                        <label>User Name</label>
                                                        <div className="row">
                                                            <div className="col-md-6 form-input form">
                                                                <input type="text" placeholder="First Name" />
                                                            </div>
                                                            <div className="col-md-6 form-input form">
                                                                <input type="text" placeholder="Last Name" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-md-6">
                                                    <div className="single-form form-default">
                                                        <label>Email Address</label>
                                                        <div className="form-input form">
                                                            <input type="text" placeholder="Email Address" />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-md-6">
                                                    <div className="single-form form-default">
                                                        <label>Phone Number</label>
                                                        <div className="form-input form">
                                                            <input type="text" placeholder="Phone Number" />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-md-12">
                                                    <div className="single-form form-default">
                                                        <label>Mailing Address</label>
                                                        <div className="form-input form">
                                                            <input type="text" placeholder="Mailing Address" />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-md-6">
                                                    <div className="single-form form-default">
                                                        <label>City</label>
                                                        <div className="form-input form">
                                                            <input type="text" placeholder="City" />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-md-6">
                                                    <div className="single-form form-default">
                                                        <label>Post Code</label>
                                                        <div className="form-input form">
                                                            <input type="text" placeholder="Post Code" />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-md-6">
                                                    <div className="single-form form-default">
                                                        <label>Country</label>
                                                        <div className="form-input form">
                                                            <input type="text" placeholder="Country" />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-md-6">
                                                    <div className="single-form form-default">
                                                        <label>Region/State</label>
                                                        <div className="select-items">
                                                            <select className="form-control">
                                                                <option>select</option>
                                                                <option>Option 1</option>
                                                                <option>Option 2</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-md-12">
                                                    <div className="single-checkbox checkbox-style-3">
                                                        <input type="checkbox" id="same-address" />
                                                        <label htmlFor="same-address"><span></span></label>
                                                        <p>My delivery and mailing addresses are the same.</p>
                                                    </div>
                                                </div>

                                                <div className="col-md-12">
                                                    <div className="single-form button">
                                                        <button className="btn" data-bs-toggle="collapse" data-bs-target="#collapseFour">
                                                            Next Step
                                                        </button>
                                                    </div>
                                                </div>

                                            </div>
                                        </section>
                                    </li>

                                    {/* STEP 2 */}
                                    <li>
                                        <h6 className="title collapsed" data-bs-toggle="collapse" data-bs-target="#collapseFour">
                                            Shipping Address
                                        </h6>

                                        <section className="checkout-steps-form-content collapse" id="collapseFour" data-bs-parent="#accordionExample">
                                            <div className="row">

                                                <div className="col-md-12">
                                                    <div className="checkout-payment-option">
                                                        <h6 className="heading-6 payment-title">Select Delivery Option</h6>

                                                        <div className="payment-option-wrapper">
                                                            {[1, 2, 3, 4].map((i) => (
                                                                <div className="single-payment-option" key={i}>
                                                                    <input type="radio" name="shipping" id={`shipping-${i}`} defaultChecked={i === 1} />
                                                                    <label htmlFor={`shipping-${i}`}>
                                                                        <img src="https://via.placeholder.com/60x32" alt="" />
                                                                        <p>Standard Shipping</p>
                                                                        <span className="price">$10.50</span>
                                                                    </label>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-md-12">
                                                    <div className="steps-form-btn button">
                                                        <button className="btn" data-bs-toggle="collapse" data-bs-target="#collapseThree">
                                                            Previous
                                                        </button>
                                                        <button className="btn btn-alt">Save & Continue</button>
                                                    </div>
                                                </div>

                                            </div>
                                        </section>
                                    </li>

                                    {/* STEP 3 */}
                                    <li>
                                        <h6 className="title collapsed" data-bs-toggle="collapse" data-bs-target="#collapsefive">
                                            Payment Info
                                        </h6>

                                        <section className="checkout-steps-form-content collapse" id="collapsefive" data-bs-parent="#accordionExample">
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="checkout-payment-form">

                                                        <div className="single-form form-default">
                                                            <label>Cardholder Name</label>
                                                            <div className="form-input form">
                                                                <input type="text" placeholder="Cardholder Name" />
                                                            </div>
                                                        </div>

                                                        <div className="single-form form-default">
                                                            <label>Card Number</label>
                                                            <div className="form-input form" style={{ position: "relative" }}>
                                                                <input type="text" placeholder="0000 0000 0000 0000" />
                                                                <img src="https://via.placeholder.com/50x30" alt="card"
                                                                    style={{ position: "absolute", right: "10px", top: "50%", transform: "translateY(-50%)" }} />
                                                            </div>
                                                        </div>

                                                        <div className="payment-card-info">
                                                            <div className="single-form form-default mm-yy">
                                                                <label>Expiration</label>
                                                                <div className="expiration d-flex">
                                                                    <div className="form-input form">
                                                                        <input type="text" placeholder="MM" />
                                                                    </div>
                                                                    <div className="form-input form">
                                                                        <input type="text" placeholder="YYYY" />
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="single-form form-default">
                                                                <label>CVC/CVV</label>
                                                                <div className="form-input form">
                                                                    <input type="text" placeholder="***" />
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="single-form form-default button">
                                                            <button className="btn">Pay Now</button>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                    </li>

                                </ul>
                            </div>
                        </div>

                        {/* RIGHT */}
                        <div className="col-lg-4">
                            <div className="checkout-sidebar">

                                <div className="checkout-sidebar-coupon">
                                    <p>Apply Coupon to get discount!</p>
                                    <div className="single-form form-default">
                                        <div className="form-input form">
                                            <input placeholder="Coupon Code" />
                                        </div>
                                        <div className="button">
                                            <button className="btn">Apply</button>
                                        </div>
                                    </div>
                                </div>

                                <div className="checkout-sidebar-price-table mt-30">
                                    <h5 className="title">Pricing Table</h5>

                                    <div className="total-price"><p>Subtotal:</p><p>$144.00</p></div>
                                    <div className="total-price"><p>Shipping:</p><p>$10.50</p></div>
                                    <div className="total-price"><p>Discount:</p><p>$10.00</p></div>

                                    <div className="total-payable"><p>Total:</p><p>$164.50</p></div>

                                    <div className="price-table-btn button">
                                        <button className="btn btn-alt">Checkout</button>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section >
        </>

    );
};

export default Checkout;