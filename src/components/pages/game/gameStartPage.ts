import Page from '../Page';
import GameStartcontainer from './gameStartContainer';

export default class Gamestart {
    page: Page;

    container: HTMLElement;

    path: string | undefined;

    gameStartContent: GameStartcontainer;

    constructor(path?: string) {
        this.page = new Page(path);
        this.container = this.page.draw();
        this.gameStartContent = new GameStartcontainer();
    }

    draw(): HTMLElement {
        this.gameStartContent.draw(this.container);
        return this.container;
    }

    clear(): void {
        this.page.clear();
    }
}
