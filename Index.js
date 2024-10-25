window.onload = function() {
    var loadingScreen = document.getElementById("loading-screen");
    var mainContent = document.getElementById("main-content");

    setTimeout(function() {
        loadingScreen.classList.add("fade-out");

        setTimeout(function() {
            loadingScreen.style.display = "none";
            mainContent.style.display = "block";
        }, 500); 
    }, 3000);  
};
