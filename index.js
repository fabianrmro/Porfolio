let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showNextSlide() {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active");
}

setInterval(showNextSlide, 3000);

function downloadCV() {
    window.open("cv.pdf", "_blank");
}

document.querySelector("#contact-form").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Mensaje enviado. ¡Gracias por contactarme!");
});
