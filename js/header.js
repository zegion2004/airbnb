// Lấy phần tử header
const header = document.querySelector('.header');
const traiNghiem = document.querySelector('.trai-nghiem');
const thanhTimKiem = document.querySelector('.thanh-tim-kiem');

// Theo dõi sự kiện cuộn
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('shrink'); // Thêm class rút gọn
  } else {
    header.classList.remove('shrink'); // Loại bỏ class rút gọn
  }
});
