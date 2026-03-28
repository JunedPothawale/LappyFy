import React from 'react'

const FileNotFound = () => {
    return (
        <>
            <div className="error-area">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container">
                            <div className="error-content">
                                <h1>404</h1>
                                <h2>Oops! Page Not Found!</h2>
                                <p>The page you are looking for does not exist. It might have been moved or deleted.</p>
                                <div className="button">
                                    <a href="/" className="btn">Back to Home</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FileNotFound
