// Lắng nghe sự kiện nhấn vào nút
document.querySelector('.icon-dang-ki').addEventListener('click', function () {
    const dropdownMenu = document.querySelector('.dropdown-menu');
    // Hiển thị hoặc ẩn menu
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
  });
  
  // Ẩn menu khi nhấn ra ngoài
  window.addEventListener('click', function (event) {
    const menuContainer = document.querySelector('.icon-dang-ki');
    const dropdownMenu = document.querySelector('.dropdown-menu');
  
    if (!menuContainer.contains(event.target)) {
      dropdownMenu.style.display = 'none';
    }
  });
  