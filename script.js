document.addEventListener('DOMContentLoaded', (event) => {
    const page1 = document.getElementById('page-1');
    const page2 = document.getElementById('page-2');
    const launchDate = document.getElementById('launch-date');

    setTimeout(() => {
        page1.style.opacity = '0';
        setTimeout(() => {
            page1.style.display = 'none';
            page2.style.display = 'flex';
            page2.style.opacity = '1';
        }, 1000); 
    }, 3000);

    launchDate.addEventListener('click', () => {
        launchDate.style.backgroundColor = '#4caf50'; 

        for (let i = 0; i < 10; i++) {
            const dino = document.createElement('div');
            dino.classList.add('dino');
            dino.textContent = '🦕';
            dino.style.left = Math.random() * window.innerWidth + 'px';
            dino.style.animationDuration = (Math.random() * 3 + 2) + 's'; 
            document.body.appendChild(dino);

            dino.addEventListener('animationend', () => {
                dino.remove();
            });
        }
    });
});
