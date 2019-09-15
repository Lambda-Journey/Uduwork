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

const scrollAppearTitle = () => {
    let title = document.querySelector('#freelancers');
    let introPosition = title.getBoundingClientRect().top;
    let screePosition = window.innerHeight / 1.2;

    if (introPosition < screePosition) {
        title.classList.add('appear');
    }
}

window.addEventListener('scroll', scrollAppearTitle);



const scrollAppearLeftTitle = () => {
    let lefttitle = document.querySelector('.section-b__container__left');
    let introPosition = lefttitle.getBoundingClientRect().top;
    let screePosition = window.innerHeight / 1.2;

    if (introPosition < screePosition) {
        lefttitle.classList.add('appear');
    }
}

const scrollAppearTitle2 = () => {
    let title2 = document.querySelector('#usuarios');
    let introPosition = title2.getBoundingClientRect().top;
    let screePosition = window.innerHeight / 1.2;

    if (introPosition < screePosition) {
        title2.classList.add('appear');
    }
}

window.addEventListener('scroll', scrollAppearLeftTitle);




















const app = () => {
    navSlide(); //burger animation
}

app();