import React, { useState } from "react";
import Breadcrumbs from "../../../widgets/Breadcrumbs";
const faqData = [
    {
        id: 1,
        question: "What payment methods do you accept?",
        answer: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
            "Anim pariatur cliche reprehenderit, enim eiusmod high life..."
        ],

        show: true
    },
    {
        id: 2,
        question: "How long will delivery take?",
        answer: [
            "Anim pariatur cliche reprehenderit, enim eiusmod high life...",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
        ],

    },
    {
        id: 3,
        question: "Do I need an account to place an order?",
        answer: [
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit..."
        ],
    },
    {
        id: 4,
        question: "Do you have discounts for returning customers?",
        answer: [
            "Anim pariatur cliche reprehenderit...",
            "Lorem ipsum dolor sit amet..."
        ],
    },
    {
        id: 5,
        question: "What are the product refund conditions?",
        answer: [
            "Anim pariatur cliche reprehenderit..."
        ],
    },
];

const FaqSection = () => {



    return (

        <>
            <Breadcrumbs title="Cart" paths={[{ name: "FAQs" }]} />

            <section className="py-5 bg-light">
                <div className="container">

                    {/* Title */}
                    <div className="text-center mb-5">
                        <h2 className="fw-bold">
                            Haven’t Found The Answer?<br /> Ask Us Your Question.
                        </h2>
                        <p className="text-muted">
                            We normally respond within 2 business days. Most popular questions will appear on this page.
                        </p>
                    </div>

                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">

                            <div className="accordion" id="faqAccordion">

                                {faqData.map((item) => (
                                    <div
                                        key={item.id}
                                        className="accordion-item mb-3"
                                        style={{
                                            border: "none",
                                            borderRadius: "8px",
                                            overflow: "hidden",
                                            boxShadow: "0 2px 12px rgba(0,0,0,0.05)"
                                        }}
                                    >

                                        <h2 className="accordion-header">
                                            <button
                                                className={`accordion-button d-flex justify-content-between align-items-center ${!item.show ? "collapsed" : ""
                                                    }`}
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target={`#collapse${item.id}`}
                                                style={{

                                                    fontWeight: 500,
                                                    padding: "16px 20px",
                                                    boxShadow: "none"
                                                }}
                                            >
                                                {item.question}

                                                {/* ICON */}
                                                <i
                                                    className={`lni ${item.show ? "lni-dash" : "lni-plus"
                                                        } ms-auto`}
                                                    style={{
                                                        fontSize: "18px",
                                                    }}
                                                ></i>
                                            </button>
                                        </h2>

                                        <div
                                            id={`collapse${item.id}`}
                                            className={`accordion-collapse collapse ${item.show ? "show" : ""
                                                }`}
                                            data-bs-parent="#faqAccordion"
                                        >
                                            <div
                                                className="accordion-body"
                                                style={{
                                                    padding: "20px",
                                                    color: "#6c757d"
                                                }}
                                            >
                                                {item.answer.map((text, i) => (
                                                    <p key={i}>{text}</p>
                                                ))}
                                            </div>
                                        </div>

                                    </div>
                                ))}

                            </div>

                        </div>
                    </div>

                </div>
            </section>
        </>
    );
};

export default FaqSection;