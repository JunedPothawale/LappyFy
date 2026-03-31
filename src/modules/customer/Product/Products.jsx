import { useState, useMemo, useEffect } from "react";
import ProductGrid from "./ProductsGrid";
import ProductList from "./ProductsList";
import Breadcrumbs from "../../../widgets/Breadcrumbs";
import { useSelector } from "react-redux";
import products from "../../../shared/Data";



const Product = () => {




    const [view, setView] = useState("grid");
    // PAGINATION
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;
    // FILTER STATES
    const [search, setSearch] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [priceRange, setPriceRange] = useState(100000);
    const [selectedPrices, setSelectedPrices] = useState([]);
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [sort, setSort] = useState("popularity");

    // CATEGORY LIST
    const categories = [
        "Computers & Accessories",
        "Smartphones & Tablets",
        "TV, Video & Audio",
        "Cameras, Photo & Video",
        "Headphones",
        "Wearable Electronics",
        "Printers & Ink",
    ];
    const categoryCount = (category) => {
        return products.filter((p) => p.category === category).length;
    };

    const brands = [
        "Apple",
        "Bosh",
        "Canon Inc.",
        "Dell",
        "Hewlett-Packard",
        "Hitachi",
        "LG Electronics",
        "Panasonic",
    ];

    // PRICE CHECKBOX RANGES
    const priceOptions = [
        { label: "$50 - $100", min: 50, max: 100 },
        { label: "$100 - $500", min: 100, max: 500 },
        { label: "$500 - $1000", min: 500, max: 1000 },
        { label: "$1000 - $5000", min: 1000, max: 5000 },
    ];

    // HANDLE CHECKBOXES
    const toggleBrand = (brand) => {
        setSelectedBrands((prev) =>
            prev.includes(brand)
                ? prev.filter((b) => b !== brand)
                : [...prev, brand]
        );
    };

    const togglePrice = (range) => {
        setSelectedPrices((prev) =>
            prev.includes(range)
                ? prev.filter((r) => r !== range)
                : [...prev, range]
        );
    };

    // FILTER LOGIC (CORE)
    const filteredProducts = useMemo(() => {
        let result = [...products];

        // SEARCH
        if (search) {
            result = result.filter((p) =>
                p.name.toLowerCase().includes(search.toLowerCase())
            );
        }

        // CATEGORY
        if (selectedCategory) {
            result = result.filter(
                (p) => p.category === selectedCategory
            );
        }

        // PRICE RANGE SLIDER
        result = result.filter((p) => p.price <= priceRange);

        // PRICE CHECKBOX
        if (selectedPrices.length > 0) {
            result = result.filter((p) =>
                selectedPrices.some(
                    (r) => p.price >= r.min && p.price <= r.max
                )
            );
        }

        // BRAND
        if (selectedBrands.length > 0) {
            result = result.filter((p) =>
                selectedBrands.includes(p.brand)
            );
        }

        // SORTING
        if (sort === "low") {
            result.sort((a, b) => a.price - b.price);
        } else if (sort === "high") {
            result.sort((a, b) => b.price - a.price);
        } else if (sort === "rating") {
            result.sort((a, b) => b.rating - a.rating);
        } else if (sort === "az") {
            result.sort((a, b) => a.name.localeCompare(b.name));
        } else if (sort === "za") {
            result.sort((a, b) => b.name.localeCompare(a.name));
        }

        return result;
    }, [
        search,
        selectedCategory,
        priceRange,
        selectedPrices,
        selectedBrands,
        sort,
    ]);

    // 🔥 RESET PAGE ON FILTER CHANGE
    useEffect(() => {
        setCurrentPage(1);
    }, [search, selectedCategory, selectedBrands, selectedPrices, priceRange]);

    // PAGINATION
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

    const paginatedProducts = filteredProducts.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );


    const clearFilters = () => {
        setSearch("");
        setSelectedCategory("");
        setPriceRange(10000);
        setSelectedPrices([]);
        setSelectedBrands([]);
        setSort("popularity");
    };

    return (

        <>
            <Breadcrumbs title="Products" paths={[{ name: "Products" }]} />
            <section className="product-grids section">
                <div className="container">
                    <div className="row">

                        {/* ================= SIDEBAR ================= */}
                        <div className="col-lg-3 col-12">
                            <div className="product-sidebar">
                                {/* Search */}
                                <div className="single-widget search">
                                    <h3>Search Product</h3>

                                    <form onSubmit={(e) => e.preventDefault()}>
                                        <input
                                            type="text"
                                            placeholder="Search Here..."
                                            value={search}
                                            onChange={(e) => setSearch(e.target.value)}
                                        />

                                        <button type="submit">
                                            <i className="lni lni-search-alt"></i>
                                        </button>
                                    </form>
                                </div>

                                {/* CATEGORY */}
                                <div className="single-widget">
                                    <h3>All Categories</h3>

                                    <ul className="list">
                                        {categories.map((cat) => (
                                            <li key={cat}>
                                                <a
                                                    href="#"
                                                    className={selectedCategory === cat ? "active" : ""}
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        setSelectedCategory(cat);
                                                    }}
                                                >
                                                    {cat}
                                                </a>

                                                <span>({categoryCount(cat)})</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* PRICE RANGE */}
                                <div className="single-widget range">
                                    <h3>Price Range</h3>

                                    <input
                                        type="range"
                                        className="form-range custom-range"
                                        min="0"
                                        max="10000"
                                        step="100"
                                        value={priceRange}
                                        onChange={(e) => setPriceRange(Number(e.target.value))}
                                    />

                                    <div className="range-inner">
                                        <label>$</label>
                                        <input type="text" value={priceRange} readOnly />
                                    </div>
                                </div>

                                {/* PRICE FILTER */}
                                <div className="single-widget condition">
                                    <h3>Filter by Price</h3>

                                    {priceOptions.map((opt, index) => (
                                        <div className="form-check" key={index}>
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                id={`price-${index}`}
                                                onChange={() => togglePrice(opt)}
                                            />

                                            <label
                                                className="form-check-label"
                                                htmlFor={`price-${index}`}
                                            >
                                                {opt.label}
                                            </label>
                                        </div>
                                    ))}
                                </div>

                                {/* BRAND FILTER */}
                                <div className="single-widget condition">
                                    <h3>Filter by Brand</h3>

                                    {brands.map((brand, index) => (
                                        <div className="form-check" key={index}>
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                id={`brand-${index}`}
                                                checked={selectedBrands.includes(brand)}
                                                onChange={() => toggleBrand(brand)}
                                            />

                                            <label
                                                className="form-check-label"
                                                htmlFor={`brand-${index}`}
                                            >
                                                {brand}
                                            </label>
                                        </div>
                                    ))}
                                </div>

                            </div>
                        </div>

                        {/* ================= MAIN ================= */}
                        <div className="col-lg-9 col-12">

                            {/* TOP BAR */}
                            <div className="product-grid-topbar">
                                <div className="row align-items-center">

                                    <div className="col-lg-7 col-md-8 col-12">
                                        <div className="product-sorting">

                                            <label>Sort by:</label>
                                            <select
                                                className="form-control"
                                                onChange={(e) => setSort(e.target.value)}
                                            >
                                                <option value="popularity">Popularity</option>
                                                <option value="low">Low - High Price</option>
                                                <option value="high">High - Low Price</option>
                                                <option value="rating">Average Rating</option>
                                                <option value="az">A - Z</option>
                                                <option value="za">Z - A</option>
                                            </select>

                                            <h3 className="total-show-product">
                                                Showing: {filteredProducts.length} items
                                            </h3>

                                        </div>
                                    </div>

                                    {/* GRID / LIST */}
                                    <div className="col-lg-5 col-md-4 col-12">
                                        <div className="nav nav-tabs">
                                            <button className="clear-btn mx-2 bg-danger text-white" onClick={clearFilters}>
                                                Clear All Filters
                                            </button>
                                            <button
                                                className={`nav-link ${view === "grid" ? "active" : ""}`}
                                                onClick={() => setView("grid")}
                                            >
                                                <i className="lni lni-grid-alt"></i>
                                            </button>

                                            <button
                                                className={`nav-link ${view === "list" ? "active" : ""}`}
                                                onClick={() => setView("list")}
                                            >
                                                <i className="lni lni-list"></i>
                                            </button>



                                        </div>
                                    </div>

                                </div>
                            </div>

                            {/* VIEW */}
                            {view === "grid" ? (
                                <ProductGrid products={filteredProducts} />
                            ) : (
                                <ProductList products={filteredProducts} />
                            )}


                            {/* PAGINATION */}
                            <div className="pagination left mt-4">
                                <ul className="pagination-list">

                                    {currentPage > 1 && (
                                        <li>
                                            <a href="#" onClick={(e) => {
                                                e.preventDefault();
                                                setCurrentPage(currentPage - 1);
                                            }}>
                                                ‹
                                            </a>
                                        </li>
                                    )}

                                    {[...Array(totalPages)].map((_, i) => (
                                        <li key={i} className={currentPage === i + 1 ? "active" : ""}>
                                            <a href="#" onClick={(e) => {
                                                e.preventDefault();
                                                setCurrentPage(i + 1);
                                            }}>
                                                {i + 1}
                                            </a>
                                        </li>
                                    ))}

                                    {currentPage < totalPages && (
                                        <li>
                                            <a href="#" onClick={(e) => {
                                                e.preventDefault();
                                                setCurrentPage(currentPage + 1);
                                            }}>
                                                ›
                                            </a>
                                        </li>
                                    )}

                                </ul>
                            </div>


                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Product;