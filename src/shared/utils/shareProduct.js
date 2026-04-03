export const handleShare = (product) => {
    const url = window.location.href;

    // ⚡ fastest path (mobile)
    if (navigator.share) {
        navigator.share({
            title: product?.name || "Product",
            text: "Check out this product",
            url,
        });
        return;
    }

    // ⚡ fast clipboard (no await)
    if (navigator.clipboard) {
        navigator.clipboard.writeText(url);
    } else {
        // ⚡ fallback (minimal DOM)
        const textarea = document.createElement("textarea");
        textarea.value = url;
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";

        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
    }

    // ⚡ instant feedback
    console.log("Link copied");
};