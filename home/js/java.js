document.addEventListener('DOMContentLoaded', () => {
    const starsContainer = document.createElement('div');
    starsContainer.style.position = 'absolute';
    starsContainer.style.width = '100%';
    starsContainer.style.height = '100%';
    starsContainer.style.zIndex = '-1';


    for (let i = 0; i < 200; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.top = Math.random() * 100 + '%';
        star.style.left = Math.random() * 100 + '%';
        starsContainer.appendChild(star);
    }

    document.body.appendChild(starsContainer);

    function createFallingStar() {
        const fallingStar = document.createElement('div');
        fallingStar.classList.add('falling-star');
        fallingStar.style.left = Math.random() * 100 + '%';
        fallingStar.style.animation = `fall ${Math.random() * 5 + 2}s linear infinite`;

        document.body.appendChild(fallingStar);

   
        fallingStar.addEventListener('animationiteration', () => {
            fallingStar.remove();
        });
    }

 
    setInterval(createFallingStar, 1000);
});
