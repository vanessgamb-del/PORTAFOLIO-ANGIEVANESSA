// Mensaje en consola
console.log("Portafolio cargado correctamente");

// Scroll suave al hacer clic en el menú
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();

    const destino = document.querySelector(this.getAttribute("href"));

    destino.scrollIntoView({
      behavior: "smooth"
    });
  });
});