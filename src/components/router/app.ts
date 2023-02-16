import Router, { IRouter } from './Router';
import Cinema from '../pages/cinema/Cinema';

const rootElement = document.querySelector('#content');

export default class App {
    router!: IRouter;

    cinema;

    constructor() {
        if (rootElement) {
            this.router = new Router(rootElement);
        }
        this.cinema = new Cinema();
    }

    start() {
        this.drawContent();
        this.initEvent();
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
