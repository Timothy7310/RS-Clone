import gameStartTemplate from '../../templates/game/gameStartTemplate';
import Component from '../Component';

export default class GameStartcontainer {
    component: Component;

    container: HTMLElement;

    constructor() {
        this.component = new Component('div', 'quiz-start');
        this.container = this.component.draw();
    }

    draw(parentContainer: HTMLElement) {
        this.container.insertAdjacentHTML('afterbegin', gameStartTemplate);
        parentContainer.appendChild(this.container);
        parentContainer.classList.add('container');
    }
}
