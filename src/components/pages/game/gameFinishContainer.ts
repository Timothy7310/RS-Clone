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
        const data = localStorage.getItem('score');
        if (data) {
            this.container.insertAdjacentHTML('afterbegin', gameFinishTemplate(data));
        } else {
            this.container.insertAdjacentHTML('afterbegin', gameFinishTemplate('0'));
        }
        parentContainer.appendChild(this.container);
        parentContainer.classList.add('container');
    }
}
