document.addEventListener('DOMContentLoaded', function () {
    const categories = document.querySelectorAll('.header_top_menu_first ul li');
    const subMenus = document.querySelectorAll('.menu-category');

    // Показуємо перше підменю за замовчуванням
    subMenus[0].classList.add('active');

    categories.forEach((category, index) => {
        category.addEventListener('click', function () {
            // Скидаємо активність для всіх підменю
            subMenus.forEach(menu => menu.classList.remove('active'));

            // Додаємо клас active тільки для вибраного підменю
            subMenus[index].classList.add('active');
        });
    });
});
