// burger menu animation plus trigger
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav__links');
    const navLinks = document.querySelectorAll('.nav__links li')
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

// selects DOM element
const elementSelect = element => document.querySelector(element);
// applies .apear to the DOM element
const scrollAppear = (e) => {
    let introPosition = elementSelect(e).getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 1.2;

    if (introPosition < screenPosition) {
        elementSelect(e).classList.add('appear');
    }
}

const app = () => {
    navSlide(); //burger animation
    window.addEventListener('scroll', function () {
        scrollAppear('#freelancers');
    });
    window.addEventListener('scroll', function () {
        scrollAppear('#freelancers-text');
    });
    window.addEventListener('scroll', function () {
        scrollAppear('#freelancers-img');
    });
    window.addEventListener('scroll', function () {
        scrollAppear('#usuarios');
    });
    window.addEventListener('scroll', function () {
        scrollAppear('#usuarios-text');
    });
    window.addEventListener('scroll', function () {
        scrollAppear('#usuarios-img');
    });
    window.addEventListener('scroll', function () {
        scrollAppear('#servicios');
    });
    window.addEventListener('scroll', function () {
        scrollAppear('#c-container');
    });
}

app();