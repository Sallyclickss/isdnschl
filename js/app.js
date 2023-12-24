document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.carousel');
    const slides = document.querySelectorAll('.slide');

    let slideIndex = 0;
    const totalSlides = slides.length;

    function showSlides(index) {
        if (index < 0) {
            slideIndex = totalSlides - 1;
        } else if (index >= totalSlides) {
            slideIndex = 0;
        }

        carousel.style.transform = `translateX(-${slideIndex * 100}%)`;
    }

    function nextSlide() {
        slideIndex++;
        showSlides(slideIndex);
    }

    function prevSlide() {
        slideIndex--;
        showSlides(slideIndex);
    }

    document.querySelector('.prev-button').addEventListener('click', prevSlide);
    document.querySelector('.next-button').addEventListener('click', nextSlide);

    showSlides(slideIndex);

    // Automatic slide change every 2 seconds
    setInterval(() => {
        slideIndex++;
        showSlides(slideIndex);
    }, 2000);
});




// Array of image URLs for the slideshow
const images = [
'images/back.jpg',
'images/bck2.jpg',
'images/bck3.jpg',
// Add more image URLs as needed
];

let currentIndex = 0;

function changeBackground() {
    document.body.style.backgroundImage = `url('${images[currentIndex]}')`;
    currentIndex = (currentIndex + 1) % images.length; // Loop through the images
}

// Change background every 5 seconds (5000 milliseconds)
setInterval(changeBackground, 5000);