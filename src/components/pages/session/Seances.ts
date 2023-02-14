import Page from '../Page';
import seancesTemplates from '../../templates/seances';

export default class Seances {
    page: Page;

    container: HTMLElement;

    path: string | undefined;

    constructor(path?: string) {
        this.page = new Page(path);
        this.container = this.page.draw();
    }

    draw(): HTMLElement {
        this.container.innerHTML = seancesTemplates;
        return this.container;
    }

    clear(): void {
        this.page.clear();
    }
}
