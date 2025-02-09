// Smooth Scrolling for Navbar Links
document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Display alert when clicking contact info
document.querySelector('#contact').addEventListener('click', function () {
    alert("Feel free to reach out to me!");
});
