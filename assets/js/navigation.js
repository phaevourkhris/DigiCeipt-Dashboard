const menuIcon = document.querySelector(".menu-icon");
const menuBar = document.querySelector(".menu-bar");
const nav = document.querySelector(".nav");

menuIcon.addEventListener('click', show);

function show(){
    nav.classList.toggle("d-none");
    menuBar.classList.toggle("align-items-center");
    menuBar.classList.toggle("align-items-baseline");
    menuIcon.classList.toggle("fa-times");
}