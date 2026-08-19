const banner = document.querySelector('.banner');

banner.addEventListener('mousemove', function(event) {

    const rect = banner.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    banner.style.setProperty('--x', `${x}px`);
    banner.style.setProperty('--y', `${y}px`);

    banner.classList.add('active');
});
