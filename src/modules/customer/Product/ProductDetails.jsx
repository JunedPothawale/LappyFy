import React, { useState } from "react";

const ProductDetails = () => {
    const images = [
        "https://placehold.co/1000x670",
        "https://placehold.co/1000x670",
        "https://placehold.co/1000x670",
        "https://placehold.co/1000x670",
        "https://placehold.co/1000x670",
    ];

    const [current, setCurrent] = useState(images[0]);

    return (
        <section className="item-details section">
            <div className="container">

                <div className="top-area">
                    <div className="row align-items-center">

                        {/* LEFT */}
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="product-images">
                                <main id="gallery">

                                    <div className="main-img">
                                        <img src={current} id="current" alt="" />
                                    </div>

                                    <div className="images">
                                        {images.map((img, i) => (
                                            <img
                                                key={i}
                                                src={img}
                                                className="img"
                                                alt=""
                                                onClick={() => setCurrent(img)}
                                            />
                                        ))}
                                    </div>

                                </main>
                            </div>
                        </div>

                        {/* RIGHT */}
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="product-info">

                                <h2 className="title">GoPro Karma Camera Drone</h2>

                                <p className="category">
                                    <i className="lni lni-tag"></i> Drones:
                                    <a href="#">Action cameras</a>
                                </p>

                                <h3 className="price">
                                    $850 <span>$945</span>
                                </h3>

                                <p className="info-text">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </p>

                                <div className="row">

                                    {/* COLOR */}
                                    <div className="col-lg-4 col-md-4 col-12">
                                        <div className="form-group color-option">
                                            <label className="title-label">Choose color</label>

                                            <div className="single-checkbox checkbox-style-1">
                                                <input type="checkbox" id="c1" />
                                                <label htmlFor="c1"><span></span></label>
                                            </div>

                                            <div className="single-checkbox checkbox-style-2">
                                                <input type="checkbox" id="c2" />
                                                <label htmlFor="c2"><span></span></label>
                                            </div>

                                            <div className="single-checkbox checkbox-style-3">
                                                <input type="checkbox" id="c3" />
                                                <label htmlFor="c3"><span></span></label>
                                            </div>

                                            <div className="single-checkbox checkbox-style-4">
                                                <input type="checkbox" id="c4" />
                                                <label htmlFor="c4"><span></span></label>
                                            </div>
                                        </div>
                                    </div>

                                    {/* BATTERY */}
                                    <div className="col-lg-4 col-md-4 col-12">
                                        <div className="form-group">
                                            <label>Battery capacity</label>
                                            <select className="form-control">
                                                <option>5100 mAh</option>
                                                <option>6200 mAh</option>
                                                <option>8000 mAh</option>
                                            </select>
                                        </div>
                                    </div>

                                    {/* QUANTITY */}
                                    <div className="col-lg-4 col-md-4 col-12">
                                        <div className="form-group quantity">
                                            <label>Quantity</label>
                                            <select className="form-control">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </select>
                                        </div>
                                    </div>

                                </div>

                                {/* BUTTONS */}
                                <div className="bottom-content">
                                    <div className="row align-items-end">

                                        <div className="col-lg-4 col-md-4 col-12">
                                            <div className="button cart-button">
                                                <button className="btn" style={{ width: "100%" }}>
                                                    Add to Cart
                                                </button>
                                            </div>
                                        </div>

                                        <div className="col-lg-4 col-md-4 col-12">
                                            <div className="wish-button">
                                                <button className="btn">
                                                    <i className="lni lni-reload"></i> Compare
                                                </button>
                                            </div>
                                        </div>

                                        <div className="col-lg-4 col-md-4 col-12">
                                            <div className="wish-button">
                                                <button className="btn">
                                                    <i className="lni lni-heart"></i> To Wishlist
                                                </button>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>

                {/* DETAILS */}
                <div className="product-details-info">
                    <div className="single-block">
                        <div className="row">

                            <div className="col-lg-6 col-12">
                                <div className="info-body custom-responsive-margin">
                                    <h4>Details</h4>
                                    <p>Lorem ipsum dolor sit amet...</p>

                                    <h4>Features</h4>
                                    <ul className="features">
                                        <li>Capture 4K30 Video and 12MP Photos</li>
                                        <li>Game-Style Controller</li>
                                        <li>View Live Camera Feed</li>
                                        <li>Full Control</li>
                                        <li>Use App</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-6 col-12">
                                <div className="info-body">
                                    <h4>Specifications</h4>
                                    <ul className="normal-list">
                                        <li><span>Weight:</span> 1006g</li>
                                        <li><span>Maximum Speed:</span> 35 mph</li>
                                        <li><span>Maximum Distance:</span> 3000m</li>
                                        <li><span>Operating Frequency:</span> 2.4GHz</li>
                                    </ul>

                                    <h4>Shipping Options:</h4>
                                    <ul className="normal-list">
                                        <li><span>Courier:</span> $22.50</li>
                                        <li><span>Local:</span> $10.00</li>
                                        <li><span>UPS:</span> $18.00</li>
                                        <li><span>Global:</span> $25.00</li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* REVIEWS */}
                    <div className="row">
                        <div className="col-lg-4 col-12">
                            <div className="single-block give-review">
                                <h4>4.5 (Overall)</h4>
                                <ul>
                                    <li>
                                        <span>5 stars - 38</span>
                                        <i className="lni lni-star-filled"></i>
                                        <i className="lni lni-star-filled"></i>
                                        <i className="lni lni-star-filled"></i>
                                        <i className="lni lni-star-filled"></i>
                                        <i className="lni lni-star-filled"></i>
                                    </li>
                                    <li>
                                        <span>4 stars - 10</span>
                                        <i className="lni lni-star-filled"></i>
                                        <i className="lni lni-star-filled"></i>
                                        <i className="lni lni-star-filled"></i>
                                        <i className="lni lni-star-filled"></i>
                                        <i className="lni lni-star"></i>
                                    </li>
                                    <li>
                                        <span>3 stars - 3</span>
                                        <i className="lni lni-star-filled"></i>
                                        <i className="lni lni-star-filled"></i>
                                        <i className="lni lni-star-filled"></i>
                                        <i className="lni lni-star"></i>
                                        <i className="lni lni-star"></i>
                                    </li>
                                    <li>
                                        <span>2 stars - 1</span>
                                        <i className="lni lni-star-filled"></i>
                                        <i className="lni lni-star-filled"></i>
                                        <i className="lni lni-star"></i>
                                        <i className="lni lni-star"></i>
                                        <i className="lni lni-star"></i>
                                    </li>
                                    <li>
                                        <span>1 star - 0</span>
                                        <i className="lni lni-star-filled"></i>
                                        <i className="lni lni-star"></i>
                                        <i className="lni lni-star"></i>
                                        <i className="lni lni-star"></i>
                                        <i className="lni lni-star"></i>
                                    </li>
                                </ul>
                                <button
                                    className="btn review-btn"
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal"
                                >
                                    Leave a Review
                                </button>
                            </div>
                        </div>

                        <div className="col-lg-8 col-12">
                            <div className="single-block">
                                <div className="reviews">
                                    <h4 className="title">Latest Reviews</h4>

                                    {[1, 2, 3].map((i) => (
                                        <div className="single-review" key={i}>
                                            <img src="https://placehold.co/100x100" alt="" />
                                            <div className="review-info">
                                                <h4>
                                                    Awesome quality for the price
                                                    <span>User</span>
                                                </h4>

                                                <ul className="stars">
                                                    <li><i className="lni lni-star-filled"></i></li>
                                                    <li><i className="lni lni-star-filled"></i></li>
                                                    <li><i className="lni lni-star-filled"></i></li>
                                                    <li><i className="lni lni-star-filled"></i></li>
                                                    <li><i className="lni lni-star-filled"></i></li>
                                                </ul>

                                                <p>Lorem ipsum dolor sit amet...</p>
                                            </div>
                                        </div>
                                    ))}

                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default ProductDetails;