import Controller from '../../../controller/controller';
import rating from '../../../templates/movie/rating';
import Component from '../../Component';

export default class Rating {
    component: Component;

    container: HTMLElement;

    controller: Controller;

    constructor() {
        this.component = new Component('section', 'raiting');
        this.container = this.component.draw();
        this.controller = new Controller();
    }

    async draw(parentContainer: HTMLElement): Promise<void> {
        const movie = await this.controller.searchMovie('505898', 'id');

        this.container.insertAdjacentHTML('afterbegin', rating(movie));

        parentContainer.appendChild(this.container);
        parentContainer.classList.add('movie', 'container');
    }
}
