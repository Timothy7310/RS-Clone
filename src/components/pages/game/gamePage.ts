import Page from '../Page';

export default class GamePage {
    page: Page;

    container: HTMLElement;

    path: string | undefined;

    constructor(path?: string, id?: string) {
        this.page = new Page(path);
        this.container = this.page.draw();
    }

    draw(): HTMLElement {
        this.basic.draw(this.container, this.id);
        return this.container;
    }

    clear(): void {
        this.page.clear();
    }
}
