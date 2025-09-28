// FAQ Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-question');
    faqItems.forEach(item => {
        item.addEventListener('click', function() {
            const parent = this.parentElement;
            parent.classList.toggle('active');
            // Close other FAQs
            const allFaqs = document.querySelectorAll('.faq-item');
            allFaqs.forEach(faq => {
                if (faq !== parent && faq.classList.contains('active')) {
                    faq.classList.remove('active');
                }
            });
        });
    });

    // Showcase Slider Functionality
    const slider = document.getElementById('showcaseSlider');
    const prevBtn = document.querySelector('.showcase-nav.prev');
    const nextBtn = document.querySelector('.showcase-nav.next');
    const dots = document.querySelectorAll('.showcase-dot');

    let currentSlide = 0;
    const totalSlides = dots.length;

    function updateSlider() {
        slider.style.transform = `translateX(${-currentSlide * 100}%)`;
        prevBtn.disabled = currentSlide === 0;
        nextBtn.disabled = currentSlide === totalSlides - 1;
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    }

    prevBtn.addEventListener('click', () => {
        if (currentSlide > 0) {
            currentSlide--;
            updateSlider();
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentSlide < totalSlides - 1) {
            currentSlide++;
            updateSlider();
        }
    });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            updateSlider();
        });
    });

    updateSlider();
});