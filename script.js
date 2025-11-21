document.addEventListener('DOMContentLoaded', () => {
    // 1. Get the menu button and the navigation links container
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    // 2. Add an event listener to the button
    menuToggle.addEventListener('click', () => {
        // Toggle the 'active' class on the nav links for visibility
        navLinks.classList.toggle('active');
        
        // Optional: Change the icon (bars to times/close)
        const icon = menuToggle.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
    
    // 3. Close the menu when a link is clicked (useful on mobile)
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                navLinks.classList.remove('active');
                menuToggle.querySelector('i').classList.remove('fa-times');
                menuToggle.querySelector('i').classList.add('fa-bars');
            }
        });
    });

    // Note: A real contact form would require backend code (PHP, Node.js, etc.) 
    // to actually send the email. This JS only handles the frontend toggle.
});