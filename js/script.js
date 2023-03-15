"use strict";

const hamburgerMenuBtn = document.getElementById('hamburger-menu');

hamburgerMenuBtn.addEventListener('click', () => {
    const navBar = document.querySelector('.nav__list');
    navBar.classList.remove('slider__open');
    navBar.classList.add('slider__close');
});

const menuCloseBtn = document.getElementById('close-menu');

menuCloseBtn.addEventListener('click', () => {
    const navBar = document.querySelector('.nav__list');
    navBar.classList.remove('slider__close');
    navBar.classList.add('slider__open');
});