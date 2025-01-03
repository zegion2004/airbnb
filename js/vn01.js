const carouselImagesvna = document.querySelector('.carousel-images-vna');
const indicatorsvna = document.querySelectorAll('.carousel-indicators-vna div');
const leftBtnvna = document.querySelector('.carousel-btn-vna.left-vna');
const rightBtnvna = document.querySelector('.carousel-btn-vna.right-vna');
let currentIndexvna = 0;

function updateCarouselvna() {
    const offset = -currentIndexvna * 322;
    carouselImagesvna.style.transform = `translateX(${offset}px)`;

    indicatorsvna.forEach((indicator, index) => {
        indicator.classList.toggle('active-vna', index === currentIndexvna);
    });

    leftBtnvna.style.opacity = currentIndexvna === 0 ? '0' : '1';
    leftBtnvna.style.pointerEvents = currentIndexvna === 0 ? 'none' : 'auto';

    rightBtnvna.style.opacity = currentIndexvna === indicatorsvna.length - 1 ? '0' : '1';
    rightBtnvna.style.pointerEvents = currentIndexvna === indicatorsvna.length - 1 ? 'none' : 'auto';
}

leftBtnvna.addEventListener('click', () => {
    if (currentIndexvna > 0) {
        currentIndexvna--;
        updateCarouselvna();
    }
});

rightBtnvna.addEventListener('click', () => {
    if (currentIndexvna < indicatorsvna.length - 1) {
        currentIndexvna++;
        updateCarouselvna();
    }
});

indicatorsvna.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        currentIndexvna = index;
        updateCarouselvna();
    });
});

updateCarouselvna();
