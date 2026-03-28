import { Link } from "react-router-dom";
import logo from '../../assets/images/logo/logo.jpg'

export const searchOptions = [
    { label: "All", value: 0 },
    { label: "Option 01", value: 1 },
    { label: "Option 02", value: 2 },
    { label: "Option 03", value: 3 },
    { label: "Option 04", value: 4 },
    { label: "Option 05", value: 5 }
];

export const cartItems = [
    {
        id: 1,
        name: "Apple Watch Series 6",
        price: 99,
        quantity: 1,
        image: "/src/assets/images/header/cart-items/item1.jpg",
        link: "/product/apple-watch"
    },
    {
        id: 2,
        name: "Wi-Fi Smart Camera",
        price: 35,
        quantity: 1,
        image: "/src/assets/images/header/cart-items/item2.jpg",
        link: "/product/camera"
    }
];

export const hotline = "+91 842 101 8184";



const MiddleHeader = () => {
    const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

    const totalAmount = cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
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
                                            {cartItems.map((item) => (
                                                <li key={item.id}>

                                                    <button className="remove">
                                                        <i className="lni lni-close"></i>
                                                    </button>

                                                    <div className="cart-img-head">
                                                        <Link className="cart-img" to={item.link}>
                                                            <img src={item.image} alt={item.name} />
                                                        </Link>
                                                    </div>

                                                    <div className="content">
                                                        <h4>
                                                            <Link to={item.link}>{item.name}</Link>
                                                        </h4>
                                                        <p className="quantity">
                                                            {item.quantity}x -{" "}
                                                            <span className="amount">
                                                                ${item.price.toFixed(2)}
                                                            </span>
                                                        </p>
                                                    </div>

                                                </li>
                                            ))}
                                        </ul>

                                        <div className="bottom">
                                            <div className="total">
                                                <span>Total</span>
                                                <span className="total-amount">
                                                    ${totalAmount.toFixed(2)}
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

export default MiddleHeader
