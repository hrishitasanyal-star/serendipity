const lightboxLinks = document.querySelectorAll('.lightbox');
const overlay = document.createElement('div');
overlay.classList.add('lightbox-overlay');
document.body.appendChild(overlay);

lightboxLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const img = document.createElement('img');
        img.src = link.href;
        overlay.innerHTML = '';
        overlay.appendChild(img);
        overlay.classList.add('active');
    });
});

overlay.addEventListener('click', () => {
    overlay.classList.remove('active');
});
