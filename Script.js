document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggle-ads-btn');
    const progressBar = document.getElementById('progress-bar');

    // Function to apply the ad preference from localStorage
    function applyStoredAdPreference() {
        const adPreference = localStorage.getItem('adsEnabled');
        if (adPreference === 'true') {
            progressBar.style.display = 'none'; // Hide progress bar if ads are enabled
        } else {
            progressBar.style.display = 'none'; // Keep hidden if ads are disabled
        }
    }

    // Load and apply the ad preference on page load
    applyStoredAdPreference();

    toggleButton.addEventListener('click', () => {
        // Show the progress bar
        progressBar.style.display = 'block';
        progressBar.style.width = '0';

        // Animate the progress bar
        let width = 0;
        const interval = setInterval(() => {
            if (width >= 100) {
                clearInterval(interval);
                progressBar.style.display = 'none';
                
                // Save the ad preference to localStorage
                localStorage.setItem('adsEnabled', true);
            } else {
                width++;
                progressBar.style.width = width + '%';
            }
        }, 200); // Adjust speed of progress bar here (lower value = faster)
    });
});
