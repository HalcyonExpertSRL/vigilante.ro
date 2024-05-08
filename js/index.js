const carousel = document.querySelector('.brands .carousel-inner');
const carouselItems = Array.from(carousel.children);
const carouselItemWidth = carouselItems[0].offsetWidth;
const carouselWidth = carousel.offsetWidth;
const scrollDistance = carouselItemWidth * carouselItems.length - carouselWidth;

let scrollPosition = 0;

function scrollTo(distance) {
  carousel.scrollTo({
    left: scrollPosition + distance,
    behavior: 'smooth'
  });
}

function handleScroll(event) {
  const delta = event.wheelDelta || -event.deltaY;
  const distance = Math.round(delta / 100 * carouselItemWidth);
  scrollTo(distance);
}

carousel.addEventListener('wheel', handleScroll);

function initializeCarousel() {
  scrollTo(0);
  carousel.addEventListener('transitionend', () => {
    scrollPosition = carousel.scrollLeft;
  });
}

initializeCarousel();