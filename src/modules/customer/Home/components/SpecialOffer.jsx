import React, { useEffect, useState } from "react";



const specialProducts = [
    {
        id: 1,
        category: "Camera",
        title: "WiFi Security Camera",
        price: 399,
        rating: 5,
        image: "https://placehold.co/335x335"
    },
    {
        id: 2,
        category: "Laptop",
        title: "Apple MacBook Air",
        price: 899,
        rating: 5,
        image: "https://placehold.co/335x335"
    },
    {
        id: 3,
        category: "Speaker",
        title: "Bluetooth Speaker",
        price: 70,
        rating: 4,
        image: "https://placehold.co/335x335"
    }
];

const featuredProduct = {
    title: "Bluetooth Headphone",
    price: 200,
    oldPrice: 400,
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: "https://placehold.co/510x600",
    endDate: "2026-03-31T16:30:00+05:30"
};

const banner = {
    title: "Samsung Notebook 9",
    desc: "Lorem ipsum dolor sit amet, eiusmod tempor incididunt ut labore.",
    price: 590,
    image: "https://placehold.co/730x310"
};

const SpecialOffer = () => {
    const calculateTimeLeft = () => {
        const diff = new Date(featuredProduct.endDate) - new Date();

        if (diff <= 0) return null;

        return {
            days: Math.floor(diff / (1000 * 60 * 60 * 24)),
            hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((diff / (1000 * 60)) % 60),
            seconds: Math.floor((diff / 1000) % 60),
        };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <section className="py-5 bg-light">
            <div className="container">

                {/* SECTION TITLE */}
                <div className="text-center mb-5">
                    <h2 className="fw-bold">Special Offer</h2>
                    <div className="mx-auto bg-primary mt-2" style={{ width: 60, height: 3 }}></div>
                    <p className="text-muted mt-3">
                        There are many variations of passages of Lorem Ipsum available
                    </p>
                </div>

                <div className="row g-4">

                    {/* LEFT PRODUCTS */}
                    <div className="col-lg-8">
                        <div className="row g-4">

                            {specialProducts.map((p) => (
                                <div key={p.id} className="col-md-4">
                                    < div className="single-product" >

                                        {/* IMAGE */}
                                        < div className="product-image" >
                                            <img src={p.image} alt={p.name} />

                                            {/* SALE TAG */}
                                            {
                                                p.oldPrice && (
                                                    <span className="sale-tag">
                                                        -{Math.round(((p.oldPrice - p.price) / p.oldPrice) * 100)}%
                                                    </span>
                                                )
                                            }

                                            {/* TAG */}
                                            {
                                                p.tag && (
                                                    <span
                                                        className={`sale-tag ${p.tag === "New" ? "bg-primary" : "bg-danger"
                                                            }`}
                                                    >
                                                        {p.tag}
                                                    </span>
                                                )
                                            }

                                            {/* HOVER BUTTON */}
                                            < div className="button" >
                                                <a href="#" className="btn">
                                                    <i className="lni lni-cart"></i> Add to Cart
                                                </a>
                                            </div>
                                        </div>

                                        {/* INFO */}
                                        <div className="product-info">
                                            <span className="category">{p.category}</span>

                                            <h4 className="title">
                                                <a href="#">{p.title}</a>
                                            </h4>

                                            {/* RATING */}
                                            <ul className="review">
                                                {[...Array(5)].map((_, i) => (
                                                    <li key={i}>
                                                        <i
                                                            className={
                                                                i < p.rating
                                                                    ? "lni lni-star-filled"
                                                                    : "lni lni-star"
                                                            }
                                                        ></i>
                                                    </li>
                                                ))}
                                                <li>
                                                    <span>{p.rating}.0 Review(s)</span>
                                                </li>
                                            </ul>

                                            {/* PRICE */}
                                            <div className="price">
                                                <span>${p.price.toFixed(2)}</span>
                                                {p.oldPrice && (
                                                    <span className="discount-price">
                                                        ${p.oldPrice.toFixed(2)}
                                                    </span>
                                                )}
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            ))}

                            {/* BIG BANNER */}
                            <div className="col-12">
                                <div
                                    className="rounded shadow-sm p-5 d-flex align-items-center justify-content-end"
                                    style={{
                                        backgroundImage: `url(${banner.image})`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                        minHeight: "260px"
                                    }}
                                >
                                    {/* RIGHT CONTENT */}
                                    <div className="text-end" style={{ maxWidth: "350px" }}>

                                        <h4 className="fw-bold mb-2">{banner.title}</h4>

                                        <p className="text-muted small mb-2">
                                            {banner.desc}
                                        </p>

                                        <h5 className="fw-bold mb-3">${banner.price}.00</h5>

                                        <button className="btn btn-primary px-4">
                                            Shop Now
                                        </button>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div >
                    {/* Right Card */}
                    <div className="col-lg-4 col-md-12 col-12">
                        <div className="card border-0 shadow-sm h-100 p-2">

                            {/* IMAGE */}
                            <div className="position-relative">
                                <img
                                    src={featuredProduct.image}
                                    alt={featuredProduct.title}
                                    className="img-fluid w-100 rounded-top"
                                />

                                <span className="badge bg-danger position-absolute top-0 end-0 m-3 px-3 py-2 rounded-pill">
                                    -{Math.round(((featuredProduct.oldPrice - featuredProduct.price) / featuredProduct.oldPrice) * 100)}%
                                </span>
                            </div>

                            {/* CONTENT */}
                            <div className="card-body">

                                <h5 className="fw-semibold mb-2">
                                    {featuredProduct.title}
                                </h5>

                                <div className="mb-2 text-warning small">
                                    ★★★★★ <span className="text-muted ms-1">5.0 Review(s)</span>
                                </div>

                                <div className="mb-2">
                                    <span className="text-primary fw-bold fs-5">
                                        ${featuredProduct.price.toFixed(2)}
                                    </span>
                                    <span className="text-muted text-decoration-line-through ms-2">
                                        ${featuredProduct.oldPrice.toFixed(2)}
                                    </span>
                                </div>

                                <p className="text-muted small mb-3">
                                    {featuredProduct.desc}
                                </p>

                                {/* 🔥 COUNTDOWN OR EXPIRED */}
                                {timeLeft ? (
                                    <div className="border rounded p-3 d-flex justify-content-between text-center mb-3">
                                        <div>
                                            <div className="fw-bold">{timeLeft.days}</div>
                                            <small className="text-muted">Days</small>
                                        </div>
                                        <div>
                                            <div className="fw-bold">{timeLeft.hours}</div>
                                            <small className="text-muted">Hours</small>
                                        </div>
                                        <div>
                                            <div className="fw-bold">{timeLeft.minutes}</div>
                                            <small className="text-muted">Minutes</small>
                                        </div>
                                        <div>
                                            <div className="fw-bold">{timeLeft.seconds}</div>
                                            <small className="text-muted">Seconds</small>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="bg-danger text-white py-5 px-4 rounded text-center mt-3">
                                        <h3 className="fw-bold mb-0">
                                            We are sorry,<br />
                                            Event ended !
                                        </h3>
                                    </div>
                                )}

                            </div>
                        </div>
                    </div>

                </div >
            </div >
        </section >
    );
};

export default SpecialOffer;