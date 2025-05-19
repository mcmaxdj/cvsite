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

function handleNavClick(event) {
    event.preventDefault();
    const targetId = event.target.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
        document.getElementById('mobileMenu').classList.remove('show');
    }
}