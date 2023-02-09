import Page from '../Page';

export default class Cinema extends Page {
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor(path?: string) {
        super(path);
    }

    draw(): HTMLElement {
        const title = document.createElement('p');
        title.textContent = 'Тут будет страница сеансов кино в кинотеатре';
        this.container.appendChild(title);

        this.container.classList.add('cinema', 'container');
        return this.container;
    }

    clear(): void {
        super.clear();
    }
}
