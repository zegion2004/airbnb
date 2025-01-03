const carouselImagesvn = document.querySelector('.carousel-images-vn');
const indicatorsvn = document.querySelectorAll('.carousel-indicators-vn div');
const leftBtnvn = document.querySelector('.carousel-btn-vn.left-vn');
const rightBtnvn = document.querySelector('.carousel-btn-vn.right-vn');
let currentIndexvn = 0;

function updateCarouselvn() {
    const offset = -currentIndexvn * 322;
    carouselImagesvn.style.transform = `translateX(${offset}px)`;

    indicatorsvn.forEach((indicator, index) => {
        indicator.classList.toggle('active-vn', index === currentIndexvn);
    });

    leftBtnvn.style.opacity = currentIndexvn === 0 ? '0' : '1';
    leftBtnvn.style.pointerEvents = currentIndexvn === 0 ? 'none' : 'auto';

    rightBtnvn.style.opacity = currentIndexvn === indicatorsvn.length - 1 ? '0' : '1';
    rightBtnvn.style.pointerEvents = currentIndexvn === indicatorsvn.length - 1 ? 'none' : 'auto';
}

leftBtnvn.addEventListener('click', () => {
    if (currentIndexvn > 0) {
        currentIndexvn--;
        updateCarouselvn();
    }
});

rightBtnvn.addEventListener('click', () => {
    if (currentIndexvn < indicatorsvn.length - 1) {
        currentIndexvn++;
        updateCarouselvn();
    }
});

indicatorsvn.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        currentIndexvn = index;
        updateCarouselvn();
    });
});

updateCarouselvn();
