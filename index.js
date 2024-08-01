let currentIndex = 0;

    function showSlide(index) {
        const slides = document.querySelector('.slides');
        const dots = document.querySelectorAll('.dot');

        if (index >= slides.children.length) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = slides.children.length - 1;
        } else {
            currentIndex = index;
        }

        slides.style.transform = `translateX(-${currentIndex * 100}%)`;
        
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === currentIndex);
        });
    }

    function currentSlide(index) {
        showSlide(index);
    }

    // Автоматическое переключение слайдов каждые 5 секунд (по желанию)
    setInterval(() => {
        showSlide(currentIndex + 1);
    }, 5000);

    // Изначально отображаем первый слайд
    showSlide(currentIndex);