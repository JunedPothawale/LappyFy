import React from 'react'

const ScrollToTop = () => {
    return (
        <>
            <a
                href="https://wa.me/+918421018184"
                target="_blank"
                rel="noopener noreferrer"
                className="position-fixed scroll-top bg-success"
                style={{ zIndex: 999, bottom: "5rem" }}
            >
                <i className="lni lni-whatsapp fs-4"></i>
            </a>
            <a href="#" class="scroll-top">
                <i class="lni lni-chevron-up"></i>
            </a>
        </>
    )
}

export default ScrollToTop
