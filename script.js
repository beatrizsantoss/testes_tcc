let index = 0;

const items = document.querySelectorAll('.carrossel-item');
const totalItems = items.length;

document.querySelector('.next').addEventListener('click', () => {
    index = (index + 1) % totalItems;
    updateCarousel();
});

document.querySelector('.prev').addEventListener('click', () => {
    index = (index - 1 + totalItems) % totalItems;
    updateCarousel();
});

function updateCarousel() {
    const newTransformValue = -index * 897; // Largura do carrossel
    document.querySelector('.carrossel-inner').style.transform = `translateX(${newTransformValue}px)`;
}
