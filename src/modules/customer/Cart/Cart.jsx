
import { useState } from "react";
import { Link } from "react-router-dom";
import Breadcrumbs from "../../../widgets/Breadcrumbs";



const Cart = () => {
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: "Canon EOS M50 Mirrorless Camera",
            image: "https://via.placeholder.com/220x200",
            type: "Mirrorless",
            color: "Black",
            price: 910,
            discount: 29,
            quantity: 1
        },
        {
            id: 2,
            name: "Apple iPhone X 256 GB Space Gray",
            image: "https://via.placeholder.com/220x200",
            memory: "256 GB",
            color: "Space Gray",
            price: 1100,
            discount: 0,
            quantity: 1
        },
        {
            id: 3,
            name: "HP LaserJet Pro Laser Printer",
            image: "https://via.placeholder.com/220x200",
            type: "Laser",
            color: "White",
            price: 550,
            discount: 0,
            quantity: 1
        }
    ]);

    // Handle quantity change
    const handleQuantityChange = (id, qty) => {
        setCartItems(items =>
            items.map(item =>
                item.id === id ? { ...item, quantity: Number(qty) } : item
            )
        );
    };

    // Remove item
    const removeItem = (id) => {
        setCartItems(items => items.filter(item => item.id !== id));
    };

    // Calculations
    const subtotal = cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );

    const discountTotal = cartItems.reduce(
        (acc, item) => acc + item.discount,
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
                    {cartItems.map(item => (
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

                                <div className="col-lg-2">
                                    <select
                                        className="form-control"
                                        value={item.quantity}
                                        onChange={(e) =>
                                            handleQuantityChange(item.id, e.target.value)
                                        }
                                    >
                                        {[1, 2, 3, 4, 5].map(q => (
                                            <option key={q} value={q}>{q}</option>
                                        ))}
                                    </select>
                                </div>

                                <div className="col-lg-2">
                                    <p>${(item.price * item.quantity).toFixed(2)}</p>
                                </div>

                                <div className="col-lg-2">
                                    <p>{item.discount ? `$${item.discount}` : "—"}</p>
                                </div>

                                <div className="col-lg-1">
                                    <button
                                        className="remove-item"
                                        onClick={() => removeItem(item.id)}
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