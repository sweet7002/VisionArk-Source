// Function to handle the countdown timer
function countdown() {
    const countDownDate = new Date("Sep 1, 2024 00:00:00").getTime();
    const x = setInterval(function() {
        const now = new Date().getTime();
        const distance = countDownDate - now;
        if (distance < 0) {
            clearInterval(x);
            return;
        }
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        document.getElementById("days").innerText = days;
        document.getElementById("hours").innerText = hours;
        document.getElementById("minutes").innerText = minutes;
    }, 1000);
}

// Switch to the countdown page after 5 seconds
setTimeout(() => {
    document.querySelector('.page-1').style.opacity = '0';
    document.querySelector('.page-2').style.opacity = '1';
    countdown();
}, 5000);
