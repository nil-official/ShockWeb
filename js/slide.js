// JavaScript for sliding functionality
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(n) {
    if (n >= totalSlides) {
        slideIndex = 0;
    } else if (n < 0) {
        slideIndex = totalSlides - 1;
    } else {
        slideIndex = n;
    }
    const offset = -slideIndex * 100;
    document.querySelector('.slide-wrapper').style.transform = `translateX(${offset}vw)`;
}

// Automatic slide change
setInterval(() => {
    showSlide(slideIndex + 1);
}, 4000);