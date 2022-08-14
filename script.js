const hamburgerMenu = document.getElementById('hamburger-menu')
hamburgerMenu.addEventListener('click', display)

function display() {
    var x = document.getElementById("myLinks")
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
    // const div = document.createElement('div')
    // div.setAttribute('style', 'width: 100px; height: auto;')
    // div.innerHTML = `
    // <a href="#">Home</a>
    // <a href="#">Pricing</a>
    // <a href="#">FAQ</a>
    // `
    // hamburgerMenu.appendChild(div)
    //hamburgerMenu.style.backgroundColor = 'blue';
}