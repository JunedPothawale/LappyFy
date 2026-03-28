import React from "react";

const BannerSection = () => {
    const banners = [
        {
            title: "Smart Watch 2.0",
            desc: [
                "Space Gray Aluminum Case with",
                "Black/Volt Real Sport Band"
            ],
            btn: "View Details",
            link: "/product-grids",
            img: "https://placehold.co/620x340",
        },
        {
            title: "Smart Headphone",
            desc: [
                "Space Gray Aluminum Case with",
                "Black/Volt Real Sport Band"
            ],
            btn: "Shop Now",
            link: "/product-grids",
            img: "https://placehold.co/620x340",
        },
    ];

    return (
        <section className="container py-5">
            <div class="row">

                {banners.map((banner) => {
                    return <div className="col-lg-6 col-md-6 col-12 my-2">
                        <div className="single-banner" style={{
                            backgroundImage: `url(${banner.img})`
                        }}>
                            <div className="content">
                                <h2>{banner.title}</h2>
                                <p className="text-muted small">
                                    {banner.desc.map((line, index) => (
                                        <React.Fragment key={index}>
                                            {line}
                                            <br />
                                        </React.Fragment>
                                    ))}
                                </p>
                                <div className="button">
                                    <a href={banner.link} className="btn">{banner.btn}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                })}


            </div>
        </section>
    );
};

export default BannerSection;