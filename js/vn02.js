const carouselImagesvnb = document.querySelector('.carousel-images-vnb');
const indicatorsvnb = document.querySelectorAll('.carousel-indicators-vnb div');
const leftBtnvnb = document.querySelector('.carousel-btn-vnb.left-vnb');
const rightBtnvnb = document.querySelector('.carousel-btn-vnb.right-vnb');
let currentIndexvnb = 0;

function updateCarouselvnb() {
    const offset = -currentIndexvnb * 322;
    carouselImagesvnb.style.transform = `translateX(${offset}px)`;

    indicatorsvnb.forEach((indicator, index) => {
        indicator.classList.toggle('active-vnb', index === currentIndexvnb);
    });

    leftBtnvnb.style.opacity = currentIndexvnb === 0 ? '0' : '1';
    leftBtnvnb.style.pointerEvents = currentIndexvnb === 0 ? 'none' : 'auto';

    rightBtnvnb.style.opacity = currentIndexvnb === indicatorsvnb.length - 1 ? '0' : '1';
    rightBtnvnb.style.pointerEvents = currentIndexvnb === indicatorsvnb.length - 1 ? 'none' : 'auto';
}

leftBtnvnb.addEventListener('click', () => {
    if (currentIndexvnb > 0) {
        currentIndexvnb--;
        updateCarouselvnb();
    }
});

rightBtnvnb.addEventListener('click', () => {
    if (currentIndexvnb < indicatorsvnb.length - 1) {
        currentIndexvnb++;
        updateCarouselvnb();
    }
});

indicatorsvnb.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        currentIndexvnb = index;
        updateCarouselvnb();
    });
});

updateCarouselvnb();
