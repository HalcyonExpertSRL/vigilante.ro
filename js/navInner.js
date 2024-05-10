// Seleccionar todos los enlaces de la barra de navegación
var links = document.querySelectorAll(".navbar a");

// Iterar sobre cada enlace y agregar un evento de clic
links.forEach(function (link) {
  link.addEventListener("click", function (event) {
    // Prevenir el comportamiento predeterminado del enlace
    event.preventDefault();

    // Obtener el selector de la sección a la que se quiere desplazar
    var targetSelector = this.getAttribute("href");

    // Obtener la sección de destino
    var targetSection = document.querySelector(targetSelector);

    // Hacer un desplazamiento suave hasta la sección de destino
    targetSection.scrollIntoView({ behavior: "smooth" });
  });
});
