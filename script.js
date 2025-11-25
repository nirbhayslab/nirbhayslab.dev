const btn = document.getElementById('mobileMenuBtn');
const menu = document.getElementById('mobileMenu');

btn.addEventListener('click', () => {
    menu.classList.toggle('active');
});

    // Auto-hide menu when clicking a link
    menu.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            menu.classList.remove('active');
        });
    });
