import Page from '../Page';
import userProfileTemplate from '../../templates/userProfile';

export default class UserProfile {
    page: Page;

    container: HTMLElement;

    path: string | undefined;

    constructor(path?: string) {
        this.page = new Page(path);
        this.container = this.page.draw();
    }

    draw(): HTMLElement {
        this.container.classList.add('user-profile');
        this.container.innerHTML = userProfileTemplate;
        return this.container;
    }

    clear(): void {
        this.page.clear();
    }
}
