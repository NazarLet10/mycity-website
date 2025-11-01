// Простий JavaScript для додавання інтерактивності
document.addEventListener('DOMContentLoaded', function() {
    console.log('Сайт завантажено успішно!');
    
    // Додаємо клас активного посилання до поточної сторінки
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
});



// Простий JavaScript для додавання інтерактивності
document.addEventListener('DOMContentLoaded', function() {
    console.log('Сайт завантажено успішно!');
    
    // Додаємо клас активного посилання до поточної сторінки
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
});