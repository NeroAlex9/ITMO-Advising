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
            dot.classList.toggle('active-dot', i === currentIndex);
        });
    }

    function currentSlide(index) {
        showSlide(index);
    }

    // Автоматическое переключение слайдов каждые 7 секунд
    setInterval(() => {
        showSlide(currentIndex + 1);
    }, 7000);

    // Изначально отображаем первый слайд
    showSlide(currentIndex);

document.querySelector('.green-btn').addEventListener('click', function() {
    document.querySelector('#join_us_id').scrollIntoView({
        behavior: 'smooth' 
    });
});


const feedbackItems = document.querySelectorAll('.feedback-item');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentIndex1 = 0;
const itemsPerPage = 3; // Количество отображаемых отзывов

function updateFeedbackDisplay() {
    feedbackItems.forEach((item, index) => {
        item.classList.remove('active');
        if (index >= currentIndex1 && index < currentIndex1 + itemsPerPage) {
            item.classList.add('active');
        }
    });
    
    // Управление видимостью кнопок
    prevBtn.style.display = currentIndex1 > 0 ? 'block' : 'none';
    nextBtn.style.display = currentIndex1 < feedbackItems.length - itemsPerPage ? 'block' : 'none';
}

function showNext() {
    if (currentIndex1 < feedbackItems.length - itemsPerPage) {
        currentIndex1++;
    }
    updateFeedbackDisplay();
}

function showPrev() {
    if (currentIndex1 > 0) {
        currentIndex1--;
    }
    updateFeedbackDisplay();
}

prevBtn.addEventListener('click', showPrev);
nextBtn.addEventListener('click', showNext);

updateFeedbackDisplay(); // Инициализируем отображение




