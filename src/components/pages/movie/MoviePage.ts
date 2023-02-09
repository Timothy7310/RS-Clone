import Page from '../Page';

export default class Movie extends Page {
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor(path?: string) {
        super(path);
    }

    draw(): HTMLElement {
        const title = document.createElement('p');
        title.textContent = 'Тут будет страница с конкретным фильмом';
        this.container.appendChild(title);

        this.container.classList.add('movie', 'container');
        return this.container;
    }

    clear(): void {
        super.clear();
    }
}
