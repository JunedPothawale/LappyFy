import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Breadcrumbs from "../../../widgets/Breadcrumbs";
import {
    removeItem,
    increaseQty,
    decreaseQty
} from "../../../modules/customer/Cart/Slicer/cartSlice";

const Cart = () => {
    const dispatch = useDispatch();

    // ✅ get cart from redux
    const { cartItems, totalAmount } = useSelector((state) => state.cart);

    // ✅ safety (important)
    const items = Array.isArray(cartItems) ? cartItems : [];

    // ✅ calculations
    const subtotal = totalAmount;

    const discountTotal = items.reduce(
        (acc, item) => acc + (item.discount || 0),
        0
    );

    const total = subtotal - discountTotal;

    return (
        <>
            {/* Breadcrumbs */}
            <Breadcrumbs
                title="Cart"
                paths={[
                    { name: "Shop", link: "/shop" },
                    { name: "Cart" }
                ]}
            />

            {/* Cart */}
            <div className="shopping-cart section">
                <div className="container">

                    {/* Header */}
                    <div className="cart-list-title">
                        <div className="row">
                            <div className="col-lg-1"></div>
                            <div className="col-lg-4"><p>Product Name</p></div>
                            <div className="col-lg-2"><p>Quantity</p></div>
                            <div className="col-lg-2"><p>Subtotal</p></div>
                            <div className="col-lg-2"><p>Discount</p></div>
                            <div className="col-lg-1"><p>Remove</p></div>
                        </div>
                    </div>

                    {/* Items */}
                    {items.map(item => (
                        <div key={item.id} className="cart-single-list">
                            <div className="row align-items-center">

                                <div className="col-lg-1">
                                    <img src={item.image} alt={item.name} />
                                </div>

                                <div className="col-lg-4">
                                    <h5 className="product-name">
                                        <Link to="/product">{item.name}</Link>
                                    </h5>
                                    <p className="product-des">
                                        {item.type && <span><em>Type:</em> {item.type}</span>}
                                        {item.memory && <span><em>Memory:</em> {item.memory}</span>}
                                        <span><em>Color:</em> {item.color}</span>
                                    </p>
                                </div>

                                {/* ✅ Quantity */}
                                <div className="col-lg-2">
                                    <select
                                        className="form-control"
                                        value={item.quantity}
                                        onChange={(e) => {
                                            const newQty = Number(e.target.value);
                                            const currentQty = item.quantity;

                                            if (newQty > currentQty) {
                                                dispatch(increaseQty(item.id));
                                            } else {
                                                dispatch(decreaseQty(item.id));
                                            }
                                        }}
                                    >
                                        {[1, 2, 3, 4, 5].map(q => (
                                            <option key={q} value={q}>{q}</option>
                                        ))}
                                    </select>
                                </div>

                                {/* Subtotal */}
                                <div className="col-lg-2">
                                    <p>${(item.price * (item.quantity || 1)).toFixed(2)}</p>
                                </div>

                                {/* Discount */}
                                <div className="col-lg-2">
                                    <p>{item.discount ? `$${item.discount}` : "—"}</p>
                                </div>

                                {/* Remove */}
                                <div className="col-lg-1">
                                    <button
                                        className="remove-item"
                                        onClick={() => dispatch(removeItem(item.id))}
                                    >
                                        <i className="lni lni-close"></i>
                                    </button>
                                </div>

                            </div>
                        </div>
                    ))}

                    {/* Total */}
                    <div className="total-amount">
                        <div className="row">

                            <div className="col-lg-8">
                                <div className="coupon">
                                    <input placeholder="Enter Your Coupon" />
                                    <button className="btn">Apply Coupon</button>
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className="right">
                                    <ul>
                                        <li>Cart Subtotal <span>${subtotal.toFixed(2)}</span></li>
                                        <li>Shipping <span>Free</span></li>
                                        <li>You Save <span>${discountTotal.toFixed(2)}</span></li>
                                        <li className="last">You Pay <span>${total.toFixed(2)}</span></li>
                                    </ul>

                                    <div className="button">
                                        <Link to="/checkout" className="btn">Checkout</Link>
                                        <Link to="/shop" className="btn btn-alt">
                                            Continue Shopping
                                        </Link>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Cart;