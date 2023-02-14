import Controller from '../../../controller/controller';
import trailers from '../../../templates/movie/trailers';
import Component from '../../Component';

export default class Trailers {
    component: Component;

    container: HTMLElement;

    controller: Controller;

    constructor() {
        this.component = new Component('section', 'description');
        this.container = this.component.draw();
        this.controller = new Controller();
    }

    async draw(parentContainer: HTMLElement): Promise<void> {
        const movie = await this.controller.searchMovie('505898', 'id');

        this.container.insertAdjacentHTML('afterbegin', trailers(movie));

        parentContainer.appendChild(this.container);
        parentContainer.classList.add('movie', 'container');
    }
}
