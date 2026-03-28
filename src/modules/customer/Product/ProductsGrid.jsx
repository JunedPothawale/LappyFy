const ProductGrid = ({ products }) => {
    return (
        <div className="row">
            {products.map((p) => (
                <div key={p.id} className="col-lg-4 col-md-6 col-12">
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

                            {/* NEW TAG */}
                            {p.isNew && <span className="new-tag">New</span>}

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
                                <a href="#">{p.name}</a>
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
    );
};

export default ProductGrid;