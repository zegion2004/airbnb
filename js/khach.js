// Biến lưu trạng thái số lượng khách
let guests = {
    adults: 0,
    children: 0,
    infants: 0,
    pets: 0,
};

// Hiển thị hoặc ẩn popup khách
function toggleGuestsPopup() {
    const popup = document.getElementById('guests-popup');
    const trigger = document.querySelector('.khach-noi-dung');

    if (popup.classList.contains('hidden')) {
        popup.classList.remove('hidden');
        trigger.classList.add('active');
    } else {
        popup.classList.add('hidden');
        trigger.classList.remove('active');
    }
}

// Đóng popup khách
function closeGuestsPopup() {
    const popup = document.getElementById('guests-popup');
    const trigger = document.querySelector('.khach-noi-dung');
    popup.classList.add('hidden');
    trigger.classList.remove('active');
}

// Cập nhật số lượng khách
function updateGuests(type, value) {
    guests[type] = Math.max(0, guests[type] + value);
    document.getElementById(`${type}-count`).textContent = guests[type];

    // Cập nhật nội dung hiển thị
    const totalGuests = guests.adults + guests.children + guests.infants + guests.pets;
    document.getElementById('khach-text').textContent = totalGuests > 0 ? `${totalGuests} khách` : 'Thêm khách';
}

// Ẩn popup khi nhấn ra ngoài
document.addEventListener('click', function (event) {
    const popup = document.getElementById('guests-popup');
    const trigger = document.querySelector('.khach-noi-dung');

    if (!popup.contains(event.target) && !trigger.contains(event.target)) {
        closeGuestsPopup();
    }
});
