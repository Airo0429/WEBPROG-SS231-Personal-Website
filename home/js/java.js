document.addEventListener('DOMContentLoaded', () => {
    const stars = document.createElement('div');
    stars.style.position = 'fixed';
    stars.style.width = '100%';
    stars.style.height = '100%';
    stars.style.overflow = 'hidden';
    stars.style.zIndex = '-1';
    stars.innerHTML = Array(100).fill('<div class="star"></div>').join('');
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
            top: ${Math.random() * 100}%;
            left: ${Math.random() * 100}%;
        }

        @keyframes twinkle {
            0%, 100% { opacity: 0.2; }
            50% { opacity: 1; }
        }
    `;
    document.head.appendChild(starStyle);
});
