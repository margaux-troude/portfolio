function downloadCV() {
    window.open('cv.pdf', '_blank');
}

document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.project-card');
    cards.forEach(card => {
        card.addEventListener('mouseover', () => {
            card.style.boxShadow = '0 4px 20px rgba(255, 255, 255, 0.2)';
        });

        card.addEventListener('mouseout', () => {
            card.style.boxShadow = 'none';
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    const projects = document.querySelectorAll('.project-card');
    const buttons = document.querySelectorAll('.buttons button, .buttons .btn');

    header.style.opacity = '0';
    header.style.transform = 'translateY(-50px)';
    setTimeout(() => {
        header.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        header.style.opacity = '1';
        header.style.transform = 'translateY(0)';
    }, 100);

    buttons.forEach((button, index) => {
        button.style.opacity = '0';
        button.style.transform = 'scale(0.9)';
        setTimeout(() => {
            button.style.transition = `opacity 0.5s ease ${index * 0.2}s, transform 0.5s ease ${index * 0.2}s`;
            button.style.opacity = '1';
            button.style.transform = 'scale(1)';
        }, 200);
    });

    projects.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        setTimeout(() => {
            card.style.transition = `opacity 0.6s ease ${index * 0.2 + 0.5}s, transform 0.6s ease ${index * 0.2 + 0.5}s`;
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 300);
    });
});

