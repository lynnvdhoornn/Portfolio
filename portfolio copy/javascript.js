console.log("hi");

// cursor
document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.querySelector('.cursor');

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });
});


// titles floating
document.addEventListener("DOMContentLoaded", function() {
    // Selecteer h2's (met uitzondering van die in de 4e sectie), afbeeldingen, div's in de 2e en 4e sectie
    const elements = document.querySelectorAll('header h1, header img, h2, header p, section ul:first-of-type, h3, p:not(footer)');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target); // Stop met observeren zodra het element zichtbaar is
            }
        });
    }, { threshold: 0.5 });

    // Observeer alle geselecteerde elementen (h2's, afbeeldingen, div's in de 2e en 4e sectie)
    elements.forEach(element => {
        observer.observe(element);
    });
});