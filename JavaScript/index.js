const hamburger_menu = document.querySelector(".hamburger-menu");
const nav_menu = document.querySelector(".nav-bar");

hamburger_menu.addEventListener('click', () => {
	hamburger_menu.classList.toggle("active");
	nav_menu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener('click', () => {
	hamburger_menu.classList.remove("active");
	nav_menu.classList.remove("active");
}));