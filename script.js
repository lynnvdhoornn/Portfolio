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
const rotatingImages = document.querySelectorAll('header img:first-of-type, section:nth-of-type(5) img');

function updateRotation() {
    const scrollPosition = window.scrollY;
    const rotationAngle = scrollPosition * 0.2;

    rotatingImages.forEach(image => {
        image.style.transform = `rotate(${rotationAngle}deg)`;
    });
}

window.addEventListener('scroll', updateRotation);




// floating list-items
document.addEventListener("DOMContentLoaded", function() {
    const skillItems = document.querySelectorAll('section:nth-of-type(4) li');

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
    const elements = document.querySelectorAll('section h2:not(section:nth-of-type(3) h2), section img, section:nth-of-type(2) div, section:nth-of-type(5) div');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target); // Stop met observeren zodra het element zichtbaar is
            }
        });
    }, { threshold: 0.5 });

    elements.forEach(element => {
        observer.observe(element);
    });
});




// moving text while scrolling
const scrollRight = document.querySelector('section:nth-of-type(3) span:first-of-type');
const scrollLeft = document.querySelector('section:nth-of-type(3) span:last-of-type');

window.addEventListener('scroll', () => {
    const scrollAmount = window.scrollY;

    let rightTranslate = scrollAmount / 5 - 580; 
    let leftTranslate = -scrollAmount / 5 + 500; 

    scrollRight.style.transform = `translateX(${rightTranslate}px)`;
    scrollLeft.style.transform = `translateX(${leftTranslate}px)`;
});