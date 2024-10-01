const feedbackItems = document.querySelectorAll('.feedback-item');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentIndex = 0;
const itemsPerPage = 3; // Количество отображаемых отзывов

function updateFeedbackDisplay() {
    feedbackItems.forEach((item, index) => {
        item.classList.remove('active');
        if (index >= currentIndex && index < currentIndex + itemsPerPage) {
            item.classList.add('active');
        }
    });
    
    // Управление видимостью кнопок
    prevBtn.style.display = currentIndex > 0 ? 'block' : 'none';
    nextBtn.style.display = currentIndex < feedbackItems.length - itemsPerPage ? 'block' : 'none';
}

function showNext() {
    if (currentIndex < feedbackItems.length - itemsPerPage) {
        currentIndex++;
    }
    updateFeedbackDisplay();
}

function showPrev() {
    if (currentIndex > 0) {
        currentIndex--;
    }
    updateFeedbackDisplay();
}

prevBtn.addEventListener('click', showPrev);
nextBtn.addEventListener('click', showNext);

updateFeedbackDisplay(); // Инициализируем отображение
