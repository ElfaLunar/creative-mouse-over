const banner = document.querySelector('.banner');

banner.addEventListener('mousemove', function(e) {
    const rect = banner.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    banner.style.setProperty('--x', `${x}px`);
    banner.style.setProperty('--y', `${y}px`);
});
