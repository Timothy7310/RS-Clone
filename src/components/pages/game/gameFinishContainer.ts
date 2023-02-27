import gameFinishTemplate from '../../templates/game/gameFinishTemplate';
import Component from '../Component';

export default class GameFinishContainer {
    component: Component;

    container: HTMLElement;

    constructor() {
        this.component = new Component('div', 'quiz-finish');
        this.container = this.component.draw();
    }

    draw(parentContainer: HTMLElement) {
        this.container.insertAdjacentHTML('afterbegin', gameFinishTemplate);
        parentContainer.appendChild(this.container);
        parentContainer.classList.add('container');
    }
}
