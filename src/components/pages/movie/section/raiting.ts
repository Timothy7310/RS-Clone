import Controller from '../../../controller/controllerKP';
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

    async draw(parentContainer: HTMLElement, idNumber: string): Promise<void> {
        const movie = await this.controller.getMovieForId(idNumber);

        this.container.insertAdjacentHTML('beforeend', rating(movie));

        parentContainer.appendChild(this.container);
        parentContainer.classList.add('movie', 'container');
    }
}
