const carouselImagesIndonesia = document.querySelector('.carousel-images-indonesia');
const indicatorsIndonesia = document.querySelectorAll('.carousel-indicators-indonesia div');
const leftBtnIndonesia = document.querySelector('.carousel-btn-indonesia.left-indonesia');
const rightBtnIndonesia = document.querySelector('.carousel-btn-indonesia.right-indonesia');
let currentIndexIndonesia = 0;

function updateCarouselIndonesia() {
    const offset = -currentIndexIndonesia * 322;
    carouselImagesIndonesia.style.transform = `translateX(${offset}px)`;

    indicatorsIndonesia.forEach((indicator, index) => {
        indicator.classList.toggle('active-indonesia', index === currentIndexIndonesia);
    });

    leftBtnIndonesia.style.opacity = currentIndexIndonesia === 0 ? '0' : '1';
    leftBtnIndonesia.style.pointerEvents = currentIndexIndonesia === 0 ? 'none' : 'auto';

    rightBtnIndonesia.style.opacity = currentIndexIndonesia === indicatorsIndonesia.length - 1 ? '0' : '1';
    rightBtnIndonesia.style.pointerEvents = currentIndexIndonesia === indicatorsIndonesia.length - 1 ? 'none' : 'auto';
}

leftBtnIndonesia.addEventListener('click', () => {
    if (currentIndexIndonesia > 0) {
        currentIndexIndonesia--;
        updateCarouselIndonesia();
    }
});

rightBtnIndonesia.addEventListener('click', () => {
    if (currentIndexIndonesia < indicatorsIndonesia.length - 1) {
        currentIndexIndonesia++;
        updateCarouselIndonesia();
    }
});

indicatorsIndonesia.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        currentIndexIndonesia = index;
        updateCarouselIndonesia();
    });
});

updateCarouselIndonesia();
