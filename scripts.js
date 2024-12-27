// Adding fade-in animation on scroll
document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            } else {
                entry.target.classList.remove("show");
            }
        });
    });

    sections.forEach(section => {
        section.classList.add("fade-in");
        observer.observe(section);
    });

    // Responsive Navbar Toggle
    const toggleButton = document.querySelector('.toggle');
    const navLinks = document.querySelector('nav ul');

    toggleButton.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });
});
