import Page from '../Page';
import ErrorContent from './ErrorContent';

export default class Error {
    page: Page;

    container: HTMLElement;

    content: ErrorContent;

    path: string | undefined;

    constructor(path?: string) {
        this.page = new Page(path);
        this.container = this.page.draw();
        this.content = new ErrorContent();
    }

    draw(): HTMLElement {
        this.container.appendChild(this.content.draw());
        this.container.classList.add('error_404');
        return this.container;
    }

    clear(): void {
        this.page.clear();
        this.content.clear();
    }
}
