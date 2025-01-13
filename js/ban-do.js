document.addEventListener("DOMContentLoaded", function () {
  const roomList = document.querySelector(".room-list");
  const fixedButton = document.querySelector(".fixed-button");

  // Tạo Intersection Observer
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0.3) {
          // Hiển thị nút khi 50% room-list còn trong màn hình
          fixedButton.classList.remove("hidden");
        } else {
          // Ẩn nút khi ít hơn 50% room-list còn trong màn hình
          fixedButton.classList.add("hidden");
        }
      });
    },
    {
      threshold: 0.3, // Kích hoạt khi 50% phần tử room-list xuất hiện
    }
  );

  if (roomList) {
    observer.observe(roomList); // Theo dõi room-list
  }
});
