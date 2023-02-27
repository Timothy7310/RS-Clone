import Page from '../Page';
import GamePageContainer from './gamePageContainer';

export default class GamePage {
    page: Page;

    container: HTMLElement;

    path: string | undefined;

    gamePageContainer: GamePageContainer;

    constructor(path?: string) {
        this.page = new Page(path);
        this.container = this.page.draw();
        this.gamePageContainer = new GamePageContainer();
    }

    draw(): HTMLElement {
        this.gamePageContainer.draw(this.container);
        return this.container;
    }

    clear(): void {
        this.page.clear();
    }

    showQuestion() {
    }
}
