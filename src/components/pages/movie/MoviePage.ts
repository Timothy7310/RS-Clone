import Page from '../Page';
import Basic from './section/basic';
import Prequels from './section/prequels';

export default class Movie {
    page: Page;

    container: HTMLElement;

    path: string | undefined;

    basic: Basic;

    prequels: Prequels;

    constructor(path?: string) {
        this.page = new Page(path);
        this.container = this.page.draw();
        this.basic = new Basic();
        this.prequels = new Prequels();
    }

    draw(): HTMLElement {
        this.basic.draw(this.container);
        this.prequels.draw(this.container);
        return this.container;
    }

    clear(): void {
        this.page.clear();
    }
}
