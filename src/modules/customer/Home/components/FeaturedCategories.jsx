import React from "react";

const FeaturedCategories = () => {

    const categories = [
        {
            title: "TV & Audios",
            items: ["Smart Television", "QLED TV", "Audios", "Headphones", "View All"],
            image: "https://placehold.co/180x180",
        },
        {
            title: "Desktop & Laptop",
            items: ["Smart Television", "QLED TV", "Audios", "Headphones", "View All"],
            image: "https://placehold.co/180x180",
        },
        {
            title: "Cctv Camera",
            items: ["Smart Television", "QLED TV", "Audios", "Headphones", "View All"],
            image: "https://placehold.co/180x180",
        },
        {
            title: "Dslr Camera",
            items: ["Smart Television", "QLED TV", "Audios", "Headphones", "View All"],
            image: "https://placehold.co/180x180",
        },
        {
            title: "Smart Phones",
            items: ["Smart Television", "QLED TV", "Audios", "Headphones", "View All"],
            image: "https://placehold.co/180x180",
        },
        {
            title: "Game Console",
            items: ["Smart Television", "QLED TV", "Audios", "Headphones", "View All"],
            image: "https://placehold.co/180x180",
        },
    ];

    return (
        <section className="featured-categories section">
            <div className="container">

                {/* TITLE */}
                <div className="row">
                    <div className="col-12">
                        <div className="section-title text-center">
                            <h2>Featured Categories</h2>
                            <p>
                                There are many variations of passages of Lorem Ipsum available,
                                but the majority have suffered alteration in some form.
                            </p>
                        </div>
                    </div>
                </div>

                {/* GRID */}
                <div className="row">
                    {categories.map((cat, index) => (
                        <div className="col-lg-4 col-md-6 col-12" key={index}>
                            <div className="single-category d-flex align-items-center justify-content-between">

                                {/* LEFT TEXT */}
                                <div className="category-content">
                                    <h3 className="heading">{cat.title}</h3>

                                    <ul>
                                        {cat.items.map((item, i) => (
                                            <li key={i}>
                                                <a href="/product">{item}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* RIGHT IMAGE */}
                                <div className="category-image">
                                    <img src={cat.image} alt={cat.title} />
                                </div>

                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default FeaturedCategories;