import { useDispatch } from "react-redux";
import { addItem } from "../Cart/Slicer/cartSlice";
import { Link } from "react-router-dom";

const ProductList = ({ products }) => {
    const dispatch = useDispatch()

    return (
        <div className="row">
            {products.map((p) => (
                <div key={p.id} className="col-lg-12 col-md-12 col-12">
                    <div className="single-product">
                        <div className="row align-items-center">

                            {/* IMAGE SECTION */}
                            <div className="col-lg-4 col-md-4 col-12">
                                <div className="product-image">
                                    <img src={p.image} alt={p.name} />

                                    {/* SALE TAG */}
                                    {p.oldPrice && (
                                        <span className="sale-tag">
                                            -{Math.round(
                                                ((p.oldPrice - p.price) / p.oldPrice) * 100
                                            )}%
                                        </span>
                                    )}

                                    {/* NEW TAG */}
                                    {p.isNew && <span className="new-tag">New</span>}

                                    {/* HOVER BUTTON */}
                                    <div className="button">
                                        <a onClick={() => dispatch(addItem(p))} className="btn">
                                            <i className="lni lni-cart"></i> Add to Cart
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* INFO SECTION */}
                            <div className="col-lg-8 col-md-8 col-12">
                                <Link to={`/product-details/${p.name}/${p.id}`} className="product-info">

                                    <span className="category">{p.category}</span>

                                    <h4 className="title">
                                        <p>{p.name}</p>
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

                                </Link>
                            </div>

                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductList;