// Mobile menu functionality
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const topbar = document.querySelector('.topbar');

mobileMenuToggle.addEventListener('click', () => {
    topbar.classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!topbar.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
        topbar.classList.remove('active');
    }
});

// Close mobile menu when clicking a navigation link
document.querySelectorAll('.topbar button').forEach(button => {
    button.addEventListener('click', () => {
        topbar.classList.remove('active');
    });
});

// Section navigation
function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    const newSection = document.getElementById(sectionId);
    newSection.classList.add('active');
}

// Gallery functionality
function changeImage(src) {
    const mainDisplay = document.getElementById('mainDisplay');
    mainDisplay.src = src;
}

function scrollThumbnails(direction) {
    const thumbnailsScroll = document.getElementById('thumbnailsScroll');
    const scrollAmount = 200;
    thumbnailsScroll.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
    });
}
