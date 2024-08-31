// script.js

window.onload = function() {
    // Get the loading screen and main content elements
    var loadingScreen = document.getElementById("loading-screen");
    var mainContent = document.getElementById("main-content");

    // Wait for 3 seconds
    setTimeout(function() {
        // Add the fade-out class to the loading screen
        loadingScreen.classList.add("fade-out");

        // Wait for the fade-out transition to complete (0.5s) before hiding the loading screen
        setTimeout(function() {
            // Hide the loading screen and show the main content
            loadingScreen.style.display = "none";
            mainContent.style.display = "block";
        }, 500);  // Match the delay to the transition duration
    }, 3000);  // Initial 3 seconds delay
};
