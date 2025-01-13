document.addEventListener('DOMContentLoaded', () => {
    const stars = document.createElement('div');
    stars.style.position = 'fixed';
    stars.style.width = '100%';
    stars.style.height = '100%';
    stars.style.overflow = 'hidden';
    stars.style.zIndex = '-1';
    
    // Add 100 stars
    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.top = Math.random() * 100 + '%';
        star.style.left = Math.random() * 100 + '%';
        stars.appendChild(star);
    }
    document.body.appendChild(stars);

    const starStyle = document.createElement('style');
    starStyle.innerHTML = `
        .star {
            position: absolute;
            background-color: white;
            border-radius: 50%;
            animation: twinkle 2s infinite ease-in-out;
            width: 2px;
            height: 2px;
        }

        @keyframes twinkle {
            0%, 100% { opacity: 0.2; }
            50% { opacity: 1; }
        }
    `;
    document.head.appendChild(starStyle);
});
