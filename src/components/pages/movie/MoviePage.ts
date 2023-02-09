import Page from '../Page';

export default class Movie {
    page: Page;

    container: HTMLElement;

    path: string | undefined;

    constructor(path?: string) {
        this.page = new Page(path);
        this.container = this.page.draw();
    }

    draw(): HTMLElement {
        const title = document.createElement('p');
        title.textContent = 'Тут будет страница с конкретным фильмом';
        this.container.appendChild(title);

        this.container.classList.add('movie', 'container');
        return this.container;
    }

    clear(): void {
        this.page.clear();
    }
}
