const hamburger = document.querySelector('.hide-btn')
const hidenav = document.querySelector('.hide_nav')

hamburger.addEventListener("click", (e) => {
    hidenav.classList.toggle("hide_nav")
})