// import GameTemplate from '../../templates/game/gamePageTemplate';
// import gamePageTemplate from '../../templates/game/gamePageTemplate';
import Component from '../Component';
import Quiz from './Quiz';

export default class GamePageContainer {
    component: Component;

    container: HTMLElement;

    constructor() {
        this.component = new Component('div', 'quiz-start');
        this.container = this.component.draw();
    }

    draw(parentContainer: HTMLElement) {
        // const game = new GameTemplate();
        // this.container.insertAdjacentHTML('afterbegin', gamePageTemplate());
        const quiz = new Quiz(this.container);
        parentContainer.appendChild(this.container);
        parentContainer.classList.add('container');
    }
}
