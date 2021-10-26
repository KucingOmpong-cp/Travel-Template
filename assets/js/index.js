// global variable
let navbar = document.getElementById('navbar');
let home = document.getElementById('home');

// scroll navbar
window.addEventListener("scroll", function(){
    navbar.classList.toggle("scroll", window.scrollY > 0);
    home.classList.toggle("scroll", window.scrollY > 0);
})

function toggleActive() {
    document.getElementById("burger").classList.toggle("active");
    navbar.classList.toggle("active");
}