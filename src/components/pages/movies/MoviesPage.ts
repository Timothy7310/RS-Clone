import Page from '../Page';

export default class MoviesPage {
    page: Page;

    container: HTMLElement;

    path: string | undefined;

    constructor(path?: string) {
        this.page = new Page(path);
        this.container = this.page.draw();
    }

    draw(): HTMLElement {
        const title = document.createElement('p');
        title.textContent = 'Тут будет страница с каким-то количеством фильмов';
        this.container.appendChild(title);

        const linkToMovie = document.createElement('a');
        linkToMovie.textContent = 'Ссылка на какой-то фильм';
        linkToMovie.href = '#/movie';
        this.container.appendChild(linkToMovie);

        this.container.classList.add('movies', 'container');
        return this.container;
    }

    clear(): void {
        this.page.clear();
    }
}
