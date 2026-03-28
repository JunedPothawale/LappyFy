import React from "react";
const blogData = [
    {
        id: 1,
        category: "eCommerce",
        title: "What information is needed for shipping?",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
        image: "https://placehold.co/370x215",
    },
    {
        id: 2,
        category: "Gaming",
        title: "Interesting fact about gaming consoles",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
        image: "https://placehold.co/370x215",
    },
    {
        id: 3,
        category: "Electronic",
        title: "Electronics, instrumentation & control engineering",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
        image: "https://placehold.co/370x215",
    },
];



const BlogSection = () => {
    return (
        <section className="py-5 bg-light">
            <div className="container">

                {/* Title */}
                <div className="row mb-5">
                    <div className="col-12 text-center">
                        <h2 className="fw-bold">Our Latest News</h2>
                        <p className="text-muted mx-auto" style={{ maxWidth: "600px" }}>
                            There are many variations of passages of Lorem Ipsum available,
                            but the majority have suffered alteration in some form.
                        </p>
                    </div>
                </div>

                {/* Cards */}
                <div className="row g-4">
                    {blogData.map((blog) => (
                        <div key={blog.id} className="col-lg-4 col-md-6 col-12 ">

                            <div className="bg-white rounded p-2 shadow-sm overflow-hidden h-100">

                                {/* Image */}
                                <img
                                    src={blog.image}
                                    alt={blog.title}
                                    className="img-fluid w-100"
                                />

                                {/* Content */}
                                <div className="p-4">

                                    <small className="text-muted d-block mb-2">
                                        {blog.category}
                                    </small>

                                    <h5 className="mb-3">
                                        <a
                                            href="#"
                                            className="text-dark text-decoration-none link-primary link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover"
                                        >
                                            {blog.title}
                                        </a>
                                    </h5>

                                    <p className="text-muted mb-4">
                                        {blog.description}
                                    </p>

                                    <a href="#" className="btn border hover-bg fs-6 btn-sm px-3 py-2">
                                        Read More
                                    </a>

                                </div>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default BlogSection;