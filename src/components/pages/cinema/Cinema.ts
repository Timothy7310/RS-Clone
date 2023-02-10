import Page from '../Page';
import billboardTemplate from '../../templates/billboard';

export default class Cinema {
    page: Page;

    container: HTMLElement;

    path: string | undefined;

    constructor(path?: string) {
        this.page = new Page(path);
        this.container = this.page.draw();
    }

    draw(): HTMLElement {
        this.container.classList.add('cinema');
        this.container.innerHTML = billboardTemplate;
        return this.container;
    }

    clear(): void {
        this.page.clear();
    }
}
