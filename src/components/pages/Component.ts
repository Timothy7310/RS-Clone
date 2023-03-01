export default class Component {
    container: HTMLElement;

    constructor(tagHTML: string, className: string) {
        this.container = document.createElement(tagHTML);
        this.container.classList.add(className);
    }

    draw(): HTMLElement {
        return this.container;
    }

    clear(): void {
        this.container.remove();
    }
}
