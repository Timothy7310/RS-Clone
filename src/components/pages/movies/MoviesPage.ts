import Page from '../Page';
import moviesTemplates from '../../templates/movies';

export default class MoviesPage {
    page: Page;

    container: HTMLElement;

    path: string | undefined;

    constructor(path?: string) {
        this.page = new Page(path);
        this.container = this.page.draw();
    }

    draw(): HTMLElement {
        this.container.innerHTML = moviesTemplates;
        return this.container;
    }

    clear(): void {
        this.page.clear();
    }
}
