const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav__links');
const navLinks = document.querySelectorAll('.nav__links li')


const navSlide = () => {
    burger.addEventListener('click', () => {
        //Toggle nav--active
        nav.classList.toggle('nav--active');
        //Animation
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 500ms ease forwards ${index / 7 + 0.55}s`;
            }
        });
        burger.classList.toggle('close');
    });
}

const app = () => {
    navSlide(); //burger animation
}

app();