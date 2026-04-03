import { Link } from "react-router-dom";
import logo from "../../assets/images/logo/logo.jpg";

import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../../modules/customer/Cart/Slicer/cartSlice";

export const searchOptions = [
    { label: "All", value: 0 }
];

export const hotline = "+91 842 101 9184";

const MiddleHeader = () => {
    const dispatch = useDispatch();

    // ✅ get cart from redux
    const { cartItems } = useSelector((state) => state.cart);

    // ✅ safe array (VERY IMPORTANT)
    const items = Array.isArray(cartItems) ? cartItems : [];

    // ✅ calculations
    const totalItems = items.reduce(
        (acc, item) => acc + (item.quantity || 1),
        0
    );

    const totalAmount = items.reduce(
        (acc, item) => acc + item.price * (item.quantity || 1),
        0
    );

    return (
        <div className="header-middle">
            <div className="container">
                <div className="row align-items-center">

                    {/* LOGO */}
                    <div className="col-lg-3 col-md-3 col-7">
                        <Link className="navbar-brand" to="/">
                            <img src={logo} alt="Logo" />
                        </Link>
                    </div>

                    {/* SEARCH */}
                    <div className="col-lg-5 col-md-7 d-xs-none">
                        <div className="main-menu-search">
                            <div className="navbar-search search-style-5">

                                <div className="search-select">
                                    <div className="select-position">
                                        <select>
                                            {searchOptions.map((opt, i) => (
                                                <option key={i} value={opt.value}>
                                                    {opt.label}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                <div className="search-input">
                                    <input type="text" placeholder="Search" />
                                </div>

                                <div className="search-btn">
                                    <button>
                                        <i className="lni lni-search-alt"></i>
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* RIGHT SECTION */}
                    <div className="col-lg-4 col-md-2 col-5">
                        <div className="middle-right-area">

                            {/* HOTLINE */}
                            <div className="nav-hotline">
                                <i className="lni lni-phone"></i>
                                <h3>
                                    Hotline:
                                    <span>{hotline}</span>
                                </h3>
                            </div>

                            {/* CART */}
                            <div className="navbar-cart">

                                {/* Wishlist */}
                                <div className="wishlist">
                                    <a href="#">
                                        <i className="lni lni-heart"></i>
                                        <span className="total-items">0</span>
                                    </a>
                                </div>

                                {/* Cart */}
                                <div className="cart-items">
                                    <a href="#" className="main-btn">
                                        <i className="lni lni-cart"></i>
                                        <span className="total-items">{totalItems}</span>
                                    </a>

                                    <div className="shopping-item">

                                        <div className="dropdown-cart-header">
                                            <span>{totalItems} Items</span>
                                            <Link to="/cart">View Cart</Link>
                                        </div>

                                        <ul className="shopping-list">
                                            {items.length === 0 ? (
                                                <li style={{ padding: "10px" }}>Cart is empty</li>
                                            ) : (
                                                items.map((item) => (
                                                    <li key={item.id}>

                                                        {/* REMOVE BUTTON */}
                                                        <button
                                                            className="remove"
                                                            onClick={() => dispatch(removeItem(item.id))}
                                                        >
                                                            <i className="lni lni-close"></i>
                                                        </button>

                                                        {/* IMAGE */}
                                                        <div className="cart-img-head">
                                                            <Link className="cart-img" to="/product">
                                                                <img src={item.image} alt={item.name} />
                                                            </Link>
                                                        </div>

                                                        {/* CONTENT */}
                                                        <div className="content">
                                                            <h4>
                                                                <Link to="/product">{item.name}</Link>
                                                            </h4>
                                                            <p className="quantity">
                                                                {item.quantity || 1}x -{" "}
                                                                <span className="amount">
                                                                    ₹{item.price}
                                                                </span>
                                                            </p>
                                                        </div>

                                                    </li>
                                                ))
                                            )}
                                        </ul>

                                        {/* TOTAL */}
                                        <div className="bottom">
                                            <div className="total">
                                                <span>Total</span>
                                                <span className="total-amount">
                                                    ₹{totalAmount.toFixed(2)}
                                                </span>
                                            </div>

                                            <div className="button">
                                                <Link to="/checkout" className="btn animate">
                                                    Checkout
                                                </Link>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default MiddleHeader;