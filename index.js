document.addEventListener("DOMContentLoaded", () => {
    const linfoSection = document.querySelector(".linfo");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                document.querySelector(".heading").classList.add("animate");
                document.querySelector(".subheading").classList.add("animate");
                document.querySelector(".text").classList.add("animate");
            }
        });
    });
    observer.observe(linfoSection);
    
    let h = document.querySelector('.ham img');
    let bg = document.querySelector('.hmenu');
    
    h.addEventListener('click', function () {
        if (h.getAttribute('src') === 'images/ham.png') {
            bg.style.left = '0';
            h.src = 'images/cross.png';
        } else {
            bg.style.left = '-100%';
            h.src = 'images/ham.png';
        }
    });

    // Close the menu and change the icon when a menu item is clicked
    document.querySelectorAll('.hmenu .navbar a').forEach(menuItem => {
        menuItem.addEventListener('click', function () {
            // Close the menu
            bg.style.left = '-100%';
            // Change icon to hamburger
            h.src = 'images/ham.png';
        });
    });
});
