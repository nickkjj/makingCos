// Simple interaction: Add shadow/glass effect to navbar on scroll
const navbar = document.getElementById('navbar');

if (navbar) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            navbar.classList.add('shadow-md');
            navbar.classList.replace('bg-offwhite/90', 'bg-white/95');
        } else {
            navbar.classList.remove('shadow-md');
            navbar.classList.replace('bg-white/95', 'bg-offwhite/90');
        }
    });
}
