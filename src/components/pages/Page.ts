export default class Page {
    container: HTMLElement;

    path: string | undefined;

    constructor(path?: string) {
        this.container = document.createElement('div');
        if (path) {
            this.path = path;
        } else {
            this.path = '';
        }
    }

    draw(): HTMLElement {
        if (this.path) {
            this.container.insertAdjacentHTML('afterbegin', this.path);
        }
        return this.container;
    }

    clear(): void {
        this.container.remove();
    }
}
