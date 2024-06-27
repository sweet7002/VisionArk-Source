function isMobileOrTablet() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Redirect if the user is on a mobile device or iPad
function redirectIfMobileOrTablet() {
    if (isMobileOrTablet()) {
        window.location.href = "WebLimiter.html";
    }
}

// Call the function when the page loads
window.onload = function() {
    redirectIfMobileOrTablet();
};
