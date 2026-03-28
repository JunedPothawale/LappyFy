import React, { useState } from "react";

const ReviewModal = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "",
        rating: "5 Stars",
        message: "",
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = () => {
        console.log("Review Submitted:", form);
    };

    return (
        <div
            className="modal fade review-modal"
            id="exampleModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog">
                <div className="modal-content">

                    {/* HEADER */}
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                            Leave a Review
                        </h5>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                        ></button>
                    </div>

                    {/* BODY */}
                    <div className="modal-body">
                        <div className="row">

                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label>Your Name</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        name="name"
                                        value={form.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label>Your Email</label>
                                    <input
                                        className="form-control"
                                        type="email"
                                        name="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                        </div>

                        <div className="row">

                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label>Subject</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        name="subject"
                                        value={form.subject}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label>Rating</label>
                                    <select
                                        className="form-control"
                                        name="rating"
                                        value={form.rating}
                                        onChange={handleChange}
                                    >
                                        <option>5 Stars</option>
                                        <option>4 Stars</option>
                                        <option>3 Stars</option>
                                        <option>2 Stars</option>
                                        <option>1 Star</option>
                                    </select>
                                </div>
                            </div>

                        </div>

                        <div className="form-group">
                            <label>Review</label>
                            <textarea
                                className="form-control"
                                name="message"
                                rows="6"
                                value={form.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                    </div>

                    {/* FOOTER */}
                    <div className="modal-footer button">
                        <button
                            type="button"
                            className="btn"
                            onClick={handleSubmit}
                            data-bs-dismiss="modal"
                        >
                            Submit Review
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ReviewModal;