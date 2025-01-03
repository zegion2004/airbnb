const carouselImagesvnd = document.querySelector('.carousel-images-vnd');
const indicatorsvnd = document.querySelectorAll('.carousel-indicators-vnd div');
const leftBtnvnd = document.querySelector('.carousel-btn-vnd.left-vnd');
const rightBtnvnd = document.querySelector('.carousel-btn-vnd.right-vnd');
let currentIndexvnd = 0;

function updateCarouselvnd() {
    const offset = -currentIndexvnd * 322;
    carouselImagesvnd.style.transform = `translateX(${offset}px)`;

    indicatorsvnd.forEach((indicator, index) => {
        indicator.classList.toggle('active-vnd', index === currentIndexvnd);
    });

    leftBtnvnd.style.opacity = currentIndexvnd === 0 ? '0' : '1';
    leftBtnvnd.style.pointerEvents = currentIndexvnd === 0 ? 'none' : 'auto';

    rightBtnvnd.style.opacity = currentIndexvnd === indicatorsvnd.length - 1 ? '0' : '1';
    rightBtnvnd.style.pointerEvents = currentIndexvnd === indicatorsvnd.length - 1 ? 'none' : 'auto';
}

leftBtnvnd.addEventListener('click', () => {
    if (currentIndexvnd > 0) {
        currentIndexvnd--;
        updateCarouselvnd();
    }
});

rightBtnvnd.addEventListener('click', () => {
    if (currentIndexvnd < indicatorsvnd.length - 1) {
        currentIndexvnd++;
        updateCarouselvnd();
    }
});

indicatorsvnd.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        currentIndexvnd = index;
        updateCarouselvnd();
    });
});

updateCarouselvnd();
