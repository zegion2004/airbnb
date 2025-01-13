const carouselImagesPhong = document.querySelector('.carousel-images-phong');
const indicatorsPhong = document.querySelectorAll('.carousel-indicators-phong div');
const leftBtnPhong = document.querySelector('.carousel-btn-phong.left-phong');
const rightBtnPhong = document.querySelector('.carousel-btn-phong.right-phong');
let currentIndexPhong = 0;

function updateCarouselPhong() {
    const offset = -currentIndexPhong * 322;
    carouselImagesPhong.style.transform = `translateX(${offset}px)`;

    indicatorsPhong.forEach((indicator, index) => {
        indicator.classList.toggle('active-phong', index === currentIndexPhong);
    });

    leftBtnPhong.style.opacity = currentIndexPhong === 0 ? '0' : '1';
    leftBtnPhong.style.pointerEvents = currentIndexPhong === 0 ? 'none' : 'auto';

    rightBtnPhong.style.opacity = currentIndexPhong === indicatorsPhong.length - 1 ? '0' : '1';
    rightBtnPhong.style.pointerEvents = currentIndexPhong === indicatorsPhong.length - 1 ? 'none' : 'auto';
}

leftBtnPhong.addEventListener('click', () => {
    if (currentIndexPhong > 0) {
        currentIndexPhong--;
        updateCarouselPhong();
        console.log(leftBtnPhong);
    }
});

rightBtnPhong.addEventListener('click', () => {
    if (currentIndexPhong < indicatorsPhong.length - 1) {
        currentIndexPhong++;
        updateCarouselPhong();
    }
});

indicatorsPhong.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        currentIndexPhong = index;
        updateCarouselPhong();
    });
});

updateCarouselPhong();
