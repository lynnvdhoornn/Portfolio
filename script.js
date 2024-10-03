console.log("hi");

// cursor
document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.querySelector('.cursor');

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });
});



// image rotation
const rotatingImage = document.querySelector('header img:first-of-type');

function updateRotation() {
    const scrollPosition = window.scrollY;
    const rotationAngle = scrollPosition * 0.2;
    rotatingImage.style.transform = `rotate(${rotationAngle}deg)`;
}

window.addEventListener('scroll', updateRotation);



// floating list-items
document.addEventListener("DOMContentLoaded", function() {
    const skillItems = document.querySelectorAll('section:nth-of-type(3) li');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view'); 
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    skillItems.forEach(item => {
        observer.observe(item);
    });
});



// idkkkkkkkkkkkkk (kan weg)
document.addEventListener("DOMContentLoaded", () => {
    const sectionDiv = document.querySelector("section:nth-of-type(2) div");
    
    function handleScroll() {
        const rect = sectionDiv.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top < windowHeight && rect.bottom >= 0) {
            sectionDiv.classList.add("in-view");
        } else {
            sectionDiv.classList.remove("in-view");
        }
    }

    window.addEventListener("scroll", handleScroll);

    handleScroll();
});



// titles floating
document.addEventListener("DOMContentLoaded", function() {
    // Selecteer h2's (met uitzondering van die in de 4e sectie), afbeeldingen, div's in de 2e en 4e sectie
    const elements = document.querySelectorAll('section h2:not(section:nth-of-type(4) h2), section img, section:nth-of-type(2) div, section:nth-of-type(4) div');

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




// moving text while scrolling
const uxUiSpan = document.querySelector('section:nth-of-type(3) h2 span:first-child');
const skillsSpan = document.querySelector('section:nth-of-type(3) h2 span:last-child');

window.addEventListener('scroll', () => {
    const section = document.querySelector('section:nth-of-type(3)');
    const sectionPosition = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    const scrollPercentage = Math.min(Math.max(0, (windowHeight - sectionPosition) / windowHeight), 1);

    uxUiSpan.style.transform = `translateX(${(-30 + scrollPercentage * 30)}%)`;
    skillsSpan.style.transform = `translateX(${(30 - scrollPercentage * 30)}%)`;
});
