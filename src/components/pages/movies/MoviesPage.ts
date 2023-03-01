import Page from '../Page';
import MoviesTop from './movies';

export default class MoviesPage {
    page: Page;

    container: HTMLElement;

    path: string | undefined;

    movies: MoviesTop;

    constructor(path?: string) {
        this.page = new Page(path);
        this.container = this.page.draw();
        this.movies = new MoviesTop();
    }

    draw(): HTMLElement {
        this.movies.draw(this.container);
        this.movies.changePage(1);
        return this.container;
    }

    clear(): void {
        this.page.clear();
    }
}
