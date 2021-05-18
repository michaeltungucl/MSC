const burgerToggle = () => {
    const burger = document.querySelector('.nav--burger');
    const nav = document.querySelector('.nav__links');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav--active');

        const img1 = "http://127.0.0.1:5500/images/hamburger.svg";
        const img2 = "http://127.0.0.1:5500/images/cross.svg";

        burger.src = (burger.src === img1) ? img2 : img1;
    });
}

const burgerLinkToggle = () => {
    const link = document.querySelector('.nav__link--onboard');
    const onBoard = document.querySelector('.nav__onboard');
    const arrow = document.querySelector('.arrow-down');

    link.addEventListener('click', () => {
        onBoard.classList.toggle('nav__onboard--active');

        const img1 = "http://127.0.0.1:5500/images/arrow-down.svg";
        const img2 = "http://127.0.0.1:5500/images/arrow-up.svg";

        arrow.src = (arrow.src === img1) ? img2 : img1;
        console.log(arrow.src)
    })
}

const footerLinkToggle = () => {
    const link1 = document.querySelector('.footer__title--link');
    const institutionalInfo = document.querySelector('.footer__institutionalInfo');
    const arrow = document.querySelector('.plus');

    link1.addEventListener('click', (e) => {
        institutionalInfo.classList.toggle('footer__info--active');

        const img1 = "http://127.0.0.1:5500/images/minus.svg";
        const img2 = "http://127.0.0.1:5500/images/add.svg";

        arrow.src = (arrow.src === img1) ? img2 : img1;
        console.log(arrow.src);
    })
}

burgerLinkToggle();
burgerToggle();
footerLinkToggle();