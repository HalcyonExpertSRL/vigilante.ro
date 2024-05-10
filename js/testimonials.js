// Obtener todos los elementos de testimonio
var slides = document.querySelectorAll(".testimonial-slide");
var currentSlide = 0;

// Mostrar el primer testimonio
slides[currentSlide].classList.add("active");

// Función para avanzar al siguiente testimonio
function nextSlide() {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
}

// Función para mostrar el testimonio anterior
function prevSlide() {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  slides[currentSlide].classList.add("active");
}

// Cambiar al siguiente testimonio cada 5 segundos
setInterval(nextSlide, 2000);
