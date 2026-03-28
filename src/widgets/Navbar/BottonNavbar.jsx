


export const categories = [
    {
        name: "Buy", link: "/", children: [
            { name: "Laptop", link: "/" },
            { name: "Desktop", link: "/" }
        ]
    },
    { name: "Rent", link: "/" },
    { name: "Repair", link: "/" },
    { name: "Earn", link: "/" }
];

export const navMenu = [
    { name: "Home", link: "/" },
    { name: "Buy", link: "/" },
    { name: "Rent", link: "/" },
    { name: "Repair", link: "/" },
    { name: "Earn", link: "/" },
    { name: "Support", link: "/" },
    { name: "Contact Us", link: "/contact" }
];
// {
//     name: "Shop",
//     children: [
//         { name: "Shop Grid", link: "/shop/grid" },
//         { name: "Shop List", link: "/shop/list" },
//         { name: "Shop Single", link: "/shop/details" },
//         { name: "Cart", link: "/cart" },
//         { name: "Checkout", link: "/checkout" }
//     ]
// },
// {
//     name: "Blog",
//     children: [
//         { name: "Blog Grid Sidebar", link: "/blog/grid" },
//         { name: "Blog Single", link: "/blog/single" },
//         { name: "Blog Single Sidebar", link: "/blog/sidebar" }
//     ]
// },

export const socialLinks = [
    { icon: "lni-facebook-filled", link: "http://facebook.com/lappyfylaptopsnagpurstore" },
    { icon: "lni-instagram", link: "https://www.instagram.com/lappyfy_laptops_nagpur/" },
    { icon: "lni-google", link: "https://maps.app.goo.gl/VYDkZeAXNh1QHC1Z9" }
];
const Navbar = () => {
    return (
        <>
            <div className="container">
                <div className="row align-items-center">

                    {/* LEFT */}
                    <div className="col-lg-8 col-md-6 col-12">
                        <div className="nav-inner">

                            {/* CATEGORY MENU */}
                            <div className="mega-category-menu">
                                <span className="cat-button">
                                    <i className="lni lni-menu"></i>All Categories
                                </span>

                                <ul className="sub-category">
                                    {categories.map((cat, i) => (
                                        <li key={i}>
                                            <a href={cat.link}>
                                                {cat.name}
                                                {cat.children && <i className="lni lni-chevron-right"></i>}
                                            </a>

                                            {cat.children && (
                                                <ul className="inner-sub-category">
                                                    {cat.children.map((sub, j) => (
                                                        <li key={j}>
                                                            <a href={sub.link}>{sub.name}</a>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* MAIN NAV */}
                            <nav className="navbar navbar-expand-lg">
                                <button
                                    className="navbar-toggler mobile-menu-btn"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#navbarSupportedContent"
                                >
                                    <span className="toggler-icon"></span>
                                    <span className="toggler-icon"></span>
                                    <span className="toggler-icon"></span>
                                </button>

                                <div className="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
                                    <ul className="navbar-nav ms-auto">

                                        {navMenu.map((item, i) => (
                                            <li className="nav-item" key={i}>

                                                {!item.children ? (
                                                    <a href={item.link}>{item.name}</a>
                                                ) : (
                                                    <>
                                                        <a
                                                            className="dd-menu collapsed"
                                                            data-bs-toggle="collapse"
                                                            href={`#submenu-${i}`}
                                                        >
                                                            {item.name}
                                                        </a>

                                                        <ul className="sub-menu collapse" id={`submenu-${i}`}>
                                                            {item.children.map((sub, j) => (
                                                                <li key={j}>
                                                                    <a href={sub.link}>{sub.name}</a>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </>
                                                )}

                                            </li>
                                        ))}

                                    </ul>
                                </div>
                            </nav>

                        </div>
                    </div>

                    {/* RIGHT SOCIAL */}
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="nav-social">
                            <h5 className="title">Follow Us:</h5>
                            <ul>
                                {socialLinks.map((social, i) => (
                                    <li key={i}>
                                        <a href={social.link}>
                                            <i className={`lni ${social.icon}`}></i>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Navbar
