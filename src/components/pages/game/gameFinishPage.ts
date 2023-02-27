import Page from '../Page';
import GameFinishContainer from './gameFinishContainer';

export default class GameFinish {
    page: Page;

    container: HTMLElement;

    path: string | undefined;

    gameFinishContainer: GameFinishContainer;

    constructor(path?: string) {
        this.page = new Page(path);
        this.container = this.page.draw();
        this.gameFinishContainer = new GameFinishContainer();
    }

    draw(): HTMLElement {
        this.gameFinishContainer.draw(this.container);
        return this.container;
    }

    clear(): void {
        this.page.clear();
    }
}
