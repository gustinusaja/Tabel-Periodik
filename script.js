// script.js
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.element');
    elements.forEach(element => {
        element.addEventListener('click', () => {
            alert(`Element: ${element.querySelector('.name').textContent}`);
        });
    });
});
