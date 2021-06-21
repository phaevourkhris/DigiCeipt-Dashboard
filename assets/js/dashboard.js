navMenu = document.querySelector('span.navmenu')
navBar = document.querySelector('nav')
closeNav = document.querySelector('span.closeNav')
section = document.querySelector('section')
navMenuClick = 0
const showMenu = () => {navBar.style.transform = 'translateY(0%)'
section.style.display = 'none'}
const hideMenu = () => {navBar.style.transform = 'translateY(-100%)'
section.style.display = 'block'}
navMenu.addEventListener(
    'click', showMenu
)
closeNav.addEventListener(
    'click', hideMenu
)

checkBox = document.querySelector('input[type="checkbox"]')
scheduleInput = document.querySelector('input[type="date"]')
const schedule = () => {
    scheduleInput.disabled = !scheduleInput.disabled
}
checkBox.addEventListener('click', schedule
)