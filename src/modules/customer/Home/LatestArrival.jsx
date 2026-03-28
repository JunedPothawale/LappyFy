import React from "react";


const productsData = [
    {
        title: "Best Sellers",
        items: [
            {
                name: "GoPro Hero4 Silver",
                price: 287.99,
                image: "https://placehold.co/100x100",
            },
            {
                name: "Puro Sound Labs BT2200",
                price: 95.0,
                image: "https://placehold.co/100x100",
            },
            {
                name: "HP OfficeJet Pro 8710",
                price: 120.0,
                image: "https://placehold.co/100x100",
            },
        ],
    },
    {
        title: "New Arrivals",
        items: [
            {
                name: "iPhone X 256 GB Space Gray",
                price: 1150.0,
                image: "https://placehold.co/100x100",
            },
            {
                name: "Canon EOS M50 Mirrorless Camera",
                price: 950.0,
                image: "https://placehold.co/100x100",
            },
            {
                name: "Microsoft Xbox One S",
                price: 298.0,
                image: "https://placehold.co/100x100",
            },
        ],
    },
    {
        title: "Top Rated",
        items: [
            {
                name: "Samsung Gear 360 VR Camera",
                price: 68.0,
                image: "https://placehold.co/100x100",
            },
            {
                name: "Samsung Galaxy S9+ 64 GB",
                price: 840.0,
                image: "https://placehold.co/100x100",
            },
            {
                name: "Zeus Bluetooth Headphones",
                price: 28.0,
                image: "https://placehold.co/100x100",
            },
        ],
    },
];

const LatestArrival = () => {
    return (
        <section className="home-product-list section py-5">
            <div className="container">
                <div className="row">
                    {productsData.map((category, index) => (
                        <div
                            key={index}
                            className="col-lg-4 col-md-4 col-12 mb-4"
                        >
                            <h4 className="list-title border-bottom pb-2">
                                {category.title}
                            </h4>

                            {category.items.map((item, i) => (
                                <div
                                    key={i}
                                    className="d-flex align-items-center mb-3"
                                >
                                    <div className="me-3">
                                        <a href="#">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="img-fluid rounded"
                                                width="100"
                                                height="100"
                                            />
                                        </a>
                                    </div>

                                    <div>
                                        <h6 className="mb-1">
                                            <a
                                                href="#"
                                                className="text-dark text-decoration-none hover-link"
                                            >
                                                {item.name}
                                            </a>
                                        </h6>
                                        <span className="text-muted">
                                            ${item.price.toFixed(2)}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LatestArrival;