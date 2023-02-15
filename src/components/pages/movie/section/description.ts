import Controller from '../../../controller/controller';
import description from '../../../templates/movie/description';
import Component from '../../Component';

export default class Description {
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

        this.container.insertAdjacentHTML('beforeend', description(movie));

        parentContainer.appendChild(this.container);
        parentContainer.classList.add('movie', 'container');
    }
}
