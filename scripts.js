// scripts.js

let currentSlide = 0;

function showNextSlide() {
    const slides = document.querySelector('.slides');
    const totalSlides = slides.children.length;

    currentSlide = (currentSlide + 1) % totalSlides;
    const offset = -currentSlide * 100; // Shifts to the next image
    slides.style.transform = `translateX(${offset}%)`;
}

// Set interval for the carousel rotation
setInterval(showNextSlide, 3000);
