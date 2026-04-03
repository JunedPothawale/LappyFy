import { useState, useRef } from "react";
import { addItem } from "../Cart/Slicer/cartSlice";
import products from "../../../shared/Data";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import ImageZoom from "../../../shared/components/ImageZoom";
import { handleShare } from "../../../shared/utils/shareProduct";


const ProductDetails = () => {





    const dispatch = useDispatch()


    const { id } = useParams()
    const product = Array.isArray(products)
        ? products.find((p) => p.id === Number(id))
        : null;

    const images = product.images || [
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



                                    <div className="main-img" >
                                        <ImageZoom src={current} id="current" alt="" />
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
                                <h2 className="title fs-1">{product.name}</h2>
                                <p className="category">
                                    <i className="lni lni-tag"></i>
                                    Brand:
                                    <a className="fs-6">{product.brand}</a>
                                </p>

                                <div className="price-section">
                                    {/* Discount + Price */}
                                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>

                                        {/* Discount % */}
                                        {product.oldPrice && (
                                            <span style={{ color: "red", fontSize: "15px", fontWeight: "600" }}>
                                                -{Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}%
                                            </span>
                                        )}

                                        {/* Current Price */}
                                        <span className="fs-2" style={{ color: "black", fontSize: "", fontWeight: "700" }}>
                                            ₹{product.price}
                                        </span>
                                    </div>

                                    {/* MRP */}
                                    {product.oldPrice && (
                                        <p style={{ color: "#666", fontSize: "14px" }}>
                                            M.R.P.:{" "}
                                            <span style={{ textDecoration: "line-through" }}>
                                                ₹{product.oldPrice}
                                            </span>
                                        </p>
                                    )}

                                    {/* Tax text */}
                                    <p style={{ fontSize: "14px", color: "#444" }}>
                                        Inclusive of all taxes
                                    </p>

                                </div>

                                <div className="about-item">
                                    <p className="text-dark fs-5 my-3">
                                        About This Item
                                    </p>
                                    <p className="info-text">
                                        {product.discription}
                                    </p>
                                </div>

                                <div className="row">
                                    <div className="col-lg-4 col-md-4 col-12">
                                        {/* <div className="col-lg-4 col-md-4 col-12">
                                        <div className="form-group">
                                            <label>Battery capacity</label>
                                            <select className="form-control">
                                                <option>5100 mAh</option>
                                                <option>6200 mAh</option>
                                                <option>8000 mAh</option>
                                            </select>
                                        </div>
                                    </div> */}
                                    </div>
                                </div>







                                {/* BUTTONS */}
                                <div className="bottom-content">
                                    <div className="row align-items-end">

                                        <div className="col-lg-4 col-md-4 col-12">
                                            <div className="button cart-button">
                                                <button onClick={() => dispatch(addItem(product))} className="btn" style={{ width: "100%" }}>
                                                    Add to Cart
                                                </button>
                                            </div>
                                        </div>

                                        <div className="col-lg-4 col-md-4 col-12">
                                            <div className="wish-button">
                                                <button className="btn" onClick={() => handleShare(product)}>
                                                    <i className="lni lni-share"></i> Share to Friend
                                                </button>
                                            </div>
                                        </div>

                                        {/* <div className="col-lg-4 col-md-4 col-12">
                                            <div className="wish-button">
                                                <button className="btn">
                                                    <i className="lni lni-heart"></i> To Wishlist
                                                </button>
                                            </div>
                                        </div> */}

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
        </section >
    );
};

export default ProductDetails;