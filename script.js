const hamburgerMenu = document.getElementById('hamburger-menu')
const topNav = document.querySelector('.top-nav')

hamburgerMenu.addEventListener('click', function() {
    topNav.classList.toggle('active')
})