import React, { useEffect } from "react";

const HeroSection = () => {

    const slides = [
        {
            subtitle: "No restocking fee ($35 savings)",
            title: "M75 Sport Watch",
            desc: "Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.",
            priceLabel: "Now Only",
            price: "$320.99",
            bg: "https://placehold.co/800x500",
        },
        {
            subtitle: "Big Sale Offer",
            title: "CCTV Camera Deal",
            desc: "Lorem ipsum dolor sit amet, consectetur elit.",
            priceLabel: "Combo Only:",
            price: "$590.00",
            bg: "https://placehold.co/800x500",
        },
    ];

    useEffect(() => {
        const slider = window.tns({
            container: ".hero-slider",
            items: 1,
            slideBy: "page",
            autoplay: true,
            autoplayButtonOutput: false,
            controls: true,
            nav: false,

            controlsText: [
                '<i class="lni lni-chevron-left"></i>',
                '<i class="lni lni-chevron-right"></i>'
            ]
        });
        controlsText: [
            '<i class="lni lni-chevron-left"></i>',
            '<i class="lni lni-chevron-right"></i>'
        ]

        return () => slider && slider.destroy();
    }, []);

    return (
        <section className="hero-area">
            <div className="container">
                <div className="row">

                    {/* LEFT SLIDER */}
                    <div className="col-lg-8 col-12 custom-padding-right">
                        <div className="slider-head">
                            <div className="hero-slider">

                                {slides.map((slide, i) => (
                                    <div
                                        key={i}
                                        className="single-slider"
                                        style={{ backgroundImage: `url(${slide.bg})` }}
                                    >
                                        <div className="content">

                                            {/* FIXED TEXT STRUCTURE */}
                                            <h2>
                                                <span>{slide.subtitle}</span>
                                                <br />
                                                {slide.title}
                                            </h2>

                                            <p>{slide.desc}</p>

                                            <h3>
                                                <span>{slide.priceLabel}</span> {slide.price}
                                            </h3>

                                            <div className="button">
                                                <a href="/product" className="btn">
                                                    Shop Now
                                                </a>
                                            </div>

                                        </div>
                                    </div>
                                ))}

                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="col-lg-4 col-12">
                        <div className="row">

                            {/* TOP BANNER */}
                            <div className="col-lg-12 col-md-6 col-12 md-custom-padding">
                                <div
                                    className="hero-small-banner"
                                    style={{ backgroundImage: "url(https://placehold.co/370x250)" }}
                                >
                                    <div className="content">
                                        <h2>
                                            <span>New line required</span>
                                            <br />
                                            iPhone 12 Pro Max
                                        </h2>
                                        <h3>$259.99</h3>
                                    </div>
                                </div>
                            </div>

                            {/* BOTTOM BANNER */}
                            <div className="col-lg-12 col-md-6 col-12">
                                <div className="hero-small-banner style2">
                                    <div className="content">
                                        <h2>Weekly Sale!</h2>
                                        <p>
                                            Saving up to 50% off all online store items this week.
                                        </p>
                                        <div className="button">
                                            <a className="btn" href="/product">
                                                Shop Now
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HeroSection;