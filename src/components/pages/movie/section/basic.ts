import Controller from '../../../controller/controllerKP';
import about from '../../../templates/movie/about';
import basicColumn from '../../../templates/movie/basic_column';
import Component from '../../Component';

export default class Basic {
    component: Component;

    container: HTMLElement;

    controller: Controller;

    constructor() {
        this.component = new Component('section', 'basic');
        this.container = this.component.draw();
        this.controller = new Controller();
    }

    async draw(parentContainer: HTMLElement, idNumber: string): Promise<void> {
        const movie = await this.controller.getMovieForId(idNumber);

        this.container.insertAdjacentHTML('afterbegin', basicColumn(movie));
        this.container.insertAdjacentHTML('beforeend', about(movie));
        parentContainer.appendChild(this.container);
        parentContainer.classList.add('movie', 'container');
    }
}
