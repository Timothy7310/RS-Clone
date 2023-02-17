export default class Burger {
    hamburger: Element;

    menu: Element;

    menuCloseItem: Element;

    menuBg: Element;

    constructor() {
        this.hamburger = document.querySelector('.header__logo-lines') as HTMLElement;
        this.menu = document.querySelector('.burger__menu') as HTMLElement;
        this.menuCloseItem = document.querySelector('.close_burger') as HTMLElement;
        this.menuBg = document.querySelector('.burger__background') as HTMLElement;
    }

    listen() {
        this.hamburger.addEventListener('click', this.openMenu.bind(this));
        this.menuBg.addEventListener('click', this.closeMenu.bind(this));
        this.menuCloseItem.addEventListener('click', this.closeMenu.bind(this));
    }

    openMenu() {
        this.menuBg.classList.add('active');
        this.menu.classList.add('active');
    }

    closeMenu() {
        this.menuBg.classList.remove('active');
        this.menu.classList.remove('active');
    }
}
