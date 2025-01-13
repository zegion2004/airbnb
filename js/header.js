// Lấy các phần tử cần thiết
const header = document.querySelector('.header');
const traiNghiem = document.querySelector('.trai-nghiem');
const thanhTimKiem = document.querySelector('.thanh-tim-kiem');

// Lưu vị trí gốc của các phần tử
const originalTraiNghiemParent = traiNghiem.parentNode;
const originalThanhTimKiemParent = thanhTimKiem.parentNode;
const originalTraiNghiemNextSibling = traiNghiem.nextElementSibling;

// Theo dõi sự kiện cuộn
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    // Khi cuộn xuống
    if (!header.classList.contains('shrink')) {
      // Di chuyển thanh-tim-kiem lên trước trai-nghiem
      header.insertBefore(thanhTimKiem, traiNghiem);
      traiNghiem.style.display = 'none'; // Ẩn trai-nghiem
      thanhTimKiem.style.width = '400px '; // Giảm kích thước thanh-tim-kiem
      thanhTimKiem.style.height = '50px';
      thanhTimKiem.style.padding=' auto';
      header.classList.add('shrink'); // Thêm class shrink
    }
  } else {
    // Khi cuộn lên
    if (header.classList.contains('shrink')) {
      // Đưa trai-nghiem và thanh-tim-kiem về vị trí ban đầu
      if (originalTraiNghiemNextSibling) {
        originalTraiNghiemParent.insertBefore(traiNghiem, originalTraiNghiemNextSibling);
      } else {
        originalTraiNghiemParent.appendChild(traiNghiem);
      }
      originalThanhTimKiemParent.appendChild(thanhTimKiem);

      traiNghiem.style.display = 'flex'; // Hiển thị lại trai-nghiem
      thanhTimKiem.style.width = ''; // Khôi phục kích thước gốc
      thanhTimKiem.style.height = '';
      header.classList.remove('shrink'); // Loại bỏ class shrink
    }
  }
});
