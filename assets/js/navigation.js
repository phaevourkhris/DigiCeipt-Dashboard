const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".fa-times");
const menuBar = document.querySelector(".menu-bar");
const nav = document.querySelector(".nav");

menuIcon.addEventListener('click', show);
closeIcon.addEventListener('click', show);

function show(){
    nav.classList.toggle("d-none");
    menuIcon.classList.toggle("d-none");
    closeIcon.classList.toggle("d-none");
    // closeIcon.classList.add("menu-icon");
    menuBar.classList.toggle("align-items-center");
    menuBar.classList.toggle("align-items-baseline");
}