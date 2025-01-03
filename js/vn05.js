const carouselImagesvne = document.querySelector('.carousel-images-vne');
const indicatorsvne = document.querySelectorAll('.carousel-indicators-vne div');
const leftBtnvne = document.querySelector('.carousel-btn-vne.left-vne');
const rightBtnvne = document.querySelector('.carousel-btn-vne.right-vne');
let currentIndexvne = 0;

function updateCarouselvne() {
    const offset = -currentIndexvne * 322;
    carouselImagesvne.style.transform = `translateX(${offset}px)`;

    indicatorsvne.forEach((indicator, index) => {
        indicator.classList.toggle('active-vne', index === currentIndexvne);
    });

    leftBtnvne.style.opacity = currentIndexvne === 0 ? '0' : '1';
    leftBtnvne.style.pointerEvents = currentIndexvne === 0 ? 'none' : 'auto';

    rightBtnvne.style.opacity = currentIndexvne === indicatorsvne.length - 1 ? '0' : '1';
    rightBtnvne.style.pointerEvents = currentIndexvne === indicatorsvne.length - 1 ? 'none' : 'auto';
}

leftBtnvne.addEventListener('click', () => {
    if (currentIndexvne > 0) {
        currentIndexvne--;
        updateCarouselvne();
    }
});

rightBtnvne.addEventListener('click', () => {
    if (currentIndexvne < indicatorsvne.length - 1) {
        currentIndexvne++;
        updateCarouselvne();
    }
});

indicatorsvne.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        currentIndexvne = index;
        updateCarouselvne();
    });
});

updateCarouselvne();
