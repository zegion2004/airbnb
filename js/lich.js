// Biến lưu trạng thái
let selectedStartDate = null; // Ngày nhận phòng
let selectedEndDate = null;   // Ngày trả phòng

/**
 * Hàm mở lịch và gắn trạng thái active cho mục được chọn
 * @param {string} target - Nhận phòng ('nhan-phong') hoặc Trả phòng ('tra-phong')
 */
function openPopup(target) {
    const popup = document.getElementById('popup');
    popup.dataset.activeTarget = target; // Ghi nhớ mục đang chọn
    popup.classList.add('active'); // Hiển thị popup

    // Xóa trạng thái active trước đó
    document.querySelectorAll('.muc-tim-kiem').forEach(el => el.classList.remove('active'));

    // Thêm trạng thái active cho mục tương ứng
    if (target === 'nhan-phong') {
        document.querySelector('.muc-tim-kiem.nhan-phong').classList.add('active');
    } else if (target === 'tra-phong') {
        document.querySelector('.muc-tim-kiem.tra-phong').classList.add('active');
    }
}

/**
 * Hàm đóng lịch và xóa trạng thái active của các mục
 */
function closePopup() {
    const popup = document.getElementById('popup');
    popup.classList.remove('active'); // Ẩn popup

    // Xóa trạng thái active khỏi tất cả các mục
    document.querySelectorAll('.muc-tim-kiem').forEach(el => el.classList.remove('active'));
}

/**
 * Hàm xử lý khi chọn ngày
 */
document.querySelectorAll('.ngay span').forEach(day => {
    day.addEventListener('click', function () {
        const popup = document.getElementById('popup');
        const activeTarget = popup.dataset.activeTarget;

        // Cập nhật ngày được chọn
        if (activeTarget === 'nhan-phong') {
            selectedStartDate = this.textContent + '/01/2025'; // Thay "Tháng 1" bằng logic lịch
            document.getElementById('nhan-phong-text').textContent = selectedStartDate;
        } else if (activeTarget === 'tra-phong') {
            selectedEndDate = this.textContent + '/01/2025'; // Thay "Tháng 1" bằng logic lịch
            document.getElementById('tra-phong-text').textContent = selectedEndDate;
        }

        // Đánh dấu ngày đã chọn
        document.querySelectorAll('.ngay span').forEach(span => span.classList.remove('selected'));
        this.classList.add('selected');
    });
});

/**
 * Ẩn popup khi nhấn ra ngoài
 */
document.addEventListener('click', function (event) {
    const popup = document.getElementById('popup');
    const nhanPhong = document.querySelector('.muc-tim-kiem.nhan-phong');
    const traPhong = document.querySelector('.muc-tim-kiem.tra-phong');

    if (
        !popup.contains(event.target) &&
        !nhanPhong.contains(event.target) &&
        !traPhong.contains(event.target)
    ) {
        closePopup(); // Ẩn popup
    }
});
