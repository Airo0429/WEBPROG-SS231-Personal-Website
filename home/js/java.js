document.addEventListener('DOMContentLoaded', () => {
    const starBackground = document.createElement('div');
    starBackground.classList.add('star-background');
    document.body.appendChild(starBackground);

    const stars = document.createElement('div');
    stars.style.position = 'absolute';
    stars.style.width = '100%';
    stars.style.height = '100%';
    stars.style.overflow = 'hidden';
    stars.style.zIndex = '-1'; 
    
    // Add 500 stars for a full starry background
    for (let i = 0; i < 500; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.top = Math.random() * 100 + '%';
        star.style.left = Math.random() * 100 + '%';
        stars.appendChild(star);
    }
    document.body.appendChild(stars);
});
