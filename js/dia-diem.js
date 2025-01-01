// Lắng nghe sự kiện click trên toàn bộ document
document.addEventListener('click', function (event) {
    const searchArea = document.getElementById('searchArea');
    const diaDiem = document.querySelector('.muc-tim-kiem.dia-diem');

    // Kiểm tra nếu click không nằm trong searchArea và cũng không phải "Địa điểm"
    if (!searchArea.contains(event.target) && !diaDiem.contains(event.target)) {
        searchArea.classList.remove('active'); // Ẩn thanh hiển thị
        diaDiem.classList.remove('active');   // Loại bỏ trạng thái active của "Địa điểm"
    }
});

// Hàm bật/tắt trạng thái hiển thị
function toggleSearchArea() {
    const searchArea = document.getElementById('searchArea');
    const diaDiem = document.querySelector('.muc-tim-kiem.dia-diem');

    // Bật/tắt trạng thái active
    searchArea.classList.toggle('active');
    diaDiem.classList.toggle('active');
}
