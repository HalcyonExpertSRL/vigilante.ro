document.addEventListener("DOMContentLoaded", function () {
  const carouselInner = document.querySelector(".carousel-inner");
  const carouselItems = document.querySelectorAll(".carousel-item");
  const totalItems = carouselItems.length;
  let currentIndex = 0;

  function nextSlide() {
    currentIndex++;
    if (currentIndex >= totalItems) {
      currentIndex = 0;
    }
    updateCarousel();
  }

  function updateCarousel() {
    const offset = -currentIndex * carouselItems[0].offsetWidth;
    carouselInner.style.transform = `translateX(${offset}px)`;
  }

  setInterval(nextSlide, 3000); // Cambia cada 3 segundos (3000ms)
});

