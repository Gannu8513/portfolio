const header = document.querySelector(".header")
const mobile_nav = document.querySelector(".mobile_navbar")

const toggleNav = () => {
    header.classList.toggle("active")
}
mobile_nav.addEventListener('click', () => toggleNav())