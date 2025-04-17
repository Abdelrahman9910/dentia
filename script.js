document.addEventListener('DOMContentLoaded', function() {
    const sideNav = document.getElementById('mySideNav');
    const openBtn = document.querySelector('.nav-open-btn');
    const closeBtn = document.querySelector('.close-btn');
    const overlay = document.querySelector('.overlay');
    const navLinks = document.querySelectorAll('.side-nav a:not(.close-btn)');
    
    // Open navbar
    openBtn.addEventListener('click', function() {
        sideNav.style.width = '250px';
        overlay.style.display = 'block';
        document.body.style.marginLeft = '250px';
    });
    
    // Close navbar with close button
    closeBtn.addEventListener('click', closeNav);
    
    // Close navbar when clicking on overlay (anywhere outside)
    overlay.addEventListener('click', closeNav);
    
    // Close navbar when clicking on any link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Close after a small delay to allow the click to register
            setTimeout(closeNav, 100);
        });
    });
    
    function closeNav() {
        sideNav.style.width = '0';
        overlay.style.display = 'none';
        document.body.style.marginLeft = '0';
    }
});