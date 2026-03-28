import React, { useEffect, useRef } from "react";


const brandsData = [
    { id: 1, image: "https://placehold.co/220x160" },
    { id: 2, image: "https://placehold.co/220x160" },
    { id: 3, image: "https://placehold.co/220x160" },
    { id: 4, image: "https://placehold.co/220x160" },
    { id: 5, image: "https://placehold.co/220x160" },
    { id: 6, image: "https://placehold.co/220x160" },
    { id: 7, image: "https://placehold.co/220x160" },
    { id: 8, image: "https://placehold.co/220x160" },
];



const Brands = () => {
    const sliderRef = useRef(null);
    useEffect(() => {
        const slider = tns({
            container: sliderRef.current,
            items: 6,
            slideBy: 1,
            autoplay: true,
            autoplayButtonOutput: false,
            controls: false,
            nav: false,
            gutter: 15,
            responsive: {
                0: { items: 2 },
                576: { items: 3 },
                768: { items: 4 },
                992: { items: 5 },
                1200: { items: 6 },
            },
        });

        return () => {
            slider.destroy();
        };
    }, []);
    return (
        <section className="py-5 bg-light">
            <div className="container">

                {/* Title */}
                <div className="row mb-4">
                    <div className="col-lg-6 offset-lg-3 text-center">
                        <h4 className="fw-semibold">Popular Brands</h4>
                    </div>
                </div>

                {/* Logos */}
                <div className="row g-3 justify-content-center" ref={sliderRef}>
                    {brandsData.map((brand) => (
                        <div
                            key={brand.id}
                            className="col-lg-2 col-md-3 col-6 d-flex justify-content-center"
                        >
                            <div className="m-3 w-100 text-center">
                                <img
                                    src={brand.image}
                                    alt="brand"
                                    className="img-fluid"
                                />
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Brands;