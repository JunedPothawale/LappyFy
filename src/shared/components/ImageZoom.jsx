import { useRef, useState, useEffect } from "react";

const ImageZoom = ({ src }) => {
    const containerRef = useRef();
    const [showZoom, setShowZoom] = useState(false);
    const [bgPosition, setBgPosition] = useState("0% 0%");
    const [isMobile, setIsMobile] = useState(false);

    // ✅ detect mobile
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 1024);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const handleMouseMove = (e) => {
        const rect = containerRef.current.getBoundingClientRect();

        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;

        setBgPosition(`${x}% ${y}%`);
    };

    return (
        <div
            ref={containerRef}
            onMouseEnter={() => !isMobile && setShowZoom(true)}
            onMouseLeave={() => setShowZoom(false)}
            onMouseMove={handleMouseMove}
            style={{
                position: "relative",
                width: "100%",
                maxWidth: "500px",
                aspectRatio: "1/1", // ✅ keeps square
                border: "1px solid #ddd"
            }}
        >
            {/* MAIN IMAGE */}
            <img
                src={src}
                alt=""
                style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain"
                }}
            />

            {/* 🔥 ZOOM OVERLAY (ONLY DESKTOP) */}
            {!isMobile && showZoom && (
                <div
                    style={{
                        position: "absolute",
                        top: "0",
                        left: "105%",
                        width: "25vw",
                        height: "25vw",
                        border: "1px solid #ccc",
                        backgroundImage: `url(${src})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "250%",
                        backgroundPosition: bgPosition,
                        zIndex: 999,
                        backgroundColor: "#fff",
                        boxShadow: "0 4px 20px rgba(0,0,0,0.2)"
                    }}
                />
            )}
        </div>
    );
};

export default ImageZoom;