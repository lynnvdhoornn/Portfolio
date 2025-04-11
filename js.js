// h1
document.addEventListener("DOMContentLoaded", function () {
    let title = document.querySelector("header h1"); // Selecteert de <h1> binnen <header>
    if (title) {
        title.style.transform = "rotate(-90deg)";
        title.style.transformOrigin = "left bottom"; // Pas dit aan als de rotatie niet goed uitkomt
    }
});


// image rotation
const rotatingImages = document.querySelectorAll('header img:nth-of-type(2)');

function updateRotation() {
    const scrollPosition = window.scrollY;
    const rotationAngle = scrollPosition * 0.2;

    rotatingImages.forEach(image => {
        image.style.transform = `rotate(${rotationAngle}deg)`;
    });
}

window.addEventListener('scroll', updateRotation);