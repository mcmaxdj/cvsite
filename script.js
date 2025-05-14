function toggleMenu(event) {
    event?.stopPropagation();
    document.getElementById('mobileMenu').classList.toggle('show');
}
function handleBodyClick(event) {
const nav = document.getElementById('mobileMenu');
const isMenu = nav.contains(event.target);
const isBurger = event.target.classList.contains('burger');
    if (!isMenu && !isBurger && nav.classList.contains('show')) {
        nav.classList.remove('show');
    }
}