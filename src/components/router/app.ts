import Router, { IRouter } from './Router';
import Cinema from '../pages/cinema/Cinema';
import Burger from '../utils/burger';

const rootElement = document.querySelector('#content');

export default class App {
    router!: IRouter;

    cinema;

    burger;

    constructor() {
        if (rootElement) {
            this.router = new Router(rootElement);
        }
        this.cinema = new Cinema();
        this.burger = new Burger();
    }

    start() {
        this.drawContent();
        this.initEvent();
        this.burger.listen();
    }

    drawContent() {
        this.router.listen();
        this.router.navigateToPage();
    }

    initEvent() {
        const bodyDOM = document.querySelector('body') as HTMLElement;

        bodyDOM.addEventListener('click', (e) => {
            const target = e.target as HTMLElement;

            this.cinema.cinemaEvent(target);
        });
    }
}
