const menu_button = document.querySelector('.buttons-div');
const menu = document.querySelector('.menu');
const menu_photo = document.querySelector('.menu-photo');
const menu_links = document.querySelector('.menu-links');
const link_items = document.querySelectorAll('.link-item');

let showMenu = false;
menu_button.addEventListener('click', toggleMenu);

function toggleMenu () {
    if(!showMenu) {
        menu_button.classList.add('close');
        menu.classList.add('show');
        menu_photo.classList.add('show');
        menu_links.classList.add('show');
        link_items.forEach((item) => item.classList.add('show'));
        showMenu = true;
    } else {
        menu_button.classList.remove('close');
        menu.classList.remove('show');
        menu_photo.classList.remove('show');
        menu_links.classList.remove('show');
        link_items.forEach((item) => item.classList.remove('show'));
        showMenu = false;
    }
}