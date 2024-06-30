document.addEventListener("DOMContentLoaded", function() {
    const countdown = () => {
        const countDate = new Date("September 1, 2024 00:00:00").getTime();
        const now = new Date().getTime();
        const gap = countDate - now;

        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;

        const textDay = Math.floor(gap / day);
        const textHour = Math.floor((gap % day) / hour);
        const textMinute = Math.floor((gap % hour) / minute);
        const textSecond = Math.floor((gap % minute) / second);

        document.getElementById("days").innerText = textDay;
        document.getElementById("hours").innerText = textHour;
        document.getElementById("minutes").innerText = textMinute;
        document.getElementById("seconds").innerText = textSecond;
    };

    setInterval(countdown, 1000);
    countdown();
});

function submitEmail() {
    const email = document.getElementById("email").value;
    const webhookUrl = "https://discord.com/api/webhooks/1256748699195801651/qleQhZuFN345fBwS1QY0C-KuQZ2re7hBcD0NPxZ3HTA55qwO8hy8W_4U1SefzgK5dfc4";
    
    const request = new XMLHttpRequest();
    request.open("POST", webhookUrl);
    request.setRequestHeader("Content-Type", "application/json");

    const params = {
        content: `New beta tester email: ${email}`
    };

    request.send(JSON.stringify(params));

    alert("Email submitted!");
    document.getElementById("email").value = "";
}
