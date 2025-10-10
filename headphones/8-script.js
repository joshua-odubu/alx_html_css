 const menuIcon = document.getElementById('menu-icon');
        const navMenu = document.getElementById('nav-menu');

        menuIcon.addEventListener('click', () => {
            // Toggle active state
            menuIcon.classList.toggle('active');
            navMenu.classList.toggle('active');
        });