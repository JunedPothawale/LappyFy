import React from "react";

const TrendingProduct = () => {
    const products = [
        {
            id: 1,
            title: "Xiaomi Mi Band 5",
            category: "Watches",
            price: 199,
            oldPrice: null,
            rating: 4,
            reviews: 4,
            image: "https://placehold.co/335x335",
            tag: null,
        },
        {
            id: 2,
            title: "Big Power Sound Speaker",
            category: "Speaker",
            price: 275,
            oldPrice: 300,
            rating: 5,
            reviews: 5,
            image: "https://placehold.co/335x335",
            tag: "-25%",
        },
        {
            id: 3,
            title: "WiFi Security Camera",
            category: "Camera",
            price: 399,
            oldPrice: null,
            rating: 5,
            reviews: 5,
            image: "https://placehold.co/335x335",
            tag: null,
        },
        {
            id: 4,
            title: "iphone 6x plus",
            category: "Phones",
            price: 400,
            oldPrice: null,
            rating: 5,
            reviews: 5,
            image: "https://placehold.co/335x335",
            tag: "New",
        },
        {
            id: 5,
            title: "Wireless Headphones",
            category: "Headphones",
            price: 350,
            oldPrice: null,
            rating: 5,
            reviews: 5,
            image: "https://placehold.co/335x335",
            tag: "New",
        },
        {
            id: 6,
            title: "Mini Bluetooth Speaker",
            category: "Speaker",
            price: 70,
            oldPrice: null,
            rating: 4,
            reviews: 4,
            image: "https://placehold.co/335x335",
            tag: null,
        },
        {
            id: 7,
            title: "PX7 Wireless Headphones",
            category: "Headphones",
            price: 100,
            oldPrice: 200,
            rating: 4,
            reviews: 4,
            image: "https://placehold.co/335x335",
            tag: "-50%",
        },
        {
            id: 8,
            title: "Apple MacBook Air",
            category: "Laptop",
            price: 899,
            oldPrice: null,
            rating: 5,
            reviews: 5,
            image: "https://placehold.co/335x335",
            tag: null,
        },
    ];

    const renderStars = (rating) => {
        return [...Array(5)].map((_, i) => (
            <i
                key={i}
                className={`lni ${i < rating ? "lni-star-filled text-warning" : "lni-star text-muted"
                    }`}
            ></i>
        ));
    };

    return (
        <section className="py-5 bg-light">
            <div className="container">

                {/* TITLE */}
                <div className="text-center mb-5">

                    <h2 className="fw-bold mb-3" style={{ fontSize: "36px" }}>
                        Trending Product
                    </h2>

                    <div
                        className="mx-auto mb-3"
                        style={{
                            width: "60px",
                            height: "3px",
                            backgroundColor: "#0d6efd",
                            borderRadius: "2px"
                        }}
                    ></div>

                    <p
                        className="text-muted mx-auto"
                        style={{
                            maxWidth: "600px",
                            fontSize: "15px",
                            lineHeight: "1.8"
                        }}
                    >
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
                    </p>

                </div>

                {/* PRODUCTS */}
                <div className="row">
                    {products.map((p) => (
                        <div key={p.id} className="col-lg-3 col-md-6 col-12">
                            <div className="single-product">

                                {/* IMAGE */}
                                <div className="product-image">
                                    <img src={p.image} alt={p.name} />

                                    {/* SALE TAG */}
                                    {p.oldPrice && (
                                        <span className="sale-tag">
                                            -{Math.round(((p.oldPrice - p.price) / p.oldPrice) * 100)}%
                                        </span>
                                    )}

                                    {/* TAG */}
                                    {p.tag && (
                                        <span
                                            className={`sale-tag ${p.tag === "New" ? "bg-primary" : "bg-danger"
                                                }`}
                                        >
                                            {p.tag}
                                        </span>
                                    )}

                                    {/* HOVER BUTTON */}
                                    <div className="button">
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
                </div>

            </div>
        </section>
    );
};

export default TrendingProduct;