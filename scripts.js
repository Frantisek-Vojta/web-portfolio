// Typing Effect
const textArray = ["Main developer on crimsonSMP", "Java developer", "Web developer", "Discord bot developer",];
let textIndex = 0;
let charIndex = 0;
const typingSpeed = 100;
const eraseSpeed = 50;
const pauseDuration = 2000;

function type() {
    if (charIndex < textArray[textIndex].length) {
        document.getElementById("type-effect").textContent += textArray[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingSpeed);
    } else {
        setTimeout(erase, pauseDuration);
    }
}

function erase() {
    if (charIndex > 0) {
        document.getElementById("type-effect").textContent = textArray[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, eraseSpeed);
    } else {
        textIndex = (textIndex + 1) % textArray.length;
        setTimeout(type, typingSpeed + 100);
    }
}


type();


const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav a");

window.onscroll = () => {
    let current = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute("id");
        }
    });

    navLi.forEach((li) => {
        li.classList.remove("active");
        if (li.getAttribute("href").substring(1) === current) {
            li.classList.add("active");
        }
    });
};

// Smooth scrolling behavior
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        const headerOffset = document.querySelector('header').offsetHeight; // Height of the header
        const elementPosition = targetSection.getBoundingClientRect().top; // Position of the target section
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset; // Adjust for header height

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth' // Smooth scroll
        });
    });
});