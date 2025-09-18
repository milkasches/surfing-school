const menuBtn = document.querySelector('.menu__btn');
const menu = document.querySelector('.menu');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('menu--open');
    
    // Анимация полосок гамбургера
    const spans = menuBtn.querySelectorAll('span');
    spans.forEach((span, index) => {
        if (menu.classList.contains('menu--open')) {
            // Превращаем в крестик
            if (index === 0) {
                span.style.transform = 'rotate(45deg) translate(5px, 5px)';
            } else if (index === 1) {
                span.style.opacity = '0';
            } else if (index === 2) {
                span.style.transform = 'rotate(-45deg) translate(7px, -6px)';
            }
        } else {
            // Возвращаем в гамбургер
            span.style.transform = 'none';
            span.style.opacity = '1';
        }
    });
});

// Закрытие меню при клике на ссылку
const menuLinks = document.querySelectorAll('.menu__link');
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('menu--open');
        
        // Возвращаем полоски в исходное состояние
        const spans = menuBtn.querySelectorAll('span');
        spans.forEach(span => {
            span.style.transform = 'none';
            span.style.opacity = '1';
        });
    });
});

// Закрытие меню при клике вне его области
document.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && !menuBtn.contains(e.target)) {
        menu.classList.remove('menu--open');
        
        // Возвращаем полоски в исходное состояние
        const spans = menuBtn.querySelectorAll('span');
        spans.forEach(span => {
            span.style.transform = 'none';
            span.style.opacity = '1';
        });
    }
});