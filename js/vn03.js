const carouselImagesvnc = document.querySelector('.carousel-images-vnc');
const indicatorsvnc = document.querySelectorAll('.carousel-indicators-vnc div');
const leftBtnvnc = document.querySelector('.carousel-btn-vnc.left-vnc');
const rightBtnvnc = document.querySelector('.carousel-btn-vnc.right-vnc');
let currentIndexvnc = 0;

function updateCarouselvnc() {
    const offset = -currentIndexvnc * 322;
    carouselImagesvnc.style.transform = `translateX(${offset}px)`;

    indicatorsvnc.forEach((indicator, index) => {
        indicator.classList.toggle('active-vnc', index === currentIndexvnc);
    });

    leftBtnvnc.style.opacity = currentIndexvnc === 0 ? '0' : '1';
    leftBtnvnc.style.pointerEvents = currentIndexvnc === 0 ? 'none' : 'auto';

    rightBtnvnc.style.opacity = currentIndexvnc === indicatorsvnc.length - 1 ? '0' : '1';
    rightBtnvnc.style.pointerEvents = currentIndexvnc === indicatorsvnc.length - 1 ? 'none' : 'auto';
}

leftBtnvnc.addEventListener('click', () => {
    if (currentIndexvnc > 0) {
        currentIndexvnc--;
        updateCarouselvnc();
    }
});

rightBtnvnc.addEventListener('click', () => {
    if (currentIndexvnc < indicatorsvnc.length - 1) {
        currentIndexvnc++;
        updateCarouselvnc();
    }
});

indicatorsvnc.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        currentIndexvnc = index;
        updateCarouselvnc();
    });
});

updateCarouselvnc();
