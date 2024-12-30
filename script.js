// Placeholder for future JavaScript functionality
console.log("MWCashPh website loaded successfully.");

let currentIndex = 0;
        const slider = document.querySelector('.slider');
        const slides = document.querySelectorAll('.slide');
        const totalSlides = slides.length;

        function moveSlide(direction) {
            currentIndex = (currentIndex + direction + totalSlides) % totalSlides;
            slider.style.transform = `translateX(-${currentIndex * 100}%)`;
        }

        function autoplay() {
            moveSlide(1);
        }

        let autoplayInterval = setInterval(autoplay, 3000);

        document.querySelector('.slider-container').addEventListener('mouseenter', () => {
            clearInterval(autoplayInterval);
        });

        document.querySelector('.slider-container').addEventListener('mouseleave', () => {
            autoplayInterval = setInterval(autoplay, 3000);
        });

function toggleFaq(button) {
    const content = button.nextElementSibling;
    const allFaqs = document.querySelectorAll('.faq-item .content');
    const allButtons = document.querySelectorAll('.faq-item button span');

    allFaqs.forEach(item => {
        if (item !== content) item.style.display = 'none';
    });

    allButtons.forEach(span => {
        span.textContent = '+';
    });

    const isVisible = content.style.display === 'block';
    content.style.display = isVisible ? 'none' : 'block';
    button.querySelector('span').textContent = isVisible ? '+' : '-';
}