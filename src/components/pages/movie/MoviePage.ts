import Page from '../Page';
import Basic from './section/basic';

export default class Movie {
    page: Page;

    container: HTMLElement;

    path: string | undefined;

    basic: Basic;

    constructor(path?: string) {
        this.page = new Page(path);
        this.container = this.page.draw();
        this.basic = new Basic();
    }

    draw(): HTMLElement {
        this.basic.draw(this.container);
        return this.container;
    }

    clear(): void {
        this.page.clear();
    }
}
