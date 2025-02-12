// Scroll Animations
const fadeIns = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, { threshold: 0.5 });

fadeIns.forEach(fadeIn => {
  observer.observe(fadeIn);
});

// Parallax Effect for Hero Section
window.addEventListener('scroll', () => {
  const hero = document.querySelector('.hero');
  const scrollPosition = window.scrollY;
  hero.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
});

const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;

// Function to show the current slide
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

// Function to go to the next slide
function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

// Function to go to the previous slide
function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
}


// Event listeners for dots
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        showSlide(currentIndex);
    });
});

// Auto-play functionality (optional)
setInterval(nextSlide, 3000);