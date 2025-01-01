function toggleSwitch(element) {
    element.classList.toggle('active');
}


// Lấy các phần tử từ DOM
const track = document.querySelector('.carousel-track');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const boxItems = document.querySelectorAll('.box-item');

// Cấu hình cho carousel
const scrollAmount = 200; // Lượng cuộn khi nhấn nút

// Hàm cuộn sang trái
const scrollLeft = () => {
  track.scrollBy({
    left: -scrollAmount,
    behavior: 'smooth',
  });
};

// Hàm cuộn sang phải
const scrollRight = () => {
  track.scrollBy({
    left: scrollAmount,
    behavior: 'smooth',
  });
};

// Gán sự kiện cho các nút điều hướng
prevButton.addEventListener('click', scrollLeft);
nextButton.addEventListener('click', scrollRight);

// Hiệu ứng khi cuộn tới đầu hoặc cuối
track.addEventListener('scroll', () => {
  const maxScrollLeft = track.scrollWidth - track.clientWidth;

  // Kiểm tra vị trí cuộn để ẩn hoặc hiển thị nút điều hướng
  if (track.scrollLeft <= 0) {
    prevButton.style.display = 'none'; // Ẩn nút trái
  } else {
    prevButton.style.display = 'flex'; // Hiển thị nút trái
  }

  if (track.scrollLeft >= maxScrollLeft) {
    nextButton.style.display = 'none'; // Ẩn nút phải
  } else {
    nextButton.style.display = 'flex'; // Hiển thị nút phải
  }
});

// Thiết lập trạng thái ban đầu cho các nút khi tải trang
document.addEventListener('DOMContentLoaded', () => {
  const maxScrollLeft = track.scrollWidth - track.clientWidth;

  if (track.scrollLeft <= 0) {
    prevButton.style.display = 'none'; // Ẩn nút trái nếu đang ở đầu
  }

  if (track.scrollLeft >= maxScrollLeft) {
    nextButton.style.display = 'none'; // Ẩn nút phải nếu đang ở cuối
  }
});
