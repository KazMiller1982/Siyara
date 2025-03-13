// Gallery Filter
function filterGallery(category) {
    const items = document.querySelectorAll('.gallery-item');
    items.forEach(item => {
        item.style.display = 
            category === 'all' || item.classList.contains(category) 
            ? 'block' 
            : 'none';
    });
}

// Countdown Timer
function countdown() {
    const eventDate = new Date('May 23, 2025 15:00:00').getTime();
    const timer = setInterval(function () {
        const now = new Date().getTime();
        const distance = eventDate - now;

        if (distance <= 0) {
            document.getElementById('countdown').innerHTML = "Event Ongoing!";
            clearInterval(timer);
        } else {
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            document.getElementById('countdown').innerHTML = `Event Starts in ${days} days`;
        }
    }, 1000);
}
countdown();

// Contact Form Confirmation
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('confirmation').classList.remove('hidden');
    setTimeout(() => {
        document.getElementById('confirmation').classList.add('hidden');
    }, 3000);
});
